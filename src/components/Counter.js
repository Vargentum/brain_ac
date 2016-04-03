import React, {PropTypes} from 'react';

class Counter extends React.Component {
  static propTypes = {}

  // state = {}
  // methodName = () =>
  //   <div></div>
    
  render() {
    const {
      counter
    } = this.props

    return (
      <div>{counter}</div>
    )
  }
}

export default Counter;
