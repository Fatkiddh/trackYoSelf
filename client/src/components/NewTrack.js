import React, { Component } from 'react';
import { Row, Input } from 'react-materialize';
import API from './../utils/API';

class NewTrack extends Component {
  state = {
    title: "",
    entry: "",
    date: "",
    score: 0,
    account: "",
    errorMessage: null,
    tags: ["Personal", "Work", "Fitness"]
  };

  newTrack = () => {
    const trackData = {
      title: this.state.title,
      entry: this.state.entry,
      date: this.state.date,
      score: this.state.score,
      account: this.state.account,
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
        <Row>
          <div className="col s12">
            <input placeholder="Track Title" id="title" />
            <input name='on' type='date' onChange={function (e, value) { }} />
          </div>
        </Row>

        <Row>
          <div className="input-field col s12">
            <textarea id="body" className="materialize-textarea"></textarea>
            <label type="textarea">"How are you feeling today?"</label>
          </div>
        </Row>

        <Row>
          <Input name='group1' type='checkbox' value='red' label='Red' />
          <Input name='group1' type='checkbox' value='yellow' label='Yellow' defaultValue='checked' />
          <Input name='group1' type='checkbox' value='green' label='Green' />
          <Input name='group1' type='checkbox' value='brown' label='Brown' />
        </Row>
      </form>
    )
  }

}

export default NewTrack;