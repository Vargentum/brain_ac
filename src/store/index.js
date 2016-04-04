import {createStore, applyMiddleware, compose} from 'redux'
import appReducer from '../reducer'
import createLogger from "redux-logger"
import loadArticles from "../middlewares/loadArticles"
import Devtools from '../containers/Devtools'

const enhanser = compose(
  applyMiddleware(loadArticles, createLogger()),
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