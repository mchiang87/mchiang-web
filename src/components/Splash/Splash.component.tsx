import React from 'react';
import { withStyles } from '@material-ui/core';

import { Canvas } from '../../common/components/WebGL/Canvas.component';
// import { Background } from '../../common/Backgrounds/Background.component';
// import { images } from '../../images/images';

import { SplashJSS } from './Splash.jss';
import { SplashProps } from './Splash.types';

const Component = (props: SplashProps): JSX.Element => {
  const { classes } = props;

  return (
    <div>
      <h1 className={classes.header}>
        {/* <Background bgImage={images[0].image} /> */}
        <Canvas width="500" height="500" textToShow="Hi" />
      </h1>
      <div className="content">
        <div className="content--inner">
          <h2>Coming soon...</h2>
        </div>
      </div>
    </div>
  );
};

export const SplashComponent = withStyles(SplashJSS)(Component);
