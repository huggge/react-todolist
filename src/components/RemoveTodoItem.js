import React from "react";
import "materialize-css";
import { Button, Card, Row, Col } from 'react-materialize';

function RemoveTodoItem(props) {
    return (
        <span>
            <Button
                node="a"
                small
                style={{
                    marginRight: '5px'
                }}
                waves="light"
                onClick={props.removeTodoItem}>
                Remove item
            </Button>
        </span>
    )
}

export default RemoveTodoItem;