import React from 'react';
import {Collapsible, CollapsibleItem} from 'react-materialize';

const tracks = [
  {
    title: "title 1",
    entry: "aosidjfaosdijf"
  },{
    title: "title 2",
    entry: "dslkfjsoidfsldkfj sodijfsd oisdjf"
  },{
    title: "title 3",
    entry: "asodiafj sadoifj oaispjf"
  },{
    title: "title 4",
    entry: "sadfio fj sdof osidjf "
  }
];


class RecentTrack extends React.Component {

  render() {
    return (
      <Collapsible accordion="accordion" defaultActiveKey={1}>
        {tracks.map( track => (
          <CollapsibleItem header={track.title} icon='filter_drama'>
            {track.entry}
          </CollapsibleItem>
          )
        )}
      </Collapsible>
    )
  }
}

export default RecentTrack;
