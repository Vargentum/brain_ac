import dispatcher from "../dispatcher/dispatcher"
import reqwest from "reqwest"
import {LOADING_STATES} from "../utils/constants"

export const loadResource = (resource) => {
  const {start, success, error} = LOADING_STATES

  dispatcher.dispatch({
    type: `${resource}_${start}`
  })
  
  reqwest({
    url: `/api/${resource}`,
    error: (err) => {
      dispatcher.dispatch({
        type: `${resource}_${error}`,
        data: err
      })
    },
    success: (res) => {
      dispatcher.dispatch({
        type: `${resource}_${success}`,
        data: res
      })
    }
  })
}

export const loadAllArticles = () => loadResource('article')