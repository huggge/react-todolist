import React, { useState } from "react"


function InputForm( { addTodoItem }) {

    const [todo, setTodo] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(todo);
        addTodoItem(todo)
        setTodo("");
    }

    return (
        <div >
            <form onSubmit={handleSubmit}>
                <label>Title:</label>
                <input type="text" value={todo} required onChange={(e) => setTodo(e.target.value)}/>
                <input type="submit" value="add text"/>
            </form>
        </div>
    )

}

export default InputForm;