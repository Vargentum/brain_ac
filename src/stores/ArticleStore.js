import dispatcher from "../dispatcher/dispatcher"
import SimpleStore from "./SimpleStore"
import {LOADING_STATES} from "../utils/constants"
import {loadAllArticles} from "../AC/loadResource"

const {start, success, error} = LOADING_STATES

export default class ArticleStore extends SimpleStore {
  constructor(...args) {
    super(...args)

    dispatcher.register(({type, data}) => {
      switch (type) {
        case `article_${start}`:
          this.loading = true
          break;

        case `article_${error}`:
          break;

        case `article_${success}`:
          this.loading = false
          this.loaded = true
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

  getOrLoadAll() {
    if (!this.loading && !this.loaded) loadAllArticles()
    return this.getAll()
  }
}
