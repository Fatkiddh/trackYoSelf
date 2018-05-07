import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import { Modal, Button, Row, Input } from "react-materialize";
import API from "./../utils/API";
// import Auth from "./../utils/Auth";

class LogSignForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      email: "",
      password: "",
      errorMessage: null,
      is_registered: false,
      is_loggedin: false
    };
  }

  authenticate = () => {
    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    API.authenticateUser(userData)
      .then(res => {
        // clear error message
        this.setState({ errorMessage: null });
        // Auth.authenticateUser(res.data.token);

        // hard redirect to / to reload all the state and nav
        window.location.href = "/dashboard";
      })
      .catch(err => this.setState({ errorMessage: err.response.data.message }));
  };

  signUp = () => {
    const userData = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
    };

    API.signUp(userData)
      .then(res => {
        // clear error message
        this.setState({ errorMessage: null });
        console.log("did the signup api hit?");

      })
      .catch(err => this.setState({ errorMessage: err.response.data.message }));
  };

  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    // alert(`Hello ${this.state.username} ${this.state.email}`);
    // this.setState({
    //   firstName: "",
    //   lastName: "",
    // });
    if (
      this.state.username &&
      // this.state.phoneNumber &&
      this.state.email &&
      this.state.password
    ) {
      this.signUp();
    } else {
      this.setState({
        errorMessage: "Please enter all required fields to sign up."
      });
    }
  };

  render() {
    return (
      <Modal
        header={this.props.header}
        fixedFooter
        trigger={
          <Link to={`${this.props.route}/account`}>
            <Button>{this.props.title}</Button>
          </Link>
        }
        actions={
          <Button onClick={this.handleFormSubmit}>
            {this.props.header === "Sign Up" ? "Create Account" : "Log In"}
          </Button>
        }>
        <Row>
          <Input
            s={12}
            label="Username"
            value={this.state.username}
            name="username"
            onChange={this.handleInputChange}
            type="text"
          />

          {this.props.header === "Sign Up" ? (
            <Input
              type="email"
              label="Email"
              s={12}
              value={this.state.email}
              name="email"
              onChange={this.handleInputChange}
            />
          ) : (
            ""
          )}

          <Input
            type="password"
            label="Password"
            s={12}
            value={this.state.password}
            name="password"
            onChange={this.handleInputChange}
          />
        </Row>
        <Route
          exact
          path={`${this.props.route}/account`}
          component={LogSignForm}
        />
        <Route
          exact
          path={`${this.props.route}/login`}
          component={LogSignForm}
        />
      </Modal>
    );
  }
}

export default LogSignForm;
