import React from "react";

function AddButton(props) {
    return (
        <button className="button" onClick={props.addTodoItem}>Add item</button>
    )
}

export default AddButton