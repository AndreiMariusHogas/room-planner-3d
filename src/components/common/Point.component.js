// React
import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
// Material UI
import withStyles from '@material-ui/core/styles/withStyles'
import Button from '@material-ui/core/Button'
// Icons
import Camera from '@material-ui/icons/Camera'
// Styles
import pointStyles from '../../styles/point'

export const Point = (props) => {
  const { point: { id, coordX, coordY }, classes, handleClick } = props

  const handler = useCallback(() => handleClick(id), [id, handleClick])

  return (
    <>
      <Button className={classes.point} onClick={handler} style={{ top: `${coordY}%`, left: `${coordX}%` }}>
        <Camera className={classes.pointIcon} />
      </Button>
    </>
  )
}

Point.propTypes = {
  point: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired
}

export default withStyles(pointStyles)(Point)
