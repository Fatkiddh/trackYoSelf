import React from "react";
import { Row, Col, Button } from "react-materialize";
import Navbar from "../components/Navbar";
import RecentTracks from "../components/RecentTracks";
import NewTrack from "../components/NewTrack";


const trackbtn = {
  paddingLeft: "30px",
  marginTop: "10px",
  fontSize: "30px"
}
// 2 chart boxes and recents list
class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      showNewTrack: false
    };

  }


  handleClick = () => {
    this.setState({
      showNewTrack: !this.state.showNewTrack
    });
  }
  render() {
    return <div>
        <Navbar loggedin="true" />
        <div className="container">
          <Row>
            <br />
            <Col>
              <img src="http://via.placeholder.com/480x150" alt="this thing" />
            </Col>
            <Col>
              <img src="http://via.placeholder.com/480x150" alt="this thing" />
            </Col>
          </Row>
          <Row>
            <Button floating large className="red" waves="light" icon="mode_edit" onClick={this.handleClick} />
            <span style={trackbtn}>Add Track</span>
            {this.state.showNewTrack ? <NewTrack /> : null}
            <RecentTracks />
          </Row>
        </div>
      </div>;
  }
}

export default Dashboard;
