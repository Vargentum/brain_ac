import {combineReducers} from 'redux'
import counter from './counter'

const appReducer = combineReducers({
  counter
})

export default appReducer

/*
equal to

reducer = function(state = {}, type) {
  return {
    counter: counter(state.reducer, type)
  }
}


*/