import React from "react";

import AddButton from "./AddButton";
import RemoveTodoItem from "./RemoveTodoItem";

function ControlPanel(props) {
    return (
        <div>
        <AddButton addTodoItem={props.addTodoItem}/>
        <RemoveTodoItem removeTodoItem={props.removeTodoItem}/>
        <br/>
        <hr/>
        <br/>
        </div>
    )
}

export default ControlPanel;