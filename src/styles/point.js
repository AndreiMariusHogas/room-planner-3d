export default {
  point: {
    position: 'fixed',
    width: '70px',
    height: '70px',
    opacity: '0.5',
    transition: 'all 200ms ease',
    outline: 'none',
    '&:hover': {
      opacity: '0.8',
      width: '80px',
      height: '80px'
    },
    '&:active': {
      border: '3px solid #2b2b2d'
    },
    borderRadius: '50%'
  },
  pointIcon: {
    fontSize: '3rem',
    '&:hover': {
      fontSize: '3.3rem'
    }
  }
}
