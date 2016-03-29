import React, { Component, PropTypes } from 'react'
import ArticleList from "./ArticleList"
import {articleStore} from "../stores"
import {loadAllArticles} from "../AC/loadResource"

class App extends Component {

  static propTypes = {}
  state = {
    articles: articleStore.getAll()
  }

  componentWillMount() {
    loadAllArticles()
    articleStore.addUpdateListener(this.handleStoreUpdate)
  }

  componentWillUnmount() {
    articleStore.removeUpdateListener(this.handleStoreUpdate)
  }


  handleStoreUpdate = () => {
    this.setState({
      articles: articleStore.getAll()
    })
  }


  render() {
    return <ArticleList articles={this.state.articles} />
  }
}

export default App

