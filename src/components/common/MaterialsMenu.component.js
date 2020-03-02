// React
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
// Material UI
import Grid from '@material-ui/core/Grid'
// Components
import Material from '../common/Material.component'

export class MaterialsMenu extends PureComponent {
  render () {
    const { materials, pointId } = this.props
    return (
      <Grid container align='left'>
        <Grid item xs={4} md={1}>
          {materials.map(material => <Material key={material.id} pointId={pointId} material={material} />)}
        </Grid>
      </Grid>
    )
  }
}

MaterialsMenu.propTypes = {
  materials: PropTypes.array.isRequired,
  pointId: PropTypes.string.isRequired
}

export default MaterialsMenu
