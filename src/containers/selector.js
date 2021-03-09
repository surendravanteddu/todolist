import {createStructuredSelector} from "reselect";

const todoList =  (state, props) => state.get(props.name)
const isLoading = (state, props) => {
    return  state.getIn(['isLoading', props.name], false)
}

export const todoListData = createStructuredSelector({
    todoItems: todoList
})

export const loadingData = createStructuredSelector({
    isLoading
})

