import React, {PropTypes} from 'react';
import {connect} from 'react-redux'
import increment from '../AC/increment'

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

export default connect((state) => {
  const {counter} = state
  return {counter}
}, {
  increment
})(Counter)
