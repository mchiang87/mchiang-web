import React from 'react';
import { Route } from 'react-router-dom';
import { Box } from '@material-ui/core';

import { RoutePath } from 'common/Types';

import { NavigationComponent } from 'components/Navigation';
import { HomeComponent } from 'components/Home';
import { ResumeComponent } from 'components/Resume';
import { ProjectsComponent } from 'components/Projects';
import { ContactComponent } from 'components/Contact';

export const RoutesComponent = (): JSX.Element => (
  <>
    <Box>
      <NavigationComponent />
    </Box>
    <Box>
      <Route exact path={RoutePath.root} component={HomeComponent} />
      <Route exact path={RoutePath.resume} component={ResumeComponent} />
      <Route exact path={RoutePath.projects} component={ProjectsComponent} />
      <Route exact path={RoutePath.contact} component={ContactComponent} />
    </Box>
  </>
);
