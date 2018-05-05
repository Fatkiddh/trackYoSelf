import React from "react";
import { Modal, Input, Button, Toast } from "react-materialize";
import API from "./../utils/API";
// import BtnToast from "./BtnToast";

class EditTrack extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      entry: this.props.entry
    };
  }

  update = () => {
    const trackData = this.state;

    API.updateTrack(this.props.id, trackData)
      .then(res => window.location.reload())
      .catch(err => console.log("error"));
  }

  handleFormSubmit = event => {
    // event.preventDefault();
    this.update();
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <Modal
        id={this.state.id}
        header="Edit Track"
        fixedFooter
        trigger={<Button>Edit</Button>}
        actions={
          <Toast toast="Track has been updated." ><h6 className="modal-close" onClick={this.handleFormSubmit}>Submit</h6></Toast>
        }>
        <Input
          value={this.state.title}
          name="title"
          onChange={this.handleInputChange}
        />
        <Input
          value={this.state.entry}
          name="entry"
          type="textarea"
          onChange={this.handleInputChange}
        />
      </Modal>
    );
  }
}

export default EditTrack;
