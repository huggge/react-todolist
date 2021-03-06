import React from "react";

import "materialize-css";
import { Button } from 'react-materialize';

function AddButton(props) {
    return (
        <span>
            <Button
                node="a"
                small
                style={{
                    marginRight: '5px',
                }}
                waves="orange"
                tabIndex="0"
                onClick={props.handleSubmit}
                type="submit" value="add text">
                Add item
            </Button>
        </span>

    )
}

export default AddButton