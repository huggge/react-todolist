import React from "react";

import RemoveTodoItem from "./RemoveTodoItem";
import InputForm from "./InputForm";

function ControlPanel(props) {
    return (
        <div>
        <RemoveTodoItem removeTodoItem={props.removeTodoItem}/>
        <InputForm addTodoItem={props.addTodoItem}/>
        <br/>
        <hr/>
        <br/>
        </div>
    )
}

export default ControlPanel;