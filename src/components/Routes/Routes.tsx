import React from 'react';
import { Route } from 'react-router-dom';
import { Box } from '@material-ui/core';

import { RoutePath } from 'common/Types';

import { HomeComponent } from 'components/Home';

import { RoutesJSS } from './Routes.jss';

export const RoutesComponent = (): JSX.Element => {
  const classes = RoutesJSS();
  return (
    <>
      <Box className={classes.navigation}>
        Navigation goes here
      </Box>
      <Box>
        <Route exact path={RoutePath.root} component={HomeComponent} />
      </Box>
    </>
  );
};
