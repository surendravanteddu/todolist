import React from 'react'
import PropTypes from 'prop-types'
import {List} from 'immutable'

import ToDoListItem from "../components/ToDoListItem";
import {useDispatch, useSelector} from "react-redux";
import {todoListData} from "./selector";
import {removeItem} from "./actions";

const ToDoList = ({name}) => {
    const {todoItems} = useSelector((state) => todoListData(state, {name}))
    const dispatch = useDispatch()
    const onRemove = (e) => {
        dispatch(removeItem(e.target.id))
    }
    return (<div>
        {
            todoItems.map((item, key) => {
                return (<ToDoListItem name={item.get('name')}
                                      description={item.get('description', '')}
                                      key={key}
                                      uniqueKey={key}
                                      onRemove={onRemove}
                />)
            })
        }
    </div>)
}

ToDoList.propTypes = {
    todoItems: PropTypes.instanceOf(List)
}

export default ToDoList
