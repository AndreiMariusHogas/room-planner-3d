import {
  LOAD_POINTS,
  LOAD_MATERIALS,
  APPLY_MATERIAL,
  ERROR,
  RESET
} from './types'

import axios from 'axios'

axios.defaults.baseURL = 'https://europe-west1-configurator-3d-dc530.cloudfunctions.net/api'

export const loadPoints = () => dispatch => {
  axios
    .get('/points')
    .then(res => {
      dispatch({
        type: LOAD_POINTS,
        payload: res.data
      })
    })
    .catch(err => {
      dispatch({
        type: ERROR,
        payload: err
      })
    })
}

export const loadMaterials = (pointId) => dispatch => {
  axios
    .get(`/materials/${pointId}`)
    .then(res => {
      dispatch({
        type: LOAD_MATERIALS,
        payload: {
          pointId,
          materials: res.data
        }
      })
    })
    .catch(err => dispatch({
      type: ERROR,
      payload: err
    }))
}

export const applyMaterials = (pointId, material) => dispatch => {
  dispatch({
    type: APPLY_MATERIAL,
    payload: {
      pointId,
      material
    }
  })
}

export const reset = () => dispatch => {
  dispatch({ type: RESET })
}