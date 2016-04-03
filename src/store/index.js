import {createStore} from 'redux'
import appReducer from '../reducer'

const store = createStore(appReducer)

window.store = store
export default store