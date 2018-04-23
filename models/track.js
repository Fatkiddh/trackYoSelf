const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const trackSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    entry: {
        type: String,
        trim: true,
        required: true
    },
    other: {
        type: String,
        unique: true,
        required: true
    }
});

const Track = mongoose.model("Track", trackSchema);

module.exports = Track;