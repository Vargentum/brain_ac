import dispatcher from "../dispatcher/dispatcher";
import {EventEmitter} from "events";

export default class ArticleStore extends EventEmitter {
  constructor(articles) {
    super()
    this.__articles = articles

    dispatcher.register(({type, data}) => {
      console.log(arguments, 'registered')
      switch (type) {
        case "DELETE_ARTICLE": 
          this.__delete(data.id)
          this.emitUpdates()
          break;
      }
    })
  }

  emitUpdates() {
    this.emit('UPD')
  }

  addUpdateListener(callback) {
    this.on('UPD', callback)
  }

  removeUpdateListener() {
    this.off('UPD')
  }

  getAll() {
    return this.__articles.slice()  //return new instance to avoid direct access
  }

  __add(article) {
    this.__articles.push(article)
  }

  __delete(id) {
    this.__articles = this.__articles.filter(a => a.id !== id)
  }
}
