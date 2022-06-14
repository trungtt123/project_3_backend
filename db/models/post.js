const mongoose = require('mongoose');
var Schema = mongoose.Schema;
const PostSchema = new Schema({
    userName: {
        type: String,
        required: true,
        trim: true
    },
    fullName:{
        type: String,
        required: true,
        trim: true 
    },
    title: {
        type: String,
        trim: true,
        default: ''
    },
    description: {
        type: String, 
        trim: true,
        default: ''
    },
    images: {
        type: Array,
        default: []
    },
    groupId: {
        type: String,
        required: true 
    }
}, { timestamps: true } , {collection: 'post'}
);

const PostModel = mongoose.model('post', PostSchema);

module.exports = PostModel;