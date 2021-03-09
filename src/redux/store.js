import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import {Map} from 'immutable'

// Note: this API requires redux@>=3.1.0
const store = createStore(
    rootReducer,
    Map(),
    compose(
        applyMiddleware(thunk),
        window && window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    )
);

export default store
