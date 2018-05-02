import React from "react";
import { Link } from "react-router-dom";
import LogSignForm from "./Modal.js";

const ulStyle = {
  marginLeft: "200px"
};

class Navbar extends React.Component {
  render() {
    return (
      <nav className="light-blue darken-2">
        <div className="nav-wrapper container">
          <a href="/" className="brand-logo grey-text text-lighten-5">
            TrackYoSelf
          </a>
          {this.props.loggedin ? (
            <ul style={ulStyle}>
              <li>
                <Link to="/history">History</Link>
              </li>
              <li>
                <Link to="/tags">Tags</Link>
              </li>
              <ul className="right">
                <li>
                  <a to="/account">Account</a>
                </li>
                <li>
                  <a to="/logout">Log Out</a>
                </li>
              </ul>
            </ul>
          ) : (
            <ul className="right">
              <li>
                <LogSignForm header="Log In" title="Log In" />
              </li>
              <li>
                <LogSignForm header="Sign Up" title="Sign Up" />
              </li>
            </ul>
          )}
        </div>
      </nav>
    );
  }
}

export default Navbar;
