const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    fullName:  String,
    password:  String,
    email: String,
    role: {
        type: String,
        // enum: ['admin', 'user'],
        default: 'user'
    }
    // Add other fields as needed
})


const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;