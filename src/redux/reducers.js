import {combineReducers} from 'redux-immutable'
import todoReducer from  '../containers/reducer'

export default combineReducers({
    todo: todoReducer
})
