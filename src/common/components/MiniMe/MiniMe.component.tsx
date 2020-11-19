import React, { forwardRef } from 'react';
import TagFaces from '@material-ui/icons/TagFaces';

import { MiniMeProps } from './MiniMe.types';

export const MiniMeComponent = forwardRef<SVGSVGElement, MiniMeProps>((props: MiniMeProps, ref): JSX.Element => {
  const {
    onClick,
  } = props;

  return (
    <TagFaces onClick={onClick} ref={ref} />
  );
});
