import React from 'react';
import {Row, Col} from 'react-materialize';
import RecentTracks from '../components/RecentTracks';

// 2 chart boxes and recents list
class Dashboard extends React.Component {

  render() {
    return(
      <Row className="container">
        <Col s={12} m={8}>
          <Row>
            Chart component of last month here.
          </Row>
          <Row>
            Chart component of averages here.
          </Row>
        </Col>
        <Col s={12} m={4}>
          <RecentTracks />
        </Col>
      </Row>
    )
  }
}

export default Dashboard;
