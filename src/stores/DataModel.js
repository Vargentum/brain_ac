export default class DataModel {
  constructor(stores, item) {
    Object.assign(this, item)
    this.__stores = stores
  }

  getRelated(type) {
    const relatedStore = this.__stores[type]
    if (!this[type] || !relatedStore) return []
    return this[type].map(relatedStore.getById)
  }
}
