import React, { Component } from 'react';
import { Row, Input, Button, Col } from 'react-materialize';
import API from './../utils/API';
let newTags = [];
const trackbtn = {
  paddingLeft: "30px",
  marginTop: "10px",
  fontSize: "30px"
};
class NewTrack extends Component {
  constructor(props) {
    super(props);

    // define state for NewTrack Component
    this.state = {
      title: "",
      entry: "",
      date: "",
      score: {},
      account: this.props.id,
      tags: [],
      checked: false,
      errorMessage: null,
      showNewTrack: false
    };
  }

  // function to reset state and global newTags variable after new track is saved to db
  reset = () => {
    this.setState({
      title: "",
      entry: "",
      date: "",
      score: {},
      // account: "",
      tags: [],
      errorMessage: null,
      showNewTrack: false
    });
    newTags = [];
  }

  // function to call API saveTrack method that adds new track to db
  newTrack = () => {
    const trackData = {
      title: this.state.title,
      entry: this.state.entry,
      date: this.state.date,
      score: this.state.score,
      account: this.state.account,
      tags: this.state.tags,

    };

    API.saveTrack(trackData)
      .then(res => {
        // call reset function
        this.reset();
        window.location.reload();
      })
      //if error, show error message
      .catch(err => this.setState({ errorMessage: err.response }));
  };

  // function to handle input changes
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleShowNewTrack = () => {
    this.setState({
      showNewTrack: !this.state.showNewTrack
    });
  };

  // function to handle changes to checkboxes
  handleCheckboxChange = event => {
    const { value } = event.target;
    newTags.push(value);
    this.setState({
      tags: newTags
    });
  };

  handleCheckClick = () => {
    this.setState({ checked: !this.state.checked });
  }

  // function to prevent default then call newTrack function
  handleBtnClick = event => {
    event.preventDefault();
    this.newTrack();
  };

  // component render function
  render() {
    return (
      <div>
        <Button floating large className="red" waves="light" icon="mode_edit" onClick={this.handleShowNewTrack} />
        <span style={trackbtn}>Add Track</span>
        {this.state.showNewTrack ? (<form action="#">
          <Col s={12} m={10} className="push-m1">
            {/* new row for Title and Date */}
            <Row>
              <Input s={12} m={8} label="Title" value={this.state.title} name="title" onChange={this.handleInputChange} />
              <Input s={12} m={4} name="date" type="date" label="Date" onChange={this.handleInputChange} value={this.state.date} />
            </Row>

            {/* new row for text area */}
            <Row>
              <Input s={12} label="How are you feeling today?" type="textarea" value={this.state.entry} name="entry" onChange={this.handleInputChange} />
            </Row>

            {/* new row for checkboxes */}
            <Row>
              <Input name='tag' type='checkbox' value='work' label='Work' checked={this.state.checked} onClick={this.handleCheckboxChange} />
              <Input name='tag' type='checkbox' value='family' label='Family' checked={this.state.checked} onClick={this.handleCheckboxChange} />
              <Input name='tag' type='checkbox' value='school' label='School' checked={this.state.checked} onClick={this.handleCheckboxChange} />
              <Input name='tag' type='checkbox' value='fitness' label='Fitness' checked={this.state.checked} onClick={this.handleCheckboxChange} />
            </Row>

            {/* new row for submit button */}
            <Row>
              <Button onClick={this.handleBtnClick}>
                Save Track
          </Button>
            </Row>
          </Col>
        </form>) : null}
    </div>
    )
  }
}

export default NewTrack;