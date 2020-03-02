import React, { PureComponent } from 'react'

export class Point extends PureComponent {
  render () {
    const { id, coordX, coordY } = this.props.point
    return (
      <div>
        {id}{coordX}{coordY}
      </div>
    )
  }
}

export default Point
