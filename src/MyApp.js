import React from 'react'
import AddItem from "./components/AddItem";
import ToDoList from "./containers/ToDoList";

const MyApp = () => {
    return <div>
        <AddItem/>
        <ToDoList name='todo'/>
    </div>
}

export default MyApp
