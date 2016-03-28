import SimpleStore from "./SimpleStore"
import ArticleStore from "./ArticleStore"
import {articles, comments} from "../fixtures"

const stores = {}

Object.assign(stores, {
  articleStore: new ArticleStore(stores, articles),
  commentsStore: new SimpleStore(stores, comments)
})

window.stores = stores //for debugging

export const articleStore = stores.articleStore
export const commentsStore = stores.commentsStore
