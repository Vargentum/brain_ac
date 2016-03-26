import React, { Component, PropTypes } from 'react'
import Body from './Body'
import CommentsList from './comments/CommentsList'
import toggleOpen from './HOC/toggleOpen'

class Article extends Component {
  static propTypes = {
    article: PropTypes.shape({
      title: PropTypes.string,
      text: PropTypes.string,
      comments: PropTypes.array
    }),
    isOpen: PropTypes.bool,
    toggleOpen: PropTypes.func,
    isSelected: PropTypes.bool
  }

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