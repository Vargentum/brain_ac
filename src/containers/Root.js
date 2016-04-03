import React, {PropTypes, Component} from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import Counter from '../components/Counter'
import Devtools from './Devtools'
import increment from '../AC/increment'


class Root extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired
  }
  render() {
    const { store } = this.props

    return (
      <Provider store={store}>
        <div>
          <Counter />
          <Devtools />
        </div>
      </Provider>
    )
  }
}

export default Root;
