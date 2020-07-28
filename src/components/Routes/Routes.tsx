import React from 'react';
import { Route } from 'react-router-dom';
import { Box } from '@material-ui/core';

import { RoutePath } from 'common/Types';

import { Placeholder } from 'components/Home';

import { RoutesJSS } from './Routes.jss';

export const Routes = (): JSX.Element => {
  const classes = RoutesJSS();
  return (
    <>
      <Box>
        Navigation goes here?
      </Box>
      <Box className={classes.header}>
        Header goes here?
      </Box>
      <Box>
        <Route exact path={RoutePath.root} component={Placeholder} />
      </Box>
    </>
  );
};
