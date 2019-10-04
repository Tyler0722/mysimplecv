import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Settings from 'src/views/settings';
import Update from 'src/views/Update';
import Resume from 'src/views/resume';
import Home from 'src/views/Home';
import GettingStarted from '../views/GettingStarted';

const AppRoutes = (props) => {
  return (
    <Router history={createBrowserHistory()}>
      <Switch>
        <Route component={Home} exact={true} path="/" />

        <Route component={Settings} path="/settings" />
        <Route component={Update} path={['/experience', '/education', '/skills']} />
        <Route component={GettingStarted} path="/finish" />
        <Route component={Resume} path="/home" />
      </Switch>

      {/* <Route component={PublicResume} path="/:username" /> */}
    </Router>
  );
};

export default AppRoutes;
