import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import LoginPage from 'containers/LoginPage/Loadable';
import RegisterPage from 'containers/RegisterPage/Loadable';
import AccountPage from 'containers/AccountPage/Loadable';
import DashboardPage from 'containers/DashboardPage/Loadable';
import LitterPage from 'containers/LitterPage/Loadable';
import { generateRequireSignInWrapper } from 'redux-token-auth'

const requireSignIn = generateRequireSignInWrapper({
  redirectPathIfNotSignedIn: '/signin',
})

const Routes = () => (
  <Switch>
    <Route exact path="/" component={ requireSignIn(HomePage) } />
    <Route exact path="/login" component={LoginPage} />
    <Route exact path="/register" component={RegisterPage} />
    <Route exact path="/account" component={AccountPage} />
    <Route exact path="/dashboard" component={DashboardPage} />
    <Route exact path="/litter/:id" component={LitterPage} />
    <Route path="" component={NotFoundPage} />
  </Switch>
);

export default Routes;
