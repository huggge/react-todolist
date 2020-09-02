import React from "react";
import itemsData from "./itemDB";

function TodoListItem(props) { 

    return (
        <div className="todo-item">
            <li>
                <input type="checkbox" checked={props.completed} onChange={(event) => props.handleChange(props.id)}/>
                <h5>{props.title}</h5>
                <p>{props.id}</p>
            </li>
        </div>
    )
}

export default TodoListItem;