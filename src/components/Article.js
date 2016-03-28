import React, { Component, PropTypes } from 'react'
import Body from './Body'
import toggleOpen from './../HOC/toggleOpen'
import deleteArticle from "../AC/deleteArticle"


class Article extends Component {

    static propTypes = {
        article: PropTypes.object.isRequired,
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func,
        isSelected: PropTypes.bool
    }

    render() {
        const {article, isOpen, toggleOpen, isSelected} = this.props
        const comments = article.getRelated('comments')
        const { title, id, text } = article
        const style = isSelected ? {color: 'red'} : null
        return (
            <div style = {style}>
                <h3>{title}</h3>
                <a href="#"  onClick={toggleOpen}>Expand</a>
                &nbsp;
                <a href="#" onClick={this.handleDelete(id)}>Delete</a>
                <Body text = {text} isOpen = {isOpen} comments = {comments}/>
            </div>
        )
    }

    handleDelete = (id) =>(ev) => {
      ev.preventDefault()
      deleteArticle(id)
    }

    handleExpand = (id) => (ev) => {
        ev.preventDefault()
        this.props.onExpand(id)
    }


}

export default toggleOpen(Article)