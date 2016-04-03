import React, {PropTypes, Component} from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import Counter from '../components/Counter'
import increment from '../AC/increment'


class Root extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired
  }
  render() {
    const { store } = this.props

    return (
      <Provider store={store}>
        <Counter />
      </Provider>
    )
  }
}

export default Root;
