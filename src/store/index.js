import {createStore, applyMiddleware} from 'redux'
import appReducer from '../reducer'
import logger from '../middlewares/logger'

const enhanser = applyMiddleware(logger)

const store = createStore(appReducer, {}, enhanser)

window.store = store
export default store