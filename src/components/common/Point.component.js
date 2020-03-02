// React
import React, { useCallback } from 'react'
import PropTypes from 'prop-types'

// Material UI
import withStyles from '@material-ui/core/styles/withStyles'

import Button from '@material-ui/core/Button'
import Camera from '@material-ui/icons/Camera'

const RoundButton = withStyles({
  root: {
    borderRadius: '50%',
    padding: '20px'
  }
})(Button)

export const Point = (props) => {
  const { point: { id, coordX, coordY }, classes, handleClick } = props

  const handler = useCallback(() => handleClick(id), [id, handleClick])

  return (
    <div className={classes.point} style={{ top: `${coordY}%`, left: `${coordX}%` }}>
      <RoundButton variant='outlined' onClick ={handler}>
        <Camera />
      </RoundButton>
    </div>
  )
}

Point.propTypes = {
  point: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired
}

export default withStyles({
  point: {
    position: 'fixed'
  }
})(Point)
