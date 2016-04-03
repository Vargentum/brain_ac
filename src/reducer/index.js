import {combineReducers} from 'redux'
import counter from './counter'

const reducer = combineReducers({
  counter
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