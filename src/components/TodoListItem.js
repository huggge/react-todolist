import React from "react";

import { Checkbox } from 'react-materialize';
import { v4 } from "uuid";

function TodoListItem(props) {

    return (
        <div className="todo-item">
            <li>
                <Checkbox
                    id={v4()}
                    label=""
                    value="Red"
                    type="checkbox" checked={props.completed} onChange={(event) => props.handleChange(props.id)}
                />
                <h5>{props.title}</h5>
                <br />
                <p>{props.id}</p>
                <hr />
            </li>
        </div>
    )
}

export default TodoListItem;