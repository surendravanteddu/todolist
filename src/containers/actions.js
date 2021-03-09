export const addItem = (item) => {
    return (dispatch) => {
        dispatch({
            type: 'add',
            data: item
        })
    }
}

export const removeItem = (index) => {
    return (dispatch) => {
        dispatch({
            type: 'remove',
            data: {
                index
            }
        })
    }
}
