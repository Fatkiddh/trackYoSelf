import React from 'react';
import {Modal, Row, Input, Button} from 'react-materialize';
import {Link} from 'react-router-dom';


class LogInForm extends React.Component {

  render() {
    return(
      <Modal header={this.props.header} fixedFooter trigger={<span><Link to="/login">{this.props.title}</Link></span>} actions={<Button onClick={this.handleFormSubmit}>Log In</Button>}>
        <form>
          <Row>
            <Input type="email" label="Email" s={12}
            /*value={this.state.email}*/
            name="email"
            onChange={this.handleInputChange}
            />

            <Input type="password" label="Password" s={12}
            /*value={this.state.password}*/
            name="password"
            onChange={this.handleInputChange}
            />
          </Row>
        </form>
      </Modal>
    )
  }
}

export default LogInForm;
