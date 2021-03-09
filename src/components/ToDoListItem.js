import React from 'react'
import PropTypes from 'prop-types'

const ToDoItem = ({name, description, uniqueKey, removeItem}) => {
    const onRemove = () => {
        removeItem(uniqueKey)
    }
    return (<div>
        {uniqueKey + 1} - {name} - {description} <span onClick={onRemove}>X</span>
    </div>)
}

ToDoItem.propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
    uniqueKey: PropTypes.number,
    removeItem: PropTypes.func
}
export default ToDoItem
