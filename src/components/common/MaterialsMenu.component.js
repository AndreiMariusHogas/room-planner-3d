// React
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
// Components
import Material from '../common/Material.component'


export class MaterialsMenu extends PureComponent {
  render () {
    const { materials, pointId } = this.props
    return (
      <>
        {materials.map(material => <Material key={material.id} pointId={pointId} material={material} />)}
      </>
    )
  }
}

MaterialsMenu.propTypes = {
  material: PropTypes.array.isRequired,
  pointId: PropTypes.string.isRequired
}

export default MaterialsMenu
