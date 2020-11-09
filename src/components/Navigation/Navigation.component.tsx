import React from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Button,
} from '@material-ui/core';

import { RoutePath } from 'common/Types';

import { NavigationJSS } from './Navigation.jss';

export const NavigationComponent = (): JSX.Element => {
  const classes = NavigationJSS();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <Button component={Link} to={RoutePath.root} color="inherit">About Me</Button>
          <Button component={Link} to={RoutePath.resume} color="inherit">Resume</Button>
          <Button component={Link} to={RoutePath.projects} color="inherit">Projects</Button>
          <Button component={Link} to={RoutePath.contact} color="inherit">Contact</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};
