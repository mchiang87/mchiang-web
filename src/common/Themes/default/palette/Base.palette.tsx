import {
  red,
  green,
  yellow,
} from '@material-ui/core/colors';

import {
  primary,
  secondary,
  lightBlue,
} from '../colors/Colors.index';

export const basePalette = {
  // Styling colors
  error: {
    main: red[700],
    contrastText: lightBlue[100],
  },
  primary: {
    main: primary[500],
    contrastText: lightBlue[100],
    ...primary,
  },
  secondary: {
    main: secondary[500],
    contrastText: lightBlue[100],
  },
  success: {
    main: green[700],
    contrastText: lightBlue[100],
  },
  warning: {
    main: yellow[700],
    contrastText: lightBlue[100],
  },
  background: {
    default: lightBlue[50],
  },
};
