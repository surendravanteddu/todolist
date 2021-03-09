export const addItem = (item) => {
    return (dispatch) => {
        dispatch({
            type: 'adding'
        })
        setTimeout(()=> {
            dispatch({
                type: 'add',
                data: item
            })
        }, 1000)
    }
}

export const removeItem = (index) => {
    return (dispatch) => {
        dispatch({
            type: 'removing',
            data: {
                index
            }
        })
        setTimeout(()=> {
            dispatch({
                type: 'remove',
                data: {
                    index
                }
            })
        }, 1000)
    }
}
