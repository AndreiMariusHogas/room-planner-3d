export default {
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
    loadingText: {
      top: '35%',
      left: '45%'
    }
  },
  '@media (max-width:720px)': {
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
