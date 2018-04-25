import React from 'react';
import { Tag } from 'react-materialize';

const NewNote = () =>
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

  </form>;

export default NewNote;
