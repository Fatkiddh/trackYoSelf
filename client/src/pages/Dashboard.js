import React from "react";
import { Row, Col, Button } from "react-materialize";
import Navbar from "../components/Navbar";
import RecentTracks from "../components/RecentTracks";
import NewTrack from "../components/NewTrack";
import EmotionLineChart from "../components/EmotionLineChart";
import DashFooter from "../components/DashFooter";
import API from "./../utils/API";

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
      showNewTrack: false,
      tracks: []
    };
  }

  componentDidMount() {
    API.getTracks()
      .then(res => {
        this.setState({ tracks: res.data });
      })
      .catch(err => console.log("error"));
  }

  handleClick = () => {
    this.setState({
      showNewTrack: !this.state.showNewTrack
    });
  };

  render() {
    return <div>
        <Navbar loggedin="true" />
        <div className="container">
          <Row>
            <br />
            <Col s={12} m={11}>
              <h4>Track your tracks over the last 30 days</h4>
              <EmotionLineChart 
              tracks={this.state.tracks}/>
            </Col>
          </Row>
          <Row>
            <Button floating large className="red" waves="light" icon="mode_edit" onClick={this.handleClick} />
            <span style={trackbtn}>Add Track</span>
            {this.state.showNewTrack ? <NewTrack /> : null}
            <RecentTracks tracks={this.state.tracks} />
          </Row>
        </div>
        <DashFooter />
      </div>;
  }
}

export default Dashboard;
