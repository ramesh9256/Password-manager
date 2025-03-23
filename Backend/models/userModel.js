const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    website: { type: String},
    username: { type: String},
    password: { type: String}
});

const User = mongoose.model('User', userSchema);
module.exports = User;
