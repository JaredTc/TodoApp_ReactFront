import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";


function Item({ item, onItemDelete, onItemUpdate }) {


    const [completed, setCompleted] = React.useState(item.completed);

    const toggleCompletion = () => {
        onItemUpdate({ ...item, completed: !item.completed })
        setCompleted(!completed);
    };





    const deleteItem = () => {
        onItemDelete(item);
    };

    return (
        <Row>
            <Col >
                <Form>
                    <Form.Check

                        type={'checkbox'}
                        checked={completed}
                        onClick={toggleCompletion}

                    />
                </Form>

            </Col>

            <Col xs={10} className={completed ? 'completed' : ''}>
                <h2>{item.name}</h2>
            </Col>
            <Col>
                <Button onClick={deleteItem} variant="link">
                    <i className="fa fa-remove text-danger"></i>
                </Button>
            </Col>
        </Row>)

    // onClick={onItemDelete}


};

export default Item;