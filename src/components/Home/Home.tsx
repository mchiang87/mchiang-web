import React from 'react';
import { withStyles } from '@material-ui/core';

import { HomeJSS } from './Home.jss';
import { HomeProps } from './Home.types';

const Component = (props: HomeProps): JSX.Element => {
  const { classes } = props;

  return (
    <div>
      <header className={classes.header}>
        <h1>
          Placeholder
        </h1>
      </header>
    </div>
  );
};

export const HomeComponent = withStyles(HomeJSS)(Component);
