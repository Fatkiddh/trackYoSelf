import React, { Component } from 'react';
import { Row, Input, Button } from 'react-materialize';
import API from './../utils/API';

class NewTrack extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      entry: "",
      date: "",
      score: {},
      account: "",
      errorMessage: null,
      // tags: ["Personal", "Work", "Fitness"]
    };
  }

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

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleBtnClick = event => {
    event.preventDefault();
    this.newTrack();
  };

  render() {
    return (
      <form>
        <Row>
          <Input s={12}
            label="Title"
            value={this.state.title}
            name="title"
            onChange={this.handleInputChange}
          />
        </Row>

        <Row>
          <Input s={12}
            label="How are you feeling today?"
            type="textarea"
            value={this.state.entry}
            name="entry"
            onChange={this.handleInputChange}
          />
        </Row>

        <Row>
          <Input name='tag' type='checkbox' value='work' label='Work' id="1"/>
          <Input name='tag' type='checkbox' value='family' label='Family' defaultValue='checked' />
          <Input name='tag' type='checkbox' value='school' label='School' />
          <Input name='tag' type='checkbox' value='fitness' label='Fitness' />
        </Row>

        <Row>
          <Button onClick={this.handleBtnClick}>
            Save Track
          </Button>
        </Row>

      </form>
    )
  }
}

export default NewTrack;