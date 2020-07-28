import { WithStyles } from '@material-ui/core';
import { AppJSS } from './App.jss';

export interface AppBoundaryProps extends WithStyles<typeof AppJSS>{
  error?: Error;
  componentStack?: string;
}
