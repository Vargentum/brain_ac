import React, { Component, PropTypes } from 'react'
import Body from './Body'
import CommentsList from './comments/CommentsList'

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
          article : { title, id, text, comments},
          isOpen,
          toggleOpen, 
          isSelected,
          onExpand,
          isExpanded

        } = this.props

        const style = isSelected ? {color: 'red'} : null
        return (
            <div style={style}>
              <h3>
                {title}
                <hr />
                <button onClick={this.handleExpand(id)}>Read More</button>
              </h3>
              {isExpanded ?
                <div>
                  <Body text={text}/>
                  <CommentsList comments={comments || []} />
                </div>
                : null
              }
            </div>
        )
    }

    handleExpand = (id) => (ev) => {
        ev.preventDefault()
        this.props.onExpand(id)
    }


}

export default Article