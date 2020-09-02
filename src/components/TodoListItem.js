import React from "react";

function TodoListItem(props) {

    return (
        <div className="todo-item">
            <li>
                <input className="checkbox" type="checkbox" checked={props.completed} onChange={(event) => props.handleChange(props.id)} />
                <h5>{props.title}</h5>
                <br/>
                <p>{props.id}</p>
                <hr />
            </li>
        </div>
    )
}

export default TodoListItem;