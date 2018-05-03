import React from "react";
import { Modal, Input, Button, Toast } from "react-materialize";
import API from "./../utils/API";


class EditTrack extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      entry: this.props.entry,
      open: this.props.open
    };
  }
  toast = () => {
    return <Toast toast="Track has been updated." />
  }

  handleFormSubmit = () => {
    this.toast();

    API.updateTrack(this.props.id, this.state)
      .then(this.setState({open: !this.state.open}))
      .catch(err =>
        this.setState({ errorMessage: err.response.data.message })
      );
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return <Modal header="Edit Track" {...this.state.open} fixedFooter trigger={<Button>
            Edit
          </Button>} actions={
            <Button onClick={this.handleFormSubmit} >
              Submit
            </Button>
         }>
        <Input value={this.state.title} name="title" onChange={this.handleInputChange} />
        <Input value={this.state.entry} name="entry" type="textarea" onChange={this.handleInputChange} />
      </Modal>;
  }
}

export default EditTrack;