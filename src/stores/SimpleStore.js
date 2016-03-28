import {EventEmitter} from "events"

export default class SimpleStore extends EventEmitter {
  constructor(stores, initState) {
    super()
    this.stores = stores
    this.__items = {}
    if (initState) initState.forEach(this.__add.bind(this))
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
    console.log(this.__items)
  }

  __delete(id) {
    delete this.__items[id]
  }
}
