export const update = (num) => {
    return ({
        type : 'UPDATE',
        payload : num
    })
}

export const display = (val) => {
    return ({
        type:'DISPLAY',
        payload : val
    })
}

export const clear = () => {
    return({
        type : 'CLEAR'
    })
}

export const backSpace = () => {
    return ({
        type: 'BACKSPACE'
    })
}

