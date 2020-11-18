import React from 'react';
import { Switch, Route, Redirect, Router } from 'react-router';


import Login from '../pages/Login/Login';
import Home from '../pages/Home/Home';
import Register from '../pages/Register/Register'
import NotFound from './NotFound'
// import PrivateRoute from './PrivateRoute'

import{history} from '../history';

const Routes = () => (
  <Router history={history}>
     <Switch>
      <Route component={Login} exact path="/" />
      <Route component={Register} exact path="/register"/>
      {/* <PrivateRoute component={Home} exact path="/home"/> */}
      <Route component={Home} exact path="/home"/>
      <Route component={NotFound} exact path="*" />
    </Switch>
  </Router>
)

export default Routes