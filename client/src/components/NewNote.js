import React from 'react';

const NewNote = () =>
  <form>
    <div className="row">
      <div className="col s12">
        <input placeholder="Title" id="title"/>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <textarea id="body" className="materialize-textarea"></textarea>
          <label for="textarea1">"How are you feeling today?"</label>
        </div>
      </div>
    </div>
  </form>;

export default NewNote;
