import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import LoginPage from 'containers/LoginPage/Loadable';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/login" component={LoginPage} />
    <Route path="" component={NotFoundPage} />
  </Switch>
);

export default Routes;
