// React
import React, { Component } from 'react'
import './App.css'
// Components
import PointsContainer from './components/containers/Points.container'
import LayersContainer from './components/containers/Layers.container'
// Redux
import { Provider } from 'react-redux'
import store from './redux/store'

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <LayersContainer />
        <PointsContainer />
      </Provider>
    )
  }
}

export default App
