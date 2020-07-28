import {
  createMuiTheme,
  Theme,
} from '@material-ui/core/styles';

import { palette } from './default/palette';
import { typography } from './default/typography/Typography.index';

export const createDefaultTheme = (): Theme => (
  createMuiTheme({
    palette,
    typography,
  })
);
