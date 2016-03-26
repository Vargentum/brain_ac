import React, { Component, PropTypes } from 'react'
import Body from './Body'
import CommentsList from './comments/CommentsList'
import toggleOpen from './HOC/toggleOpen'

class Article extends Component {

    render() {
        const {
          article : { title, text, comments},
          isOpen,
          toggleOpen, 
          isSelected,

        } = this.props

        const style = isSelected ? {color: 'red'} : null
        return (
            <div style={style}>
              <h3 onClick={toggleOpen}>
                {title}
                <button onClick={toggleOpen}>Read More</button>
              </h3>
              {isOpen ?
                <div>
                  <Body text={text} isOpen = {isOpen}/>
                  <CommentsList comments={comments || []} />
                </div>
                : null
              }
            </div>
        )
    }

    handleClick = (ev) => {
        ev.preventDefault()
        this.props.onClick()
    }
}

export default toggleOpen(Article)