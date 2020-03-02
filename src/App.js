// React
import React, { Component } from 'react'
import './App.css'
// Material UI
import withStyles from '@material-ui/core/styles/withStyles'
// Style
import globalStyles from './utility/styles/globalStyles'
// Redux
import { Provider } from 'react-redux'
import store from './redux/store'

class App extends Component {
  render () {
    return (
      <Provider store={store}>
      </Provider>
    )
  }
}

export default withStyles(globalStyles)(App)
