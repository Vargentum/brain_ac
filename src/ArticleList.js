import React, { Component, PropTypes } from 'react'
import Article from './Article'
import JqueryComponent from './JqueryComponent'
import { findDOMNode } from 'react-dom'

class ArticleList extends Component {

    static propTypes = {
        articles: PropTypes.array.isRequired
    }

    state = {
        selected: {},
        expandedArticleId: null
    }

    render() {
        const articleComponents = this.props.articles.map((article, index) =>
            <li key={index}>
                <Article article={article}
                         onExpand={this.handleArticleExpand}
                         isExpanded={this.state.expandedArticleId === article.id}
                         onClick={this.selectArticle(article.id)} />
            </li>
        )
        return (
            <div>
                <ul>{articleComponents}</ul>
                <JqueryComponent ref = "customComponent" />
            </div>
        )
    }

    selectArticle = (id) => (ev) => {
        this.setState({
            selected: {...this.state.selected, [id]: true} //Object.assign({}, this.state.selected, {[id]: true})
        })
    }

    handleArticleExpand = (id) => {
        this.setState({
            expandedArticleId : id !== this.state.expandedArticleId ? id : null
        });
    }

}

export default ArticleList