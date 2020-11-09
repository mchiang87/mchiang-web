import React from 'react';

import { BackgroundJSS } from './Background.jss';

interface BackgroundProps {
  bgImage: string;
}

export const Background = (props: BackgroundProps): JSX.Element => {
  const { bgImage } = props;
  const classes = BackgroundJSS();

  return (
    <img className={classes.main} src={bgImage} alt="" />
  );
};
