import React, { useState } from "react"


import "materialize-css";
import { Button, TextInput, Row, Col } from 'react-materialize';
import { v4 } from "uuid";
import AddButton from "./AddButton";
import RemoveTodoItem from "./RemoveTodoItem";

function InputForm({ addTodoItem, removeTodoItem}) {

    const [todo, setTodo] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodoItem(todo)
        setTodo("");
    }

    return (
        <div >

            <Col></Col>
            <Col s={6}>
                <form onSubmit={handleSubmit} id="myForm">
                    <TextInput s={4} m={5} type="text" value={todo} required onChange={(e) => setTodo(e.target.value)} />
                    <AddButton handleSubmit={handleSubmit} />
                    <RemoveTodoItem removeTodoItem={removeTodoItem}/>
                    <br />
                    <br />
                </form>

            </Col>

        </div>
    )

}

export default InputForm;