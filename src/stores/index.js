import SimpleStore from "./SimpleStore"
import ArticleStore from "./ArticleStore"
import {articles, comments} from "../fixtures"

const stores = {}

Object.assign(stores, {
  articles: new ArticleStore(stores),
  comments: new SimpleStore(stores, comments)
})

window.stores = stores //for debugging

export const articleStore = stores.articles
export const commentsStore = stores.comments
