import React from 'react';
import { Canvas } from '../../common/WebGL/Canvas.component';
// import { Background } from '../../common/Backgrounds/Background.component';
// import { images } from '../../images/images';

import { HomeJSS } from './Home.jss';
// import { HomeProps } from './Home.types';

export const HomeComponent = (): JSX.Element => {
  const classes = HomeJSS();

  return (
    <h1>
      <div className={classes.header}>
        {/* <Background bgImage={images[0].image} /> */}
        <Canvas width="500" height="500" textToShow="Hi" />
      </div>
      <div>Coming soon...</div>
      <div>Very soon...</div>
    </h1>
  );
};
