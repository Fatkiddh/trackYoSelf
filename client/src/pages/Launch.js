import React from "react";
import { Parallax, Row, Col, Icon } from "react-materialize";
import LogSignForm from "../components/Modal";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Launch = props => (
  <div>
    <Navbar />
    <div id="index-banner" className="parallax-container">
      <div className="section no-pad-bot">
        <div className="container grey-text text-lighten-5">
          <br />
          <br />
          <h1 className="header center">TrackYoSelf</h1>
          <Row className="center">
            <h5 className="header col s12 light">
              A journal to track your mood.
            </h5>
          </Row>
          <Row className="center">
            <LogSignForm
              header="Sign Up"
              title="Get Started"
              route={props.match.url}
            />
          </Row>
          <br />
          <br />
        </div>
      </div>
      <div className="parallax">
        <img
          src={`${window.location.origin}/images/bed-book-s.jpeg`}
          alt="Journal"
        />
      </div>
    </div>

    <div className="section white">
      <br />
      <br />
      <Row className="container center">
        <Col s={12} m={4} offset="m2">
          <Icon large className="center">
            favorite_border
          </Icon>
          <p>
            Keep a track of how you're feeling or record significant events in
            your life.
          </p>
        </Col>
        <Col s={12} m={4}>
          <Icon large className="center">
            timeline
          </Icon>
          <p>
            Receive sentiment analysis from your tracks and see how your mood
            changes.
          </p>
        </Col>
      </Row>
      <br />
      <br />
    </div>
    <Parallax imageSrc={`${window.location.origin}/images/phone.jpeg`} />
    <Footer />
    
  </div>
);

export default Launch;
