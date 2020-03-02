import React from 'react'
import Point from './Point.component'

export const Points = (props) => {
  return <>{props.points.map(point => <Point key={point.id} point={point} />)}</>
}

export default Points
