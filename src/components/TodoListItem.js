import React from "react";

function TodoListItem(props) { 

    return (
        <div className="todo-item">
            <li>
                <input type="checkbox" checked={props.item.completed} onChange={() => props.handleChange(props.item.id)}/>
                {`id: ${props.item.id} `}
                <br/>
                {`name: ${props.item.item}`}
                <p>
                    {`description: ${props.item.description}`}
                </p>
                <hr/>
            </li>
        </div>
    )
}

export default TodoListItem;