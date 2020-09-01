import React from "react"

function InputForm() {

    return (
        <div>
            <div className="form-input-box">
                <label for="fname"></label>
                <input type="text" id="fname" name="fname" value="John" />
                <textarea name="message" rows="5" cols="40" />
                <button></button>
            </div>
            <br />
            <br />
        </div>
    )

}

export default InputForm;