// React
import React, { Component } from 'react'
import './App.css'
// Material UI
import withStyles from '@material-ui/core/styles/withStyles'
// Components
import PointsContainer from './components/containers/Points.container'
// Style
import globalStyles from './styles/globalStyles'
// Redux
import { Provider } from 'react-redux'
import store from './redux/store'

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <PointsContainer />
      </Provider>
    )
  }
}

export default withStyles(globalStyles)(App)
