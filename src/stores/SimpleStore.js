import {EventEmitter} from "events"

export default class SimpleStore extends EventEmitter {
  constructor(items) {
    super()
    this.__items = items
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
    return this.__items.slice()  //return new instance to avoid direct access
  }

  __add(article) {
    this.__items.push(article)
  }

  __delete(id) {
    this.__items = this.__items.filter(a => a.id !== id)
  }
}
