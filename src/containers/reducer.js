import {fromJS, List, Map} from "immutable";

export default function todo(state = List(), action) {
    switch (action.type) {
        case 'add':
            state = state.push(fromJS(action.data))
            break;
        case 'remove':
            state = state.remove(action.data.index)
            break;
        default:
            return state
    }
    return state
}


export function isLoading(state = Map(), action) {
    switch (action.type) {
        case 'adding':
            state = state.set('add', true)
            break;
        case 'removing':
            state = state.set('remove',  true)
            break;
        case 'add':
            state = state.set('add', false)
            break;
        case 'remove':
            state = state.set('remove',  false)
            break;
        default:
            return state
    }
    return state
}
