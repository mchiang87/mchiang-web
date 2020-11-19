import {
  createStyles,
  makeStyles,
  Theme,
} from '@material-ui/core/styles';

export const InfoSectionJSS = makeStyles((theme: Theme) => createStyles({
  detailsSection: {
    padding: theme.spacing(2),
    width: '50%',
    margin: 'auto',
  },
  sectionContent: {
    padding: theme.spacing(2),
  },
  bottomPadding: {
    marginBottom: theme.spacing(5),
  },
}));
