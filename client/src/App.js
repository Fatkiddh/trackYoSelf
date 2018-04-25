import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
// import './App.css';
import Navbar from './components/Navbar';
import Launch from './pages/Launch';
import NewNote from './components/NewNote';


const App = () =>
  <Router>
    <div>
      <Navbar />
        <Route exact path="/" component={Launch} />
        <Route exact path="/newnote" component={NewNote} />
    </div>
  </Router>;

export default App;
