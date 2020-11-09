import {
  createStyles,
  makeStyles,
  Theme,
} from '@material-ui/core';

export const RoutesJSS = makeStyles((theme: Theme) => createStyles({
  mainDisplay: {
  },
  header: {
    backgroundColor: theme.palette.primary.main,
    padding: `0px ${theme.spacing(2)}px 0px`,
  },
  body: {
    flex: '1',
    overflow: 'auto',
  },
  navigation: {

  },
}));
