const mongoose = require('mongoose');

const ArtistSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    nickname: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    nationality: {
        type: mongoose.Schema.Types.Map,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    picture: {
        type: String,
    },

}, { timestamps: true });

module.exports = mongoose.model('Artist', ArtistSchema)