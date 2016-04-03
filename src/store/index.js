import {createStore} from 'redux'
import appReducer from '../reducer'

const appStore = createStore(appReducer)

window.store = appStore

export default appStore