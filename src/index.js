import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route} from 'react-router'
import configureStore from './configureStore'
// import { createHashHistory } from 'history'
import history from './History'
import { Provider } from 'react-redux';
import App from './App'

const store = configureStore()
// const browserHistory = createHashHistory()

ReactDOM.render(
  <Provider store={store}>
  <Router history={history}>
    <Route path="/" component={App} />
  </Router>
  </Provider>,
  document.getElementById('root')
)

// <Router history={history}>
//   <Route path="/" component={App} />
// </Router>
