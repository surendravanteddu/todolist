import React from 'react'
import AddItem from "./components/AddItem";
import ToDoList from "./containers/ToDoList";
import {useState} from 'react'
import {List} from 'immutable'

const MyApp = () => {
    let [items, setItems] = useState(List())
    const addItem = (item) => {
        items = items.push(item)
        setItems(items)
    }
    const removeItem = (index) => {
        items = items.remove(index)
        setItems(items)
    }
    return <div>
        <AddItem addItem={addItem}/>
        <ToDoList todoItems={items} removeItem={removeItem}/>
    </div>
}

export default MyApp
