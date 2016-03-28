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
        const {article : { title, id, text, comments }, isOpen, toggleOpen, isSelected} = this.props
        const style = isSelected ? {color: 'red'} : null
        return (
            <div style = {style}>
                <h3 onClick = {toggleOpen}>{title}</h3>
                <a href="#" onClick={this.handleDelete(id)}>Delete article</a>
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

export default Article