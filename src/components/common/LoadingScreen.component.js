// React
import React from 'react'
// Materail UI
import withStyles from '@material-ui/core/styles/withStyles'
import LinearProgress from '@material-ui/core/LinearProgress'
import Typography from '@material-ui/core/Typography'
import globalStyles from '../../styles/globalStyles'

export const LoadingScreen = (props) => {
  const { classes } = props
  return (
    <>
      <Typography variant='h4' className={classes.loadingText}>Loading...</Typography>
      <LinearProgress className={classes.loading} color='primary' />
    </>
  )
}

export default withStyles(globalStyles)(LoadingScreen)
