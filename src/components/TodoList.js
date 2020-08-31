import React from "react";

import "../style.css";

import TodoListItem from "./TodoListItem";
import itemsData from "./itemsdb"

const todoItem1 = {
    item: "lasse",
    description: "lorem ipsum lorem dorem tika mazala"
}

const todoItem2 = {
    item: "tommy",
    description: "lorem ipzum lanus"
}

const itemsArray = itemsData.map((item) => {
    return (
        <TodoListItem id={item.id} item={item.item} description={item.description} />
    )
})

function TodoList() {
    return (
        <div className="todo-list">
            <ul>
                {itemsArray}
            </ul>
        </div>
    )
}

export default TodoList;