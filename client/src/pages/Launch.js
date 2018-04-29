import React from 'react';
import {Route} from 'react-router-dom';
import {Parallax, Footer, Row, Col, Icon} from 'react-materialize';
import LogSignForm from '../components/Modal';

const Launch = props =>
<div>
  <div id="index-banner" className="parallax-container">
    <div className="section no-pad-bot">
      <div className="container">
        <br/><br/>
        <h1 className="header center grey-text text-lighten-5">TrackYoSelf</h1>
        <Row className="center">
          <h5 className="header col s12 light">A journal to track your mood.</h5>
        </Row>
        <Row className="center">
          <LogSignForm header="Sign Up" title="Get Started" route={props.match.url}/>
        </Row>
        <br/><br/>
      </div>
    </div>
    <div className="parallax"><img src={`${window.location.origin}/images/bed-book-s.jpeg`} alt="Journal"/></div>
  </div>

  <div className="section white">
    <br/><br/>
    <Row className="container center">
      <Col s={12} m={4} offset="m2">
        <Icon large className="center">favorite_border</Icon>
        <p>Keep a track of how you're feeling or record significant events in your life.</p>
      </Col>
      <Col s={12} m={4}>
        <Icon large className="center">timeline</Icon>
        <p>Receive sentiment analysis from your tracks and see how your mood changes.</p>
      </Col>
    </Row>
    <br/><br/>
  </div>
  <Parallax imageSrc={`${window.location.origin}/images/phone.jpeg`}/>

  <Footer copyrights="© 2018 Copyright" links={<ul > <li>
      <a className="grey-text text-lighten-3" href="https://github.com/Fatkiddh/trackYoSelf">Github</a>
    </li>
    <li>
      <a className="grey-text text-lighten-3" href="#!">Link 2</a>
    </li>
    <li>
      <a className="grey-text text-lighten-3" href="#!">Link 3</a>
    </li>
  </ul>} className='light-blue darken-4'>
    <h5 className="white-text">TrackYoSelf</h5>
    <p className="grey-text text-lighten-4">Tracking feelz since 2018.</p>
  </Footer>
  <Route exact path={`${props.match.url}/signup`} component={LogSignForm}/>
  <Route exact path={`${props.match.url}/login`} component={LogSignForm}/>

</div>;

export default Launch;
