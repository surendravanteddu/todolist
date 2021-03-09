import React from 'react'
import PropTypes from 'prop-types'

const ToDoItem = ({name, description}) => {
    return (<div>
        {name}
    </div>)
}

ToDoItem.propTypes = {
    name: PropTypes.string,
    description: PropTypes.string
}
export default ToDoItem
