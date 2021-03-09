import {createStructuredSelector} from "reselect";

const todoList =  (state, props) => state.get(props.name)

export const todoListData = createStructuredSelector({
    todoItems: todoList
})

