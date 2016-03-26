import React, { Component, PropTypes } from 'react'
import Article from './Article'
import JqueryComponent from './JqueryComponent'
import { findDOMNode } from 'react-dom'

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
                         onClick={this.selectArticle(article.id)}
                         isSelected={this.state.selected[article.id]} />
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

    componentDidMount() {
        
    }
}

export default ArticleList