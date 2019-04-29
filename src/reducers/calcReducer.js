const initialCalcState = ''

const calcReducer = (state = initialCalcState, action) => {
    switch(action.type){
        case 'UPDATE':
            return action.payload
        case 'DISPLAY':
            return state + action.payload
        case 'CLEAR' : 
            return ''
        case 'BACKSPACE' : 
            if(state == 0)
            {
                return state
            }
            else{
                return state.slice(0,state.length-1)
            }
        default:
            return state
    }
}

export default calcReducer