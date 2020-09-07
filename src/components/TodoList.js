import React, { useState } from "react";
import { v4 } from "uuid";

import "materialize-css";
import { CardPanel, Button } from 'react-materialize';

import TodoListItem from "./TodoListItem";
import ControlPanel from "./ControlPanel";

import { fetchAsync, fetching, fetching2 } from "../fetch";



function TodoList() {
    // state
    const [todoList, setTodoList] = useState([]);

    // get data and set state with async await
    async function fetchDataAndSetWithAsync() {
        const todoListApiArray = await fetchAsync();
        setTodoList(todoListApiArray.items)
    }

    // get data and set state via promises
    const fetchDataAndSetWithPromises = () => {
        fetching().then(data => {
            setTodoList(data.items)
        })
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

    // remove item and set state
    function removeTodoItem(id) {
        const result = todoList.filter(todo => todo.completed === false)
        setTodoList(result)
    }


    // add todo function and set state
    const addTodoItem = (title) => {
        setTodoList([{ title: title, completed: false, id: v4() }, ...todoList])
    }
    return (
        <div>
            <div className="button-div">
                <ControlPanel addTodoItem={addTodoItem} removeTodoItem={removeTodoItem} />
                <Button onClick={fetchDataAndSetWithAsync}>Fetch Todolist from API</Button>
                <br />
                <br />
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
            <br />
            <br />
            <br />
            <br />
        </div >
    )
}

export default TodoList;