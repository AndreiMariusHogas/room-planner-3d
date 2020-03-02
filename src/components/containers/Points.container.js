// React
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
// Components
import LoadingScreen from '../common/LoadingScreen.component'
import Points from '../common/Points.component'
// Redux
import { connect } from 'react-redux'
import { loadPoints } from '../../redux/actions'

export class PointsContainer extends PureComponent {
  componentDidMount () {
    this.props.loadPoints()
  }

  render () {
    const { points, loadingPoints } = this.props
    return (
      <>
        {loadingPoints ? (<LoadingScreen />) : (<Points points={points} />)}
      </>)
  }
}

const mapStateToProps = state => ({
  loadingPoints: state.loadingPoints,
  points: state.points
})

PointsContainer.propTypes = {
  loadPoints: PropTypes.func.isRequired,
  loadingPoints: PropTypes.bool.isRequired,
  points: PropTypes.array
}

export default connect(mapStateToProps, { loadPoints })(PointsContainer)
