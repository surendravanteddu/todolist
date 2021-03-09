import {combineReducers} from 'redux-immutable'
import todoReducer, {isLoading} from  '../containers/reducer'

export default combineReducers({
    todo: todoReducer,
    isLoading
})
