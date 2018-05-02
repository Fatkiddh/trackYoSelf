import axios from "axios";

export default {
  // Gets all tracks
  getTracks: function() {
    return axios.get("/api/tracks");
  },
  // Gets the track with the given id
  getTrack: function(id) {
    return axios.get("/api/tracks" + id);
  },
  // Deletes the track with the given id
  deleteTrack: function(id) {
    return axios.delete("/api/tracks" + id);
  },
  // Saves a new track
  saveTrack: function(trackData) {
    return axios.post("/api/tracks", trackData);
  },
  // Update a track
  updateTrack: function(id, trackData) {
    return axios.put("/api/tracks" + id, trackData);
  },

  // Is this needed? Not used at the moment
  // saveSignup: function(accountData) {
  //   return axios.post('/api/signup', accountData);
  // },
  // Sign up a user
  signUp: function(userData) {
    return axios.post('/account', userData);
  },
  // Authenticates a user
  authenticateUser: function(userData) {
    return axios.post('/login', userData);
  },
  // Get user info
  getUserAccount: function() {
   return axios.get('/account');
 }
};