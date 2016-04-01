import React, { Component, PropTypes } from 'react'
import toggleOpen from './../HOC/toggleOpen'
import {commentStore} from "../stores"


class CommentList extends Component {

    state = {
        comments: commentStore.getRelatedComments('article', this.props.parentId),
        loading: false
    }

    compoentWillMount() {
        commentStore.addUpdateListener(this.handleStoreUpdate)
    }

    compoentWillUnmount() {
        commentStore.removeUpdateListener(this.handleStoreUpdate)
    }

    handleStoreUpdate() {
        console.log('comment updated')
        this.setState({
            comments: commentStore.getRelatedComments('article', this.props.parentId),
            loading: commentStore.loading
        })
    }


    handleClick = (ev) => {
        ev.preventDefault()
        this.props.toggleOpen()
    }

    r_actionLink() {
        const {toggleOpen, isOpen } = this.props
        const action = isOpen ? 'hide comments' : 'show comments'
        return <a href="#" onClick={this.handleClick}>{action}</a>
    }

    r_comments() {
        const {comments} = this.state
        const {isOpen} = this.props
        
        if (!isOpen) return null
        const commentComponents = comments.map((comment) => <li key={comment.id}>{comment.text}</li>)
        return (
            <ul>
                {commentComponents}
            </ul>
        )
    }

    render() {
        return (
            <div>
                {this.r_actionLink()}
                
                {this.state.loading ? 
                    "Loading..."
                    :
                    this.r_comments()
                }
            </div>
        )
    }
}

export default toggleOpen(CommentList)