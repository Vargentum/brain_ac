import React, { Component, PropTypes } from 'react'
import ArticleList from "./ArticleList"
import {articleStore} from "../stores"

class App extends Component {

  static propTypes = {}
  state = {
    articles: articleStore.getOrLoadAll(),
    loading: articleStore.loading
  }

  componentWillMount() {
    articleStore.addUpdateListener(this.handleStoreUpdate)
  }

  componentWillUnmount() {
    articleStore.removeUpdateListener(this.handleStoreUpdate)
  }


  handleStoreUpdate = () => {
    this.setState({
      articles: articleStore.getOrLoadAll(),
      loading: articleStore.loading
    })
  }


  render() {
    return (
      <div>
        {this.state.loading ? 
          <h2>Loading...</h2>
          :
          <ArticleList articles={this.state.articles} />
        }
      </div>
    )
  }
}

export default App

