import React, {PropTypes} from 'react';
import {connect} from 'react-redux'
import deleteArticle from "../AC/deleteArticle"

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
    } = this.props

    const list = entities.map(this.r_article)
    return (
        <ul>{list}</ul>
    )
  }
}

export default ArticleListUI;



class ArticleList extends React.Component {
  static propTypes = {}

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
  deleteArticle
})(ArticleList);
