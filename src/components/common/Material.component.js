// React
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
// Material UI
import withStyles from '@material-ui/core/styles/withStyles'
import Tooltip from '@material-ui/core/Tooltip'
import Button from '@material-ui/core/Button'
// Styles
import styles from '../../styles/styles'
import { connect } from 'react-redux'
import { applyMaterial } from '../../redux/actions'

export class Material extends PureComponent {
  handleClick = (e) => {
    this.props.applyMaterial(this.props.pointId,this.props.material)
  }

  render () {
    const { material, classes } = this.props
    return (
      <>
        <Tooltip title={<span className={classes.tooltip}>{material.name}</span>} placement='right'>
          <Button className={classes.materialContainer} onClick={this.handleClick}>
            <img src={material.preview} alt={material.name} className={classes.materialPreview} />
          </Button>
        </Tooltip>
      </>
    )
  }
}

const mapStateToProps = state => ({})

Material.propTypes = {
  material: PropTypes.object.isRequired,
  pointId: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired
}

export default connect(mapStateToProps, { applyMaterial })(withStyles(styles)(Material))
