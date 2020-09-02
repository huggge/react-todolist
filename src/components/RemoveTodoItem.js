import React from "react";

function RemoveTodoItem(props) {
    return (
        <button onClick={props.removeTodoItem}>Remove marked items</button>
    )
}

export default RemoveTodoItem;