// React
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
// Components
import Layer from '../common/Layer.component'
// Redux
import { connect } from 'react-redux'

export class LayersContainer extends PureComponent {
  render () {
    const { applied } = this.props
    return (
      <>
        {applied.map(appliedMaterial => (<Layer key={appliedMaterial.pointId} index={applied.indexOf(appliedMaterial) - 2} material={appliedMaterial} />))}
      </>
    )
  }
}

const mapStateToProps = state => ({
  applied: state.applied
})

LayersContainer.propTypes = {
  applied: PropTypes.array.isRequired
}

export default connect(mapStateToProps)(LayersContainer)
