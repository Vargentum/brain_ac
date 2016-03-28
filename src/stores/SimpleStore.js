import {EventEmitter} from "events"

export default class SimpleStore extends EventEmitter {
  constructor(initState) {
    super()
    if (initState) this.__items = initState.forEach(this.__add)
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
    return Object.keys(this.__items).map(id => this.__items[id])
  }

  __add(item) {
    this.__items[item.id] = item
  }

  __delete(id) {
    delete this.__items[id]
  }
}
