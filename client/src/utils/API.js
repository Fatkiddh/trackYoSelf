import axios from "axios";

export default {
  // Gets all notes
  getNotes: function() {
    return axios.get("/api/notes");
  },
  // Gets the note with the given id
  // might not need this
  getNote: function(id) {
    return axios.get("/api/notes/" + id);
  },
  // Deletes the note with the given id
  deleteNote: function(id) {
    return axios.delete("/api/notes/" + id);
  },
  // Saves a note to the database
  saveNote: function(noteData) {
    return axios.post("/api/notes", noteData);
  },
  saveSignup: function(accountData) {
    return axios.post('/api/signup', accountData);
  },
  // Sign up a user
  signUp: function(userData) {
    return axios.post('/api/account', userData);
  },
  // Authenticates a user
  authenticateUser: function(userData) {
    return axios.post('/auth/login', userData);
  },

  getUserAccount: function() {
   return axios.get('/auth/account');
 }
};
