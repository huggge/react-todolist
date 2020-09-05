import React from "react";

import "materialize-css";
import { Button } from 'react-materialize';

function RemoveTodoItem(props) {
    return (
        <span>
            <Button
                node="a"
                small
                style={{
                    marginRight: '5px'
                }}
                tabIndex="1"
                waves="orange"
                onClick={props.removeTodoItem}>
                Remove item
            </Button>
        </span>
    )
}

export default RemoveTodoItem;