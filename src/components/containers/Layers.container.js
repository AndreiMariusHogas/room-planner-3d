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
        {applied.map((material, index) => (<Layer key={material.pointId} index={index - 3} material={material} />))}
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
