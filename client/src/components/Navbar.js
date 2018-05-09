import React from "react";
import { Link, Route } from "react-router-dom";
import { Redirect } from "react-router-dom";
import login from "./../pages/login";
import signup from "./../pages/signup";
import axios from 'axios'

const ulStyle = {
  marginLeft: "200px"
};

class Navbar extends React.Component {
    constructor(){
      super()
        this.state = {
          loggedIn: true,
          redirectTo: null
        }
        this.logout = this.logout.bind(this)
}

  logout(event) {
        event.preventDefault()
        console.log('logging out')
        axios.post('/accounts/logout')
        .then(response => {
          console.log(response.data)
          if (response.status === 200) {
            this.setState({
              loggedIn: false,
              redirectTo: '/'
            })
          }
        }).catch(error => {
            console.log('Logout error')
        });
      };

  render() {
    if (this.state.redirectTo) {
      return <Redirect to ={{ pathname: this.state.redirectTo }} />;
    } else {
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
                    <Link to="/account">Account</Link>
                  </li>
                  <li>
                    <a onClick={this.logout}>Logout</a>

                  </li>
                </ul>
              </ul>
            ) : (
              <ul className="right">
                <li>
                  <Link to="/login">Log In</Link>
                </li>
                <li>
                  <Link to="/signup">Sign Up</Link>
                </li>
              </ul>
            )}
          </div>
          <Route path="/login" component={login} />
          <Route path="/signup" component={signup} />
        </nav>
      );
    }
  }
}

export default Navbar;
