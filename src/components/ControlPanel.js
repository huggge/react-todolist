import React from "react";

import InputForm from "./InputForm";

function ControlPanel(props) {
    return (
        <div>
            <InputForm addTodoItem={props.addTodoItem} removeTodoItem={props.removeTodoItem}/>
        </div>
    )
}

export default ControlPanel;