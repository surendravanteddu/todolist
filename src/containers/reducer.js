import {fromJS, List} from "immutable";

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
