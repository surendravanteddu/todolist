import React, {useCallback} from 'react'
import ToDoListItem from "../components/ToDoListItem";
import {useDispatch, useSelector} from "react-redux";
import {todoListData} from "./selector";
import {removeItem} from "./actions";

const ToDoList = ({name}) => {
    const {todoItems} = useSelector((state) => todoListData(state, {name}))
    const dispatch = useDispatch()
    const onRemove = useCallback((e) => {
        dispatch(removeItem(e.target.id))
    }, [])
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

export default ToDoList
