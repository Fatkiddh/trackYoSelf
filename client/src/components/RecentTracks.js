import React from "react";
import { Collapsible, CollapsibleItem, Row, Col } from "react-materialize";
import EditTrack from './EditTrack';
import API from "./../utils/API";

// const tracks = [{
//   title: "title 1",
//   entry: "aosidjfaosdijf"
// }, {
//   title: "title 2",
//   entry: "dslkfjsoidfsldkfj sodijfsd oisdjf"
// }, {
//   title: "title 3",
//   entry: "asodiafj sadoifj oaispjf"
// }, {
//   title: "title 4",
//   entry: "sadfio fj sdof osidjf "
// }];


class RecentTrack extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tracks: [],
      open: false
    };
  }

  componentDidMount() {
    API.getTracks()
      .then(res => {
        this.setState({
          tracks: res.data
        });
      })
      .catch(err => console.log("error"));
  }

  handleClick = () =>{
    this.setState({open: !this.state.open})
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
                  <Col s={12} m={10}>
                    <p>{track.entry}</p>
                  </Col>
                  <Col s={12} m={2}>
                    <EditTrack open={this.state.open} title={track.title} entry={track.entry} id={track._id} onClick={this.handleClick} />
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
