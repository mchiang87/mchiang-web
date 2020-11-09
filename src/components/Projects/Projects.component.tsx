import React from 'react';

import { Canvas } from '../../common/WebGL/Canvas.component';

export const ProjectsComponent = (): JSX.Element => (
  <div>
    <header>
      <Canvas width="500" height="500" textToShow="Projects" />
    </header>
  </div>
);
