export default class DataModel {
  constructor(store, item) {
    Object.assign(this, item)
    this.__store = store
  }

  getRelated(type) {
    const relatedStore = this.__store.getStores()[type]
    if (!this[type] || !relatedStore) return []
    return this[type].map(relatedStore.getById)
  }
}
