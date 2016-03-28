class ArticleStore  {
  constructor(articles) {
    this.__articles = articles
  }

  getAll() {
    return this.__articles.slice()  //return new instance to avoid direct access
  }

  __add(article) {
    this.__articles.push(article)
  }

  __delete(id) {
    return this.__articles.filter(a => a.id !== id)
  }
}
export default ArticleStore