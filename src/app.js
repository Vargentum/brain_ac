import React from 'react'
import {render} from 'react-dom'
//import Router from './Router'
import Root from './containers/Root'
import store from './store'

render(<Root store={store} />, document.getElementById('container'))
