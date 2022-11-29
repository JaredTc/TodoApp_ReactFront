
import React from "react";
import { Button, Form, FormControl, InputGroup } from "react-bootstrap";

export const AddItemForm = ({ onItemCreate }) => {

    const [newItem, setNewItem] = React.useState('')

    const onChange = (event) => {
        setNewItem(event.target.value)
    }

    const onCreate = (event) => {
        event.preventDefault();
        onItemCreate(newItem);
        setNewItem('');

    }
    return (


        <Form onSubmit={onCreate}>
            <InputGroup>

                <FormControl
                    value={newItem}
                    onChange={onChange}
                    type="text"
                    placeholder="New Item"
                />

                <Button type="submit" variant='primary'>Add</Button>
            </InputGroup>
        </Form>


    );
}