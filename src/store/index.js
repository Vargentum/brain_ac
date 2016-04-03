import {createStore, applyMiddleware, compose} from 'redux'
import appReducer from '../reducer'
import logger from '../middlewares/logger'
import Devtools from '../containers/Devtools'

const enhanser = compose(
  applyMiddleware(logger),
  Devtools.instrument()
)

const store = createStore(appReducer, {}, enhanser)

window.store = store
export default store