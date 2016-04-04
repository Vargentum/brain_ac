import reqwest from "reqwest"
import {LOADING_STATES} from '../utils/constants'

const {START, SUCCESS, ERROR, END} = LOADING_STATES


export default store => next => action => {
  if (!action.apiUrl) return next(action)
  const {type, apiUrl, ...rest} = action
  
  next({...rest, type: START})

  setTimeout(() => {
    reqwest({
      url: apiUrl,
      success: (response) => next({...rest, type: SUCCESS, data: {response}}),
      error: (error) => next({...rest, type: ERROR, data: {error}})
    })  
  }, 1000) // loading emulation
}