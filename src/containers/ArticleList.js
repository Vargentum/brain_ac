import React, {PropTypes} from 'react';
import {connect} from 'react-redux'
import deleteArticle from "../AC/deleteArticle"
import loadArticles from "../AC/loadArticles"

class ArticleListUI extends React.Component {
  static propTypes = {}

  handleDelete = id => ev => {
    ev.preventDefault(ev)
    this.props.deleteArticle(id)
  }

  r_article = ({id, title, text}) => {
    return (
      <li key={id}>
        <h3>{title}</h3>
        <p>{text}</p>
        <button onClick={this.handleDelete(id)}>Delete</button>
      </li>
    )
  }
    
  render() {
    const {
      entities
      ,loading
      ,loaded
    } = this.props

    if (loading) return <h3>Loading...</h3>

    const list = entities.map(this.r_article)
    return (
        <ul>{list}</ul>
    )
  }
}

export default ArticleListUI;



class ArticleList extends React.Component {
  static propTypes = {}

  componentDidMount() {
    const {loading, loaded, loadArticles} = this.props
    
    if (!loading && !loaded) loadArticles()
  }

  render() {
    return (
      <ArticleListUI {...this.props} />
    )
  }
}

export default connect((store) => {
  const {articles} = store
  return articles
}, {
  deleteArticle, loadArticles
})(ArticleList);
