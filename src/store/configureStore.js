import { createStore } from 'redux'
import calcReducer from '../reducers/calcReducer'

const configureStore = () => {
    const store = createStore(calcReducer)
    return store
}

export default configureStore