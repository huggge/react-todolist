import React from "react";

function RemoveTodoItem(props) {
    return (
        <button className="button" onClick={props.removeTodoItem}>Remove items</button>
    )
}

export default RemoveTodoItem;