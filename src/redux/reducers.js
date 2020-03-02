import { LOAD_POINTS, LOAD_MATERIALS, APPLY_MATERIAL, ERROR, RESET } from './types'

export default function (state, action) {
  switch (action.type) {
    case LOAD_POINTS:
      return {
        ...state,
        points: action.payload,
        loadingPoints: false
      }
    case LOAD_MATERIALS:
      const index = state.points.findIndex(point => point.id === action.payload.pointId)
      state.points[index].materials = action.payload.materials
      return {
        ...state,
        points: state.points,
        showingMenu: true
      }
    case APPLY_MATERIAL:
      const appliedIndex = state.applied.findIndex(layer => layer.pointId === action.payload.pointId)
      if (index > 0) {
        state.applied[appliedIndex] = {
          pointId: action.payload.pointId,
          material: action.payload.material
        }
      }
      return {
        ...state,
        applied: state.applied
      }
    case RESET:
      return {
        ...state,
        applied: [state.applied[0]],
        points: [],
        error: {},
        showingMenu: false
      }
    case ERROR:
      return {
        ...state,
        error: action.payload
      }
    default: {
      return state
    }
  }
}
