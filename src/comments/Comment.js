import React, {PropTypes} from 'react';

class Comment extends React.Component {
  static propTypes = {
    text: PropTypes.string.isRequired
  }

  render() {
    const {text} = this.props

    return (
      <article>{text}</article>
    )
  }
}

export default Comment;
