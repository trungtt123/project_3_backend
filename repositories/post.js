const PostModel = require('../db/models/post');
const Post = {};

Post.GetPost = async (userName, postID) => {
    var post = await PostModel.findOne({ userName: userName, _id: postID });
    return post;
}
Post.CreatePost = async (userName, fullName, title, description, images, groupId) => {
    var post = await PostModel.create(
        {
            userName: userName,
            fullName: fullName,
            title: title,
            description:description,
            images: images,
            groupId: groupId
        }
    );
    return post;
}
Post.GetAllPosts = async (userName) => {
    console.log(userName);
    var posts = await PostModel.find({userName: userName});
    console.log(posts);
    var data = [];
    for (var i = 0; i < posts.length; i++){
        data.push({
            _id: posts[i]._id,
            userName: posts[i].userName,
            title: posts[i].title,
            fullName: posts[i].fullName,
            description: posts[i].description,
            createdAt: posts[i].createdAt,
            updatedAt: posts[i].updatedAt
        })
    }
    return data;
}
Post.RemovePost = async (postID) => {
    console.log(postID)
    await PostModel.deleteOne({_id: postID});
    return;
}
Post.UpdatePost = async(postID, newData) => {
    var oldPost = await PostModel.findOne({_id: postID});
    oldPost.title = newData.title;
    oldPost.description = newData.description;
    oldPost.images = newData.images;
    await oldPost.save();
    return;
}
module.exports = Post;
