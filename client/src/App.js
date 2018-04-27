import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar';
import Launch from './pages/Launch';
import NewNote from './components/NewNote';
import Dashboard from './pages/Dashboard';


const App = () =>
  <Router>
    <div>
      <Navbar />
        <Switch>
          <Route exact path="/" component={Launch} />
          <Route exact path="/newnote" component={NewNote} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
    </div>
  </Router>;

export default App;
