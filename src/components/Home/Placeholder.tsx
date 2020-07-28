import React from 'react';
import { withStyles } from '@material-ui/core';

import { PlaceholderJSS } from './Placeholder.jss';
import { PlaceholderProps } from './Placeholder.types';

const Component = (props: PlaceholderProps): JSX.Element => {
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

export const Placeholder = withStyles(PlaceholderJSS)(Component);
