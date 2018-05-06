import React from "react";
import { Collapsible, CollapsibleItem, Row, Col } from "react-materialize";
import EditTrack from './EditTrack';
import API from "./../utils/API";
import BarChart from "../components/EmotionBarChart";


class RecentTrack extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tracks: []
    }
  }

  componentDidMount() {
    API.getTracks()
    .then(res => {
        this.setState({ tracks: res.data });
      })
      .catch(err => console.log("error"));
  }

  render() {
    return <Row>
        <Col s={12} m={10} className="push-m1">
          <Collapsible accordion>
            {this.state.tracks.map(track => (
              <CollapsibleItem
                key={track._id}
                header={track.title}
                icon="filter_drama">
                <Row>
                  <Col s={12} m={6}>
                    <p>{track.entry}</p>
                    <EditTrack open={this.state.open} title={track.title} entry={track.entry} id={track._id} onClick={this.handleClick} />
                  </Col>
                  <Col s={12} m={6}>
                    <BarChart />
                  </Col>
                </Row>
              </CollapsibleItem>
            ))}
          </Collapsible>
        </Col>
      </Row>;
  }
}

export default RecentTrack;
