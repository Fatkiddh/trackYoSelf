import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Modal, Button, Row, Input} from 'react-materialize';
import API from './../utils/API';
import Auth from './../utils/Auth';


class SignUpForm extends Component {

  state = {
    username: "",
    email: "",
    password: "",
    errorMessage: null,
  };

  authenticate = () => {
  const userData = {
    email: this.state.email,
    password: this.state.password,
  };

  API.authenticateUser(userData)
     .then(res => {
       // clear error message
       this.setState({ errorMessage: null });
       Auth.authenticateUser(res.data.token);

       // hard redirect to / to reload all the state and nav
       window.location.href = '/';
     })
     .catch(err => this.setState({ errorMessage: err.response.data.message }));
 };

 signUp = () => {
    const userData = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
    };

    API.signUp(userData)
      .then(res => {
        // clear error message
        this.setState({ errorMessage: null });
        console.log('did the signup api hit?');

        // authenticate the user after successful sign up
        this.authenticate();
      })
      .catch(err => this.setState({ errorMessage: err.response.data.message }));
  };

  handleInputChange = event => {
    const { name , value } = event.target;

    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    // alert(`Hello ${this.state.userName} ${this.state.email}`);
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
       errorMessage: 'Please enter all required fields to sign up.'
     });

  };
};


  render() {
    return(

      <Modal header={this.props.header} fixedFooter trigger={<Button><Link to="/signup">{this.props.title}</Link></Button>} actions={<Button onClick={this.handleFormSubmit}>Create Account</Button>}>
        <form>
          <Row>
            <Input s={12} label="Username"
            value={this.state.userName}
            name="userName"
            onChange={this.handleInputChange}
            type="text"
            />

            <Input type="email" label="Email" s={12}
            value={this.state.email}
            name="email"
            onChange={this.handleInputChange}
            />

            <Input type="password" label="Password" s={12}
            value={this.state.password}
            name="password"
            onChange={this.handleInputChange}
            />
          </Row>
        </form>
      </Modal>
    );
  }
}



export default SignUpForm;
