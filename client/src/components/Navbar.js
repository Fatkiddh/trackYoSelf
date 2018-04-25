import React from 'react';
// import {Navbar, NavItem} from 'react-materialize';
// import NewNote from './NewNote';
const ulStyle= {
  'margin-left': '200px'
}

const Navbar = (props) =>
<nav className="light-blue darken-2">
  <div className="nav-wrapper container">
    <a href="/" className="brand-logo grey-text text-lighten-5">TrackYoSelf</a>
    {props.loggedin ? (
      <ul style={ulStyle}>
        <li>
          <a href="/">New Entry</a>
        </li>
        <li>
          <a href="/history">History</a>
        </li>
        <li>
          <a href="/tags">Tags</a>
        </li>
        <ul className="right">
          <li>
            <a href="/account">Account</a>
          </li>
          <li>
            <a href="/logout">Log Out</a>
          </li>
        </ul>
      </ul>
    ): (
    <ul className="right">
      <li>
        <a href="/login" className="grey-text text-lighten-5">Log In</a>
      </li>
      <li>
        <a href="/signup" className="grey-text text-lighten-5">Sign Up</a>
      </li>
    </ul>
    )}

  </div>
</nav>;

export default Navbar;
