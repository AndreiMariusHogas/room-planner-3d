import { LOAD_POINTS, LOAD_MATERIALS, APPLY_MATERIAL, CLOSE_MATERIALS_MENU, ERROR, RESET } from './types'

const baseImage = 'https://firebasestorage.googleapis.com/v0/b/porcelanosa-partners-spaces.appspot.com/o/projects%2FdorptVQTHsbkYC60NSlt%2Fscenes%2F1567170849457-base?alt=media&token=cf8bcee2-bf89-4fd9-8bfd-9d4462348844'

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
        pointId: action.payload.pointId,
        materials: action.payload.materials,
        showingMenu: true
      }
    case APPLY_MATERIAL:
      const appliedIndex = state.applied.findIndex(layer => layer.pointId === action.payload.pointId)
      if (appliedIndex > 0) {
        state.applied[appliedIndex] = {
          pointId: action.payload.pointId,
          material: action.payload.material
        }
      } else {
        state.applied.push(action.payload)
      }
      return {
        ...state,
        applied: [...state.applied]
      }
    case CLOSE_MATERIALS_MENU:
      return {
        ...state,
        showingMenu: false
      }
    case RESET:
      return {
        ...state,
        loadingPoints: true,
        applied: [{ pointId: 'baseimage', material: { layer: baseImage } }],
        points: [],
        pointId: '',
        materials: [],
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
