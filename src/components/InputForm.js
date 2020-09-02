import React, { useState } from "react"

import AddButton from "./AddButton"

function InputForm() {

    const [todo, setTodo] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(todo);
    }

    return (
        <div className="form-input-box">
        </div>
    )

}

export default InputForm;