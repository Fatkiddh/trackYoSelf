import React from 'react';
import {Link} from 'react-router-dom'
// import SignUpForm from './SignUpForm';
// import LogInForm from './LogInForm';
// import {Navbar, NavItem} from 'react-materialize';
// import NewNote from './NewNote';
import LogSignForm from './Modal.js';

const ulStyle= {
  'margin-left': '200px'
}

class Navbar extends React.Component {

  render() {
    return(
      <nav className="light-blue darken-2">
        <div className="nav-wrapper container">
          <a href="/" className="brand-logo grey-text text-lighten-5">TrackYoSelf</a>
          {this.props.loggedin ? (
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
          ) : (
            <ul className="right">
              <li>
                {/*<Link to="/login" className="grey-text text-lighten-5">Log In</Link>*/}
                <LogSignForm header="Log In" title="Log In" />
              </li>
              <li>
                {/*<a className="grey-text text-lighten-5" onClick= >Sign Up</a>*/}
                <LogSignForm header="Sign Up" title="Sign Up" />
              </li>
            </ul>
          )}
        </div>
      </nav>
    )
  }
}


export default Navbar;
