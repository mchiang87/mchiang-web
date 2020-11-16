import React from 'react';

import { Canvas } from '../../common/WebGL/Canvas.component';

import { ContactJSS } from './Contact.jss';

export const ContactComponent = (): JSX.Element => {
  const classes = ContactJSS();

  return (
    <div>
      <header className={classes.header}>
        <Canvas width="500" height="500" textToShow="Contact Me" />
      </header>
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
