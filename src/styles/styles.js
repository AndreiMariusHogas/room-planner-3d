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
  },
  materialContainer: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    margin: '1rem 2rem',
    float: 'left'
  },
  materialPreview: {
    width: '8rem',
    height: '8rem'
  },
  tooltip: {
    fontSize: '1.3rem',
    padding: '8px'
  },
  layer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%'
  },
  loading: {
    position: 'fixed',
    width: '30%',
    top: '40%',
    left: '38%',
    background: 'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(195,200,64,1) 50%, rgba(255,252,0,1) 100%)'
  },
  loadingText: {
    color: '#fff',
    position: 'fixed',
    top: '35%',
    left: '50%'
  },
  '@media (max-width:1280px)': {
    materialPreview: {
      width: '6rem',
      height: '6rem',
      float: 'left'
    },
    loadingText: {
      top: '35%',
      left: '45%'
    }
  },
  '@media (max-width:720px)': {
    materialPreview: {
      width: '4rem',
      height: '4rem',
      float: 'left'
    },
    loading: {
      width: '50%',
      top: '65%',
      left: '25%'
    },
    loadingText: {
      top: '57%',
      left: '33%',
      fontSize: '2rem'
    }
  }
}
