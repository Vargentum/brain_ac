import React, { Component, PropTypes } from 'react'
import Article from './Article'

class ArticleList extends Component {

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
            </div>
        )
    }

    selectArticle = (id) => (ev) => {
        this.setState({
            selected: {...this.state.selected, [id]: true} //Object.assign({}, this.state.selected, {[id]: true})
        })
    }

}

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired,
    options: PropTypes.shape({
        selected: PropTypes.object.isRequired,
        color: PropTypes.string.isRequired
    })
}

export default ArticleList
