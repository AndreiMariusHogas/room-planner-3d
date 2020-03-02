// React
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
// Material UI
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
// Components
import Point from './Point.component'
import MaterialsMenu from '../common/MaterialsMenu.component'
// Redux
import { connect } from 'react-redux'
import { loadMaterials, closeMaterialsMenu } from '../../redux/actions'

export class Points extends PureComponent {
  render () {
    const { points, pointId, materials, showingMenu, loadMaterials, closeMaterialsMenu } = this.props
    return (
      <>
        {points.map(point =>
          <ClickAwayListener key={point.id} onClickAway={closeMaterialsMenu}>
            <Point key={point.id} point={point} handleClick={loadMaterials} />
          </ClickAwayListener>
        )}

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

export default connect(mapStateToProps, { loadMaterials, closeMaterialsMenu })(Points)
