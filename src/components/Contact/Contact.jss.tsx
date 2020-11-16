import {
  createStyles,
  makeStyles,
  Theme,
} from '@material-ui/core/styles';

export const ContactJSS = makeStyles((theme: Theme) => createStyles({
  header: {
    backgroundColor: theme.palette.background.default,
    color: 'black',
  },
}));
