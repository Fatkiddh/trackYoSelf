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
        required: true
    },
    epoch: {
        type: Number,
        required: true,
        default: Date.now()
    },
    anger: {
        type: Number
    },
    joy: {
        type: Number
    },
    fear: {
        type: Number
    },
    sadness: {
        type: Number
    },
    surprise: {
        type: Number
    },
    account: {
        type: Schema.ObjectId, ref: "Account"
    }
});

trackSchema.pre('save', function (next) {
    let track = this;
    let newDate = new Date();
    if (!track.date) {
        track.date = newDate;
    }
});

const Track = mongoose.model("Track", trackSchema);

module.exports = Track;