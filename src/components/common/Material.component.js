// React
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
// Material UI
import withStyles from '@material-ui/core/styles/withStyles'
// Styles
import styles from '../../styles/materials'
// Redux
import { connect } from 'react-redux'
import { applyMaterial } from '../../redux/actions'


export class Material extends PureComponent {
  handleClick = (e) => {
    this.props.applyMaterial(this.props.pointId,this.props.material)
    console.log(this.props)
  }

  render () {
    const { material, classes } = this.props
    return (
      <div className={classes.container}>
        <button className={classes.button}onClick={this.handleClick}>
          <img src={material.preview} alt={material.name} className={classes.preview} />
          <h1 className={classes.name}>{material.name}</h1>
        </button>
      </div>
    )
  }
}

const mapStateToProps = state => ({state: state})

Material.propTypes = {
  material: PropTypes.object.isRequired,
  pointId: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired
}

export default connect(mapStateToProps, { applyMaterial })(withStyles(styles)(Material))
