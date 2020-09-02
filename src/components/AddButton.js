import React from "react";

function AddButton(props) {
    return (
        <button onClick={props.addTodoItem}>Add todo item</button>
    )
}

export default AddButton