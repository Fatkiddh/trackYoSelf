import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
// import './App.css';
import Navbar from './components/Navbar';
import Launch from './pages/Launch';


const App = () =>
  <Router>
    <div>
      <Navbar />
        <Route exact path="/" component={Launch} />
    </div>
  </Router>;

export default App;
