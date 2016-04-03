import React, {PropTypes} from 'react';

class Counter extends React.Component {
  static propTypes = {}

  // state = {}
  // methodName = () =>
  //   <div></div>
    
  render() {
    const {
      counter,
      increment
    } = this.props

    return (
      <div>
      <h1>{counter}</h1>
      <button onClick={increment}>Increment me</button>
      </div>
    )
  }
}

export default Counter;
