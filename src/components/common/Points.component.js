import React from 'react'
import Point from './Point.component'

export default (props) => {
  return <>{props.points.map(point => <Point key={point.id} point={point} />)}</>
}


