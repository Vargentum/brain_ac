import React, {PropTypes} from 'react';
import Comment from "./Comment";
import expandedList from '../HOC/expandedList'

class CommentsList extends React.Component {
  static propTypes = {
    comments: PropTypes.array.isRequired
  }

  render() {
    const {
      comments,
      onExpand,
      expandedItemId

    } = this.props

    return (
      <ul>
        {comments.length ?
          comments.map(({id, ...rest}) => 
            <li key={id}>
              <Comment {...rest}
                       id={id}
                       onSelect={onExpand}
                       isSelected={expandedItemId === id}/>
            </li>
          )
          : 
          <li>No comments</li>
        }
      </ul>
    )
  }
}

export default expandedList(CommentsList);
