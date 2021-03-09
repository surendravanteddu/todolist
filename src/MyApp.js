import React from 'react'
import AddItem from "./components/AddItem";
import ToDoList from "./containers/ToDoList";
import {useState} from 'react'

const MyApp = () => {
    const [items, setItems] = useState([])
    const addItem = (item) => {
        items.push(item)
        setItems(items)
    }
    return <div>
        <AddItem addItem={addItem}/>
        <ToDoList todoItems={items}/>
    </div>
}

export default MyApp
