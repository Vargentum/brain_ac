import React, {PropTypes} from 'react';
import Comment from "./Comment";

class CommentsList extends React.Component {
  static propTypes = {
    comments: PropTypes.array.isRequired
  }

  render() {
    const {comments} = this.props

    return (
      <ul>
        {comments.length ?
          comments.map(({id, ...rest}) => <li key={id}><Comment {...rest}/></li>)
          : 
          <li>No comments</li>
        }
      </ul>
    )
  }
}

export default CommentsList;
