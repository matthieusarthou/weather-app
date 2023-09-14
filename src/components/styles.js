import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    width: '100vw',
  },
  main: {
    display: 'flex',
    height: '100vh',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '1em',
    // alignItems: 'center',
    // alignContent: 'center',
  },
}));
