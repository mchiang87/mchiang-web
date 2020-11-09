import {
  createStyles,
  makeStyles,
} from '@material-ui/core/styles';

export const BackgroundJSS = makeStyles(() => createStyles({
  main: {
    width: '100%',
    height: '100vh',
    backgroundPosition: 'center center',
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
  },
}));
