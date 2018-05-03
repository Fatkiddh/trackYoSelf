import React from "react";
import { Collapsible, CollapsibleItem, Row, Col } from "react-materialize";
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
      tracks: []
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

  render() {
    return (
      <Row>
        <Col s={12} m={10} className="push-m1">
          <Collapsible accordion defaultActiveKey={1}>
            {this.state.tracks.map(track => (
              <CollapsibleItem
                key={track.id}
                header={track.title}
                icon="filter_drama">
                {track.entry}
              </CollapsibleItem>
            ))}
          </Collapsible>
        </Col>
      </Row>
    );
  }
}

export default RecentTrack;
