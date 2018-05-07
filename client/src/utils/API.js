import axios from "axios";

export default {
  // Gets all tracks
  getTracks: function() {
    return axios.get("/api/tracks");
  },
  // Gets the track with the given id
  getTrack: function(id) {
    return axios.get("/api/tracks/" + id);
  },
  // Deletes the track with the given id
  deleteTrack: function(id) {
    return axios.delete("/api/tracks/" + id);
  },
  // Saves a new track
  saveTrack: function(trackData) {
    return axios.post("/api/tracks", trackData);
  },
  // Update a track
  updateTrack: function(id, trackData) {
    return axios.put("/api/tracks/" + id, trackData);
  }
};
