import React from 'react';

import { Canvas } from '../../common/WebGL/Canvas.component';

export const ResumeComponent = (): JSX.Element => (
  <div>
    <header>
      <Canvas width="500" height="500" textToShow="Resume" />
    </header>
  </div>
);
