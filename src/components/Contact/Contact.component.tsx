import React from 'react';

import { Canvas } from '../../common/WebGL/Canvas.component';

export const ContactComponent = (): JSX.Element => (
  <div>
    <header>
      <Canvas width="500" height="500" textToShow="Contact Me" />
    </header>
  </div>
);
