// React
import React from 'react'
import PropTypes from 'prop-types'
// Material UI
import withStyles from '@material-ui/core/styles/withStyles'
// Icons
import Camera from '@material-ui/icons/Camera'
// Styles
import globalStyles from '../../styles/globalStyles'

export const Point = (props) => {
  const { point: { id, coordX, coordY }, classes, handleClick } = props
  return (
    <>
      <button className={classes.point} onClick={(e) => handleClick(e.currentTarget.value)} style={{ top: `${coordY}%`, left: `${coordX}%` }} value={id}>
        <Camera className={classes.pointIcon} />
      </button>
    </>
  )
}

Point.propTypes = {
  point: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired
}

export default withStyles(globalStyles)(Point)
