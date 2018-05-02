import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Launch from './pages/Launch';
import Dashboard from './pages/Dashboard';
// import NewTrack from './components/NewTrack';


const App = () =>
  <Router>
    <div>
      <Route exact path="/" component={Launch} />
      <Route path="/dashboard" component={Dashboard} />
      {/* <Route exact path="/new" component={NewTrack} /> */}
    </div>
  </Router>;

export default App;
