import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';
import { Box } from '@material-ui/core';
import {
  Transition,
  TransitionGroup,
} from 'react-transition-group';

import {
  play,
  exit,
} from 'common/Timelines/timelines';
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
      <Route render={({ location }) => {
        const {
          pathname,
          key,
        } = location;

        return (
          <TransitionGroup component={null}>
            <Transition
              key={key}
              appear
              onEnter={(node, appears) => play(pathname, node, appears)}
              onExit={(node) => exit(node)}
              timeout={{
                enter: 750,
                exit: 150,
              }}
              exit={false}
            >
              <Switch location={location}>
                <Route exact path={RoutePath.root} component={HomeComponent} />
                <Route exact path={RoutePath.resume} component={ResumeComponent} />
                <Route exact path={RoutePath.projects} component={ProjectsComponent} />
                <Route exact path={RoutePath.contact} component={ContactComponent} />
              </Switch>
            </Transition>
          </TransitionGroup>
        );
      }}
      />
    </Box>
  </>
);
