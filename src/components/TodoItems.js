import React, {Component} from "react";
import "../styls/TodoList.css"
import FlipMove from "react-flip-move";
import cs from "classnames"

class TodoItems extends Component {
    constructor(props) {
        super(props);

        this.renderLi = this.renderLi.bind(this);
    }

    renderLi(item) {
        return [
            <li onDoubleClick={this.props.editItem(item)}
                key={item.key}>
                {item.isEdit ? <input type="text" onChange={this.props.editItemText(item)}/> : <span>{item.text}</span>}
            </li>,
            <button onClick={this.props.delete(item)}
                    className={cs({
                        disable: item.checked,
                        btn: 'btn',
                    })}>delete</button>,
            <input type="checkbox" key={item.key + '_ch'} onChange={this.props.disableItem(item)}/>
        ]
    }

    render() {
        let todoEntries = this.props.entries;
        let listItems = todoEntries.map(this.renderLi);

        return (
            <ul className="theList">
                <FlipMove duration={250} easing="ease-out">
                    {listItems}
                </FlipMove>
            </ul>
        );
    }
}

export default TodoItems;
