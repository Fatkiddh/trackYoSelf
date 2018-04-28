import React from 'react';
import {Link} from 'react-router-dom'
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
          <Link to="/">New Entry</Link>
        </li>
        <li>
          <Link href="/history">History</Link>
        </li>
        <li>
          <Link href="/tags">Tags</Link>
        </li>
        <ul className="right">
          <li>
            <Link href="/account">Account</Link>
          </li>
          <li>
            <Link to="/logout">Log Out</Link>
          </li>
        </ul>
      </ul>
    ): (
    <ul className="right">
      <li>
        <Link to="/login" className="grey-text text-lighten-5">Log In</Link>
      </li>
      <li>
        <Link to="/signup" className="grey-text text-lighten-5">Sign Up</Link>
      </li>
    </ul>
    )}

  </div>
</nav>;

export default Navbar;
