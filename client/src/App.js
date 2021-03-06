import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Launch from './pages/Launch';
import Dashboard from './pages/Dashboard';
// import NewTrack from './components/NewTrack';
import login from './pages/login'
import Signup from './pages/signup'


const App = () =>
  <Router>
    <div>
      <Route exact path="/" component={Launch} />
      <Route exact path="/dashboard/:id" component={Dashboard} />
      <Route exact path="/login" component={login} />
      <Route exact path="/signup" component={Signup} />

    </div>
  </Router>;

export default App;
