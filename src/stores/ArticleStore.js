import dispatcher from "../dispatcher/dispatcher"
import SimpleStore from "./SimpleStore"

export default class ArticleStore extends SimpleStore {
  constructor(...args) {
    super(...args)

    dispatcher.register(({type, data}) => {
      switch (type) {
        case "DELETE_ARTICLE": 
          this.__delete(data.id)
          this.emitUpdates()
          break;
      }
    })
  }
}
