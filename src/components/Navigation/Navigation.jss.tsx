import {
  createStyles,
  makeStyles,
  Theme,
} from '@material-ui/core/styles';

export const NavigationJSS = makeStyles((theme: Theme) => createStyles({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  toolbar: {
    margin: 'auto',
  },
}));
