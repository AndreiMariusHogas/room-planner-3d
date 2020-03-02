import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducers'
import baseImage from '../assets/images/baseimage.png'

const initialState = {
  loadingPoints: true,
  applied: [baseImage],
  points: [],
  error: {},
  showingMenu: false
}
const middleware = [thunk]
const store = createStore(
  reducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

export default store
