// React
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
// Components
import Point from './Point.component'
import MaterialsMenu from '../common/MaterialsMenu.component'
// Redux
import { connect } from 'react-redux'
import { loadMaterials } from '../../redux/actions'

export class Points extends PureComponent {
  render () {
    const { points, pointId, materials, showingMenu, loadMaterials } = this.props
    return (
      <>
        {points.map(point => <Point key={point.id} point={point} handleClick={loadMaterials} />)}
        {showingMenu && (<MaterialsMenu materials={materials} pointId={pointId} />)}
      </>
    )
  }
}

const mapStateToProps = state => ({
  showingMenu: state.showingMenu,
  materials: state.materials,
  pointId: state.pointId
})

Points.propTypes = {
  points: PropTypes.array.isRequired,
  pointId: PropTypes.string.isRequired,
  materials: PropTypes.array.isRequired,
  showingMenu: PropTypes.bool.isRequired,
  loadMaterials: PropTypes.func.isRequired
}

export default connect(mapStateToProps, { loadMaterials })(Points)
