import React, { useState } from "react";
import { v4 } from "uuid";

import TodoListItem from "./TodoListItem";

import ControlPanel from "./ControlPanel";

// Importing fakedb json.
import itemsData from "./itemDB"


function TodoList() {
    // state
    const [todoList, setTodoList] = useState([
        { title: "hejsan", completed: false, id: v4() },
        { title: "svejsan", completed: false, id: v4() },
        { title: "tjolahoppsan", completed: false, id: v4() },
        { title: "tjenare", completed: false, id: v4() }
    ]);

    // change checkbox
    function handleChange(id) {

        setTodoList(todoList => {
            const updatedTodoList = todoList.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
            return updatedTodoList
        })

    }

    function removeTodoItem(id) {
        const result = todoList.filter(todo => todo.completed === false)
        setTodoList(result)
    }

    // add todo function
    const addTodoItem = (title) => {
        setTodoList([...todoList, { title: title, completed: false, id: v4() }])
    }
    return (
        <div>
            <div className="button-div">
                <ControlPanel addTodoItem={addTodoItem} removeTodoItem={removeTodoItem}/>
            </div>
            <div className="todo-list">
                <ul>
                    {todoList.map(todo => {
                        return (
                            <TodoListItem key={todo.id} completed={todo.completed} title={todo.title} id={todo.id} handleChange={handleChange}></TodoListItem>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default TodoList;