const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        max: 255,
        min: 6
    },
    username: {
        type: String,
        required: true,
        max: 14,
    },
    password: {
        type: String,
        required: true,
        max: 1024,
        min: 4
    },

})

module.exports = mongoose.model('Users', userSchema)