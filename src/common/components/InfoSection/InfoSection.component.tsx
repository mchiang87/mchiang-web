import React, {
  forwardRef,
  Ref,
} from 'react';
import {
  Box,
  Typography,
  Paper,
} from '@material-ui/core';

import { InfoSectionProps } from './InfoSection.types';
import { InfoSectionJSS } from './InfoSection.jss';

export const InfoSectionComponent = forwardRef((props: InfoSectionProps, ref: Ref<HTMLDivElement>): JSX.Element => {
  const {
    show,
    header,
    content,
    children,
    showBottomMargin,
    classNameRef,
  } = props;
  const classes = InfoSectionJSS();
  const bottomMargin = showBottomMargin ? classes.bottomPadding : '';
  let renderContent = content;

  if (typeof content === 'string') {
    renderContent = (
      <Typography>{content}</Typography>
    );
  }

  return (
    <div className={classNameRef}>
      <Box className={`${classes.detailsSection} ${bottomMargin}`}>
        {show
          && (
          <Paper elevation={1} ref={ref}>
            <Box>
              <Typography variant="h6">{header}</Typography>
            </Box>
            <Box className={classes.sectionContent}>
              {renderContent}
              {children}
            </Box>
          </Paper>
          )}
      </Box>
    </div>
  );
});
