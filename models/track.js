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
    date: {
        type: Date,
        default: Date.now()
    },
    score: {
        type: Number
    }
});

const Track = mongoose.model("Track", trackSchema);

module.exports = Track;