import React, { Component } from 'react';
import { Row, Input, Button, Col } from 'react-materialize';
import API from './../utils/API';
let newTags = [];

class NewTrack extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      entry: "",
      date: "",
      score: {},
      account: "",
      tags: [],
      errorMessage: null
    };
  }

  reset = () => {
    this.setState({
      title: "",
      entry: "",
      date: "",
      score: {},
      account: "",
      tags: [],
      errorMessage: null
    });
    newTags = [];
    
  }

  newTrack = () => {
    const trackData = {
      title: this.state.title,
      entry: this.state.entry,
      date: this.state.date,
      score: this.state.score,
      // account: this.state.account,
      tags: this.state.tags

    };

    API.saveTrack(trackData)
      .then(res => {
        // clear error message
        // this.setState({ errorMessage: null });
        this.reset();
      })
      .catch(err => this.setState({ errorMessage: err.response.data.message }));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleCheckboxChange = event => {
    const { value } = event.target;
 

    newTags.push(value);
    this.setState({
      tags: newTags
    });
  };

  handleBtnClick = event => {
    event.preventDefault();
    this.newTrack();
  };

  render() {
    return <form action="#">
      <Col s={12} m={10} className="push-m1">
        <Row>
          
          <Input s={12} m={8} label="Title" value={this.state.title} name="title" onChange={this.handleInputChange} />
          <Input s={12} m={4} name="date" type="date" label="Date" onChange={this.handleInputChange} value={this.state.date} />
        </Row>


      <Row>
        <Input s={12} label="How are you feeling today?" type="textarea" value={this.state.entry} name="entry" onChange={this.handleInputChange} />
      </Row>


      <Row>
        <Input name='tag' type='checkbox' value='work' label='Work' onClick={this.handleCheckboxChange} />
        <Input name='tag' type='checkbox' value='family' label='Family' defaultValue='checked' onClick={this.handleCheckboxChange} />
        <Input name='tag' type='checkbox' value='school' label='School' onClick={this.handleCheckboxChange} />
        <Input name='tag' type='checkbox' value='fitness' label='Fitness' onClick={this.handleCheckboxChange} />
      </Row>

      <Row>
        <Button onClick={this.handleBtnClick}>
          Save Track
          </Button>
        </Row>
      </Col>
      </form>;
  }
}

export default NewTrack;
