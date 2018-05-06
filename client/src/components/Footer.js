import React from 'react';
import {Footer, Row, Col} from 'react-materialize';

export default () => (<Footer
  copyrights="© 2018 Copyright"
  links={
    <Row className="grey-text text-lighten-3">
      <Col className="pull-s12">
        <ul>
          <h6>Contributors</h6>
          <li><a href="https://www.linkedin.com/in/alvin-go/">Alvin Go</a></li>
          <li><a href="https://www.linkedin.com/in/jessebustamante/">Jesse Bustamante</a></li>
          <li><a href="https://www.linkedin.com/in/juliegroth/">Julie Groth</a></li>
          <li><a href="https://www.linkedin.com/in/ryan-evans-44686385/">Ryan Evans</a></li>
        </ul>
      </Col>
      <Col>
        <ul>
          <li>
            <a href="https://github.com/Fatkiddh/trackYoSelf">Github</a>
          </li>
        </ul>
      </Col>
    </Row>
  }
  className="light-blue darken-4">
  <h5 className="white-text">TrackYoSelf</h5>
  <p className="grey-text text-lighten-4">Tracking feelz since 2018.</p>
</Footer>)