import React, { Component, PropTypes } from 'react'
import Article from './Article'
import JqueryComponent from './JqueryComponent'
import { findDOMNode } from 'react-dom'
import expandedList from './HOC/expandedList'

class ArticleList extends Component {

    static propTypes = {
        articles: PropTypes.array.isRequired
    }

    state = {
        selected: {}
    }

    render() {
        const articleComponents = this.props.articles.map((article, index) =>
            <li key={index}>
                <Article article={article}
                         onExpand={this.props.onExpand}
                         isExpanded={this.props.expandedItemId === article.id}
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

}

export default expandedList(ArticleList)