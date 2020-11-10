import React from 'react';
import { withStyles } from '@material-ui/core';

import { Canvas } from '../../common/WebGL/Canvas.component';
// import { Background } from '../../common/Backgrounds/Background.component';
// import { images } from '../../images/images';

import { HomeJSS } from './Home.jss';
import { HomeProps } from './Home.types';

const Component = (props: HomeProps): JSX.Element => {
  const { classes } = props;

  return (
    <div>
      <h1 className={classes.header}>
        {/* <Background bgImage={images[0].image} /> */}
        <Canvas width="500" height="500" textToShow="About Me" />
      </h1>
      <div className="content">
        <div className="content--inner">
          Application created to showcase multiple transitions in React projects, based on the route is entering. If you want to know more about this approach check these links below.
          <h2>Talks where this project is showcased</h2>
          <h2>Posts this project is mentioned</h2>
          <ul>
            <li><em>Coming soon...</em></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export const HomeComponent = withStyles(HomeJSS)(Component);
