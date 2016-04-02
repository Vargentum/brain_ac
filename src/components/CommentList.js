import React, { Component, PropTypes } from 'react'
import toggleOpen from './../HOC/toggleOpen'
import {commentStore} from "../stores"
import {loadComments} from '../AC/comments'


class CommentList extends Component {

    state = {
        comments: [],
        loading: false
    }


    componentWillMount() {
        commentStore.addChangeListener(this.handleStoreUpdate)
    }

    componentWillUnmount() {
        commentStore.removeChangeListener(this.handleStoreUpdate)
    }

    handleStoreUpdate = () => {
        console.log('comment updated')

        this.setState({
            comments: commentStore.getRelatedComments('article', this.props.parentId),
            loading: commentStore.loading
        })
    }


    handleClick = (ev) => {
        ev.preventDefault()
        this.props.toggleOpen()
        if (!commentStore.loaded && !commentStore.loading) loadComments()
    }

    r_actionLink() {
        const {toggleOpen, isOpen } = this.props
        const action = isOpen ? 'hide comments' : 'show comments'
        return <a href="#" onClick={this.handleClick}>{action}</a>
    }

    r_comments() {
        const {comments} = this.state
        const {isOpen, commentsIds} = this.props
        
        if (!isOpen) return null
        const commentComponents = comments.map((comment) => <li key={comment.id}>{comment.text}</li>)
        debugger
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