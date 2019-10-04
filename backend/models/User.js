const mongoose = require('mongoose');

const UserSchema = new mongoose.new({
    email: String
})

module.exports = mongoose.model('User', UserSchema);