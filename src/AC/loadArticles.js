import {LOAD_ARTICLES} from "../utils/constants"

export default () => {
  return {
    type: LOAD_ARTICLES,
    apiUrl: '/api/article' 
  }
}