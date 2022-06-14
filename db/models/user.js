const mongoose = require('mongoose');
var Schema = mongoose.Schema;
const UserSchema = new Schema({
    userName: {
        type: String,
        required: true,
        trim: true
    },
    fullName: {
        type: String,
        required: true,
        trim: true
    },
    passWord: {
        type: String,
        required: true,
        trim: true
    },
    token: {
        type: String, 
        required: true,
        trim: true
    },
    group: {
        type: Number,
        required: true,
        default: 1
    }
}, { timestamps: true }, {collection: 'user'}
);

const UserModel = mongoose.model('user', UserSchema);

module.exports = UserModel;