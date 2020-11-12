import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from '../src/pages/Home/Home';
import Login from '../src/pages/Login/Login';
import Register from '../src/components/User/Register/Register'

export const Routes = () => (
  <BrowserRouter> 
    <Switch>
      <Route path="/" exact component={Login}/>
      <Route path="/home" component={Home}/>
      <Route path="/register" component={Register}/>
    </Switch>
  </BrowserRouter>
);
