import React from 'react';
import { withStyles } from '@material-ui/core';

import { Canvas } from '../../common/WebGL/Canvas.component';
import { Background } from '../../common/Backgrounds/Background.component';
import { images } from '../../images/images';

import { HomeJSS } from './Home.jss';
import { HomeProps } from './Home.types';

const Component = (props: HomeProps): JSX.Element => {
  const { classes } = props;

  return (
    <div>
      <header className={classes.header}>
        <Background bgImage={images[0].image} />
        <Canvas width="500" height="500" textToShow="About Me" />
      </header>
    </div>
  );
};

export const HomeComponent = withStyles(HomeJSS)(Component);
