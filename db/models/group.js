const mongoose = require('mongoose');
var Schema = mongoose.Schema;
const GroupSchema = new Schema({
    groupName: {
        type: String,
        require: true,
        default: ""
    }
}, { timestamps: true } , {collection: 'group'}
);

const GroupModel = mongoose.model('group', GroupSchema);

module.exports = GroupModel;