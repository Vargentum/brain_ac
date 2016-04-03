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


if (module.hot) {
    module.hot.accept('../reducer', () =>
        store.replaceReducer(require('../reducer').default)
    );
}

export default store