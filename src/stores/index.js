import SimpleStore from "./SimpleStore"
import ArticleStore from "./ArticleStore"
import {articles as items} from "../fixtures"

export const articleStore = new ArticleStore(items)
export const simpleStore = new SimpleStore()
