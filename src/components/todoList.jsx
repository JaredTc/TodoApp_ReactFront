import React, { useState, useEffect, useCallback } from "react";
import axios from 'axios'
import { AddItemForm } from "./AddItemForm";
import Item from "./Item";



const BASE_URL = 'http://localhost:3001/api/items'


export const TodoList = () => {


    const [items, setItems] = useState([]);

    useEffect(() => {

        axios
            .get(BASE_URL)
            .then((res) => { setItems(res.data.items) });

    }, [])



    const onItemCreate = async (newItem) => {
        // Send POST request
        const response = await axios.post(BASE_URL, { name: newItem })

        // Update my frontend
        setItems([...items, { name: newItem, completed: false, id: response.data.id }])

    }

    const onItemUpdate = (item) => {
        axios.put(`${BASE_URL}/${item.id}`, item);
    }



    const onItemDelete = useCallback(
        (item) => {
            const index = items.findIndex((i) => i.id === item.id);
            setItems([...items.slice(0, index), ...items.slice(index + 1)]);

            axios.delete(`${BASE_URL}/${item.id}`);
        },
        [items]
    );



    return (

        <>
            <AddItemForm onItemCreate={onItemCreate} />

            {items && items.length === 0 && (
                <p className='text-center advertencia'>
                    You have no todo items yet! Add one above!
                </p>
            )}

            {items && items.map((item) => {

                return (
                    <div className="item-card">
                        <div className="div-item">
                            <Item
                                item={item}
                                key={item.id}
                                onItemUpdate={onItemUpdate}
                                onItemDelete={onItemDelete}
                            />
                        </div>
                    </div>

                )

            })}


        </>

    )
}