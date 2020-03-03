import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducers'
const baseImage = 'https://firebasestorage.googleapis.com/v0/b/porcelanosa-partners-spaces.appspot.com/o/projects%2FdorptVQTHsbkYC60NSlt%2Fscenes%2F1567170849457-base?alt=media&token=cf8bcee2-bf89-4fd9-8bfd-9d4462348844'

const initialState = {
  loadingPoints: true,
  applied: [{ pointId: 'baseimage', material: { layer: baseImage } }],
  points: [],
  pointId: '',
  materials: [],
  error: {},
  showingMenu: false
}
const middleware = [thunk]
const store = createStore(
  reducer,
  initialState,
  compose(
    applyMiddleware(...middleware)
  )
)

export default store
