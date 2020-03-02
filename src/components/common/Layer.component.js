// React
import React from 'react'
import PropTypes from 'prop-types'
// Material UI
import withStyles from '@material-ui/core/styles/withStyles'
// Styles
import styles from '../../styles/styles'

export const Layer = (props) => {
  const { material, index, classes } = props
  return <img src={material.material.layer} alt='layer' style={{ zIndex: index }} className={classes.layer} />
}

Layer.propTypes = {
  material: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Layer)
