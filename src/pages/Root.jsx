import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Home from './Home/Home';
import Login from './Login/Login';
import Register from './Register/Register'

const PagesRoot = () => (
  <Router> 
    <Switch>
      <Route path="/" component={Login} exact path="/"/>
      <Route path="/home" component={Home} exact path="/home/"/>
      <Route path="/register" component={Register} exact path="/register/"/>
    </Switch>
  </Router>
)

export default PagesRoot;
