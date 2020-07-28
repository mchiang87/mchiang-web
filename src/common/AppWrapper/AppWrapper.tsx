import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import { createDefaultTheme } from 'common/Themes/Theme.default';

import { AppWrapperProps } from './AppWrapper.types';

export const AppWrapper = (props: AppWrapperProps): JSX.Element => {
  const { children } = props;
  const defaultTheme = createDefaultTheme();

  return (
    <ThemeProvider theme={defaultTheme}>
      <Router>
        {children}
      </Router>
    </ThemeProvider>
  );
};
