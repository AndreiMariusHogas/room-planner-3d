// React
import React from 'react'
import PropTypes from 'prop-types'
// Materail UI
import withStyles from '@material-ui/core/styles/withStyles'
import LinearProgress from '@material-ui/core/LinearProgress'
import Typography from '@material-ui/core/Typography'
import styles from '../../styles/styles'

export const LoadingScreen = (props) => {
  const { classes } = props
  return (
    <div>
      <Typography variant='h4' className={classes.loadingText}>Loading...</Typography>
      <LinearProgress className={classes.loading} color='primary' />
    </div>
  )
}

LoadingScreen.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(LoadingScreen)
