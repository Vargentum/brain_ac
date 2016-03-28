import {EventEmitter} from "events"
import DataModel from "./DataModel"

export default class SimpleStore extends EventEmitter {
  constructor(stores, initState) {
    super()
    this.__stores = stores
    this.__items = {}
    if (initState) initState.forEach(this.__add)
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

  getById = (id) => {
    return this.__items[id]
  }

  getStores() {
    return this.__stores
  }

  __add = (item) => {
    this.__items[item.id] = new DataModel(this, item)
  }

  __delete(id) {
    delete this.__items[id]
  }
}
