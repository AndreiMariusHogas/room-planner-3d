import { LOAD_POINTS, LOAD_MATERIALS, APPLY_MATERIAL, ERROR, RESET } from './types'
import baseImage from '../assets/images'

const initialState = {
  loadingPoints: true,
  applied:[baseImage],
  points: [{ pointId, coordX, coordY, materials:[]}],
  error: {},
  showingMenu: false
}

export default function (state=initialState, action) {
  switch (action.type) {
    case LOAD_POINTS:
      return {
        ...state,
        points: action.payload,
        loading: false
        }
    case LOAD_MATERIALS: {
      let index = state.points.findIndex( point => point.id === action.payload.pointId)
      points[index].materials = action.payload.materials
      return {
        ...state,
        points: state.points,
        showingMenu: true
      }
    }
    case APPLY_MATERIAL: {
      const appliedMaterial = action.payload.material
      let index = state.applied.findIndex( layer => layer.pointId === action.payload.pointId)
      if(index >0){
        applied[index] = {
          pointId: action.payload.pointId,
          material: action.payload.material
        }
      }
      return {
        ...state,
        applied: state.applied
      }
    }
    case RESET: {
      return {
        ...state,
        applied: [baseImage],
        points: [],
        error: {},
        showingMenu: false
      }
    }
    case ERROR: {
      return {
        ...state,
        error: action.payload
      }
    default: {
      return state
    }
    }
  }
}
