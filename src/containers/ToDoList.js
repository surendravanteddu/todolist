import React from 'react'
import PropTypes from 'prop-types'

import ToDoListItem from "../components/ToDoListItem";

const ToDoList = ({todoItems = []}) => {
    console.log('This is todo list');
    return (<div>
        {
            todoItems.map((item, key) => {
                console.log(item, '<---item1', key);
                return (<ToDoListItem name={item.name} description={item.description} key={key}/>)
            })
        }
    </div>)
}

ToDoList.propTypes = {
    todoItems: PropTypes.array
}

export default ToDoList
