import React, { Component }  from 'react';
import { Tag } from 'react-materialize';
import API from './../utils/API';

class NewTrack extends Component {
  state = {
    title: "",
    entry: "",
    date: "",
    score: 0,
    account: "",
    errorMessage: null
  };

  newTrack = () => {
    const trackData = {
      title: this.state.title,
      entry: this.state.entry,
      date: this.state.date,
      score: this.state.score,
      account: this.state.account
    };

    API.saveTrack(trackData)
      .then(res => {
        // clear error message
        this.setState({ errorMessage: null });
      })
      .catch(err => this.setState({ errorMessage: err.response.data.message }));
  };

  render() {
    return (
      <form>
        <div className="row">
          <div className="col s12">
            <input placeholder="Track Title" id="title" />
            <input name='on' type='date' onChange={function (e, value) { }} />
          </div>
        </div>

        <div className="row">
          <div className="input-field col s12">
            <textarea id="body" className="materialize-textarea"></textarea>
            <label type="textarea">"How are you feeling today?"</label>
          </div>
        </div>

        <div className="row">
          <div className="col s12">
            <Tag>Tag</Tag>
            <Tag>Tag 2</Tag>
          </div>
        </div>

      </form>
     )
  }

}

export default NewTrack;