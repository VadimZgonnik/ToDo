import React, {Component} from "react";
import TodoItems from "./TodoItems";

class ToDoList extends Component {

    state = {
        items: [],
    };

    constructor(props) {
        super(props);

        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.disableItem = this.disableItem.bind(this);
        this.editItem = this.editItem.bind(this);
        this.editItemText = this.editItemText.bind(this);
    }

    addItem(e) {
        if (this._inputElement.value !== "") {
            let newItem = {
                text: this._inputElement.value,
                key: Date.now(),
                checked: false,
                isEdit: false,
            };

            this.setState((prevState) => {
                return {
                    items: prevState.items.concat(newItem)
                };
            });

            this._inputElement.value = "";
        }
        e.preventDefault();
    }

    deleteItem(item) {
        return (e) => {
            if (item.checked) {
                return
            }
            this.setState((state) => ({
                items: state.items.filter((_item) => _item.key !== item.key),
            }));
        }
    }

    disableItem(item) {
        return (e) => {
            this.setState((state) => ({
                items: state.items.map((_item) => {
                    if (_item.key === item.key) {
                        _item.checked = !item.checked;
                    }
                    return _item;
                })
            }));
        }
    }

    editItem(item) {
        return (e) => {
            this.setState((state) => ({
                items: state.items.map((_item) => {
                    if (_item.key === item.key) {
                        _item.isEdit = !item.isEdit;
                    }
                    return _item;
                })
            }))
        }
    }

    editItemText(item) {
        return (e) => {
            this.setState((state) => ({
                items: state.items.map((_item) => {
                    if (_item.key === item.key) {
                        _item.text = item.text;
                        console.log(_item.text);
                    }
                    return _item;
                })
            }))
        }
    }

    render() {
        return (
            <div className="todoListMain">
                <div className='header'>
                    <form onSubmit={this.addItem}>
                        <input type="text" placeholder="enter task" ref={(a) => this._inputElement = a}/>
                        <button type="submit">add</button>
                    </form>
                </div>
                <TodoItems entries={this.state.items}
                           delete={this.deleteItem}
                           disableItem={this.disableItem}
                           editItem={this.editItem}
                           editItemText={this.editItemText}/>
            </div>
        );
    }
}

export default ToDoList