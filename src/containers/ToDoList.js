import React from 'react'
import PropTypes from 'prop-types'
import {List} from 'immutable'

import ToDoListItem from "../components/ToDoListItem";

const ToDoList = ({todoItems = List(), removeItem}) => {
    return (<div>
        {
            todoItems.map((item, key) => {
                return (<ToDoListItem name={item.get('name')}
                                      description={item.get('description', '')}
                                      key={key}
                                      removeItem={removeItem}
                                      uniqueKey={key}
                />)
            })
        }
    </div>)
}

ToDoList.propTypes = {
    todoItems: PropTypes.instanceOf(List),
    removeItem: PropTypes.func
}

export default ToDoList
