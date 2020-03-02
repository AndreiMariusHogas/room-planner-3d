// React
import React from 'react'
// Material UI
import withStyles from '@material-ui/core/styles/withStyles'
// Styles
import globalStyles from '../../styles/globalStyles'

export const Layer = (props) => {
  const { layer, index, classes } = props
  return <img src={layer.layer} alt='layer' style={{ zIndex: index }} className={classes.layer} />
}

export default withStyles(globalStyles)(Layer)
