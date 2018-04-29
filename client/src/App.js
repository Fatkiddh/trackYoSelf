import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from './components/Navbar';
import Launch from './pages/Launch';
import Dashboard from './pages/Dashboard';
import SignUpForm from './components/SignUpForm';
import LogInForm from './components/LogInForm';
import NewTrack from './components/NewTrack';


const App = () =>
  <Router>
    <div>
      <Navbar />
          <Route exact path="/" component={Launch} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route path="/signup" component={SignUpForm} />
          <Route path="/login" component={LogInForm} />
          <Route exact path="/new" component={NewTrack} />
    </div>
  </Router>;

export default App;
