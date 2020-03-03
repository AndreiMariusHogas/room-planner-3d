export default {
  container: {
    marginBottom: '12px'
  },
  button: {
    backgroundColor: '#e7e5e4dd',
    outline: 'none',
    height: '62px',
    width: '300px',
    borderRadius: '9px 9px 9px 9px',
    boxShadow: '0px 14px 32px 0px rgba(0, 0, 0, 0.15)',
    '&:hover': {
      boxShadow: '0px 10px 10px rgba(0,0,0,0.2)',
      transform: 'translateY(-3px)',
      cursor: 'pointer'
    },
    '&:active': {
      boxShadow: '0px 5px 10px rgba(0,0,0,0.2)',
      transform: 'translateY(-1px)'
    }
  },
  preview: {
    height: '50px',
    width: '50px',
    float: 'left',
    marginLeft: '4px',
    borderRadius: '9px 9px 9px 9px',
    boxShadow: '0px 14px 32px 0px rgba(0, 0, 0, 0.15)'
  },
  name: {
    fontFamily: 'Lato',
    fontSize: '1rem',
    float: 'right',
    marginRight: '6px',
    paddingTop: '4px',
    color: '#131313',
    letterSpacing: '.15em',
    textShadow: '3px 1px 7px rgba(150, 150, 150, 1)'
  },
  '@media (max-width:720px)': {
    name: {
      fontSize: '0.8rem',
      paddingTop: '6px'
    },
    button: {
      width: '220px'
    }
  }
}
