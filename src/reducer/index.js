import {combineReducers} from 'redux'
import counter from './counter'
import articles from './articles'

const reducer = combineReducers({
  counter,
  articles
})

export default reducer

/*
equal to

reducer = function(state = {}, type) {
  return {
    counter: counter(state.reducer, type)
  }
}


*/