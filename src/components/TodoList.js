import React, { useState } from "react";
import { v4 } from "uuid";

import "materialize-css";
import { CardPanel, Button} from 'react-materialize';

import TodoListItem from "./TodoListItem";
import ControlPanel from "./ControlPanel";

// Importing fakedb json.
import {fetching, fetchAsync} from "../fetch";



function TodoList() {
    // state
    const [todoList, setTodoList] = useState([]);

    async function fetchData() {
        const arr = await fetchAsync();
        setTodoList(arr.items)
    }


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
        setTodoList([{ title: title, completed: false, id: v4() }, ...todoList])
    }
    return (
        <div>
            <div className="button-div">
                <ControlPanel addTodoItem={addTodoItem} removeTodoItem={removeTodoItem} />
                <Button onClick={fetchData}>Fetch Todolist from API</Button>
                <br/>
                <br/>
            </div>
            <div className="todo-list">
                <ul>
                    {todoList.map(todo => {
                        return (
                            <CardPanel key={v4()}>
                                <TodoListItem
                                    key={todo.id}
                                    completed={todo.completed}
                                    title={todo.title}
                                    id={todo.id}
                                    handleChange={handleChange}>
                                </TodoListItem>
                            </CardPanel>
                        )
                    })}
                </ul>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
        </div >
    )
}

export default TodoList;