const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const noteSchema = new Schema({
  title: String,
  date: {
    type: Date,
    required: true
  }, 
  note: {
    type: String,
    require: true
  }
});

const Note = mongoose.model("Note", noteSchema);

module.exports = Note;