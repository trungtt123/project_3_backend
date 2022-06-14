const GroupModel = require('../db/models/group');
const PostModel = require('../db/models/post');
const Group = {};
Group.GetListGroups = async () => {
    var groups = await GroupModel.find();
    return groups;
}
Group.GetListPostInGroup = async (groupId) => {
    console.log(groupId);
    var data = await PostModel.find({groupId: groupId});
    return data;
}
  
module.exports = Group;
