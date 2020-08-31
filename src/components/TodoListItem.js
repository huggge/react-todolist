import React from "react";

function TodoListItem(props) {
    return (
        <div className="todo-item">
            <li>
                <input type="checkbox" />
                {`id: ${props.id} `}
                <br/>
                {`name: ${props.item}`}
                <p>
                    {`description: ${props.description}`}
                </p>
                <hr/>
            </li>
        </div>
    )
}

export default TodoListItem;