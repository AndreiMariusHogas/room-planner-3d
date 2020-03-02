// React
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
// Material UI
import withStyles from '@material-ui/core/styles/withStyles'
// Components
import Material from '../common/Material.component'

export class MaterialsMenu extends PureComponent {
  render () {
    const { materials, pointId, classes } = this.props
    return (
      <div className={classes.materialsMenu}>
        {materials.map(material => <Material key={material.id} pointId={pointId} material={material} />)}
      </div>
    )
  }
}

MaterialsMenu.propTypes = {
  materials: PropTypes.array.isRequired,
  pointId: PropTypes.string.isRequired
}

export default withStyles({
  materialsMenu:{
    display: 'inline-flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginLeft: '16px',
    marginTop: '16px'
  }
})(MaterialsMenu)
