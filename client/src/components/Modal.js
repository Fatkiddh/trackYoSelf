import React from 'react';
import {Modal, Button, Row, Input} from 'react-materialize';

export default () => (
  <Modal header="Sign Up" fixedFooter trigger={<Button>Get Started</Button>} actions={<Button>Create Account</Button>}>
    <Row>
      <Input label="First Name" s={6} />
      <Input s={6} label="Last Name"/>
      <Input s={12} label="Username"/>
      <Input type="email" label="Email" s={12}/>
      <Input type="password" label="Password" s={12}/>
    </Row>
  </Modal>
);
