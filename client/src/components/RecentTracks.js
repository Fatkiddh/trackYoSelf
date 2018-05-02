import React from 'react';
import { Collapsible, CollapsibleItem} from 'react-materialize';
import API from './../utils/API';


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
  };

  render() {
    return (
      <Collapsible accordion
        defaultActiveKey={1}>
        {this.state.tracks.map(track => ( 
          <CollapsibleItem key={track.id} header={track.title} icon='filter_drama'>{track.entry}
          </CollapsibleItem>))
        }
      </Collapsible>
    )
  }
}

export default RecentTrack;