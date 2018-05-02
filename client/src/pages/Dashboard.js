import React from "react";
import { Row, Col, Button } from "react-materialize";
import Navbar from "../components/Navbar";
import RecentTracks from "../components/RecentTracks";
import NewTrack from "../components/NewTrack";

// 2 chart boxes and recents list
class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      showNewTrack: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      showNewTrack: !this.state.showNewTrack
    });
  }
  render() {
    return (
      <div>
        <Navbar loggedin="true" />
        <div className="container">
          <Row>
            <Col>Chart component of last month here.</Col>
            <Col>Chart component of averages here.</Col>
          </Row>
          <Row>
            <Button
              floating
              large
              className="red"
              waves="light"
              icon="mode_edit"
              onClick={this.handleClick}
            />
            {this.state.showNewTrack ? <NewTrack /> : null}
            <RecentTracks />
          </Row>
        </div>
      </div>
    );
  }
}

export default Dashboard;
