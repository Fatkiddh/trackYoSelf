import React from 'react';

const Navbar = (props) =>
<nav>
  <div className="nav-wrapper container">
    <a href="/" className="brand-logo">TrackYoSelf</a>
    {props.loggedin ? (
      <div>
      <ul id="nav-mobile" className="hide-on-med-and-down">
        <li>
          <a href="/">New Entry</a>
        </li>
        <li>
          <a href="/history">History</a>
        </li>
        <li>
          <a href="/tags">Tags</a>
        </li>
      </ul>
      <ul className="right">
        <li>
          <a href="/account">Account</a>
        </li>
        <li>
          <a href="/logout">Log Out</a>
        </li>
      </ul>
      </div>
    ): ''}
    <ul className="right">
      <li>
        <a href="/login">Log In</a>
      </li>
      <li>
        <a href="/signup">Sign Up</a>
      </li>
    </ul>
  </div>
</nav>;

export default Navbar;
