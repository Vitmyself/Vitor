// import 'bootstrap/dis/css/bootstrap.min.css'
// import 'font-awesome/css/font-awesome.min.css'
import './App.css';
import React from 'react'
import { HashRouter } from 'react-router-dom'
import Routes from './pages/Routes'

export default prop =>
  <HashRouter>
    <div className="app">
      <Routes />
    </div>
  </HashRouter>

