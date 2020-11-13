import React from 'react';
import { Switch, Route, Redirect } from 'react-router';


import Login from './Login/Login';
import Home from './Home/Home';
import Register from './Register/Register'

export default props => 
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/home" component={Home}/>
      <Route path="/register" component={Register}/>
      <Redirect from="*" to="/"/>
    </Switch>


