import React from "react";
import { Parallax, Row, Button } from "react-materialize";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link, Route } from "react-router-dom";
import signup from "./signup";
import Carousel from '../components/Carousel';

const Launch = props => (
  <div>
    <Navbar />
    <div className="parallax-container">
      <div className="section">
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
            <Link to="/signup">
              <Button className="btn-large">Get Started</Button>
            </Link>
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
    <Carousel />
    <Parallax imageSrc={`${window.location.origin}/images/phone.jpeg`} />
    <Footer />
    <Route path="/signup" component={signup} />
  </div>
);

export default Launch;
