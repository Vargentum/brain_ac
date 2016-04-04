import React, {PropTypes} from 'react';

class Comment extends React.Component {
  static propTypes = {
    text: PropTypes.string.isRequired
  }

  render() {
    const {text, onSelect, isSelected, id} = this.props
    const style = isSelected ? {color: "red"} : null

    return (
      <article style={style}>
        {text}
        <button onClick={this.handleSelect(id)}>Select</button>
      </article>
    )
  }

  handleSelect = (id) => (ev) => {
    ev.preventDefault()
    this.props.onSelect(id)
  }
}

export default Comment;
