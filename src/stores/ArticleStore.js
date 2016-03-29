import dispatcher from "../dispatcher/dispatcher"
import SimpleStore from "./SimpleStore"
import {LOADING_STATES} from "../utils/constants"

const {start, success, error} = LOADING_STATES

export default class ArticleStore extends SimpleStore {
  constructor(...args) {
    super(...args)

    dispatcher.register(({type, data}) => {
      switch (type) {
        case `article_${start}`:
          break;

        case `article_${error}`:
          break;

        case `article_${success}`:
          data.forEach(this.__add)
          break;

        case "DELETE_ARTICLE": 
          this.__delete(data.id)
          break;

        default:
          return null
      }

      this.emitUpdates()
    })
  }
}
