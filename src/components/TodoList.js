import React from "react";

import "../style.css";

import TodoListItem from "./TodoListItem";

// Importing fakedb json.
import itemsData from "./itemDB"

class TodoList extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: itemsData
        }
        
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(id) {
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
            return {
                todos: updatedTodos
            }
        })
    }

    render() {
        const todoItems = this.state.todos.map(
            (item) => {
            return <TodoListItem key={item.id} item={item} handleChange={this.handleChange}/>
            })
        return (
            <div className="todo-list">
                <ul>
                    {todoItems}
                </ul>
            </div>
        )
    }
}

export default TodoList;