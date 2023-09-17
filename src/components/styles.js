import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    backgroundImage: `url('/background.jpg')`, //must be placed in public
    backgroundRepeat: 'no-repeat',
    backgroundPositionX: 'center',
    backgroundPositionY: 'center',
    backgroundSize: 'cover', //https://developer.mozilla.org/en-US/docs/Web/CSS/background-size#syntax
  },
  main: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    width: '500px',
    padding: '15px',
    justifyContent: 'space-between',
    alignItems: 'left',
    gap: '5px',
  },
  bottom: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    textAlign: 'center',
    alignItems: 'center',
    padding: '1rem',
    borderRadius: '12px',
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
}));
