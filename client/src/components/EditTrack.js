import React from "react";
import { Modal, Input } from "react-materialize";

class EditTrack extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        title: this.props.title,
        entyr: this.props.entry
    };
  }

  render() {
    return (
      <Modal
        header="Edit Track"
        fixedFooter
        trigger={
          <Button>Edit</Button>
        }
        actions={
          <Button onClick={this.handleFormSubmit}>
            Submit
          </Button>
        }>
        <Input value={this.state.title} name="newTitle" />
        <Input value={this.state.entry} name="newEntry" />
      </Modal>
    );
  }
}

export default EditTrack;