import React from "react";

import "materialize-css";
import { Button, Card, Row, Col } from 'react-materialize';

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
                onClick={props.handleSubmit}
                type="submit" value="add text">
                Add item
            </Button>
        </span>

    )
}

export default AddButton