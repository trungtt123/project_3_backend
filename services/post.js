const Post = require('../repositories/post');
const User = require('../repositories/user');
module.exports = {
    
    async GetPost(req, res) {
        try {
            var post = await Post.GetPost(req.body.userName, req.body.postID);
            res.status(200).json({ success: true, result: post });
        }
        catch (error) {
            res.status(400).json({ error: error });
        }
    },
    async CreatePost(req, res) {
        try {
            var user = await User.GetUserInfomation(req.body.token);
            var post = await Post.CreatePost(user.userName, user.fullName, req.body.title, req.body.description, req.body.images, req.body.groupId);
            res.status(200).json({ success: true, result: post });
        }
        catch (error) {
            res.status(400).json({ error: error });
        }
    },
    async GetAllPosts(req, res) {
        try {
            var user = await User.GetUserInfomation(req.body.token);
            var posts = await Post.GetAllPosts(user.userName);
            res.status(200).json({ success: true, result: posts });
        }
        catch (error) {
            res.status(400).json({ error: error });
        }
    },
    async RemovePost(req, res){
        try {
            //console.log(req.body)
            var user = await User.GetUserInfomation(req.body.token);
            var post = await Post.GetPost(user.userName, req.body.postID);
            console.log(post)
            if (post !== null) await Post.RemovePost(req.body.postID);
            res.status(200).json({ success: true});
        }
        catch (error) {
            res.status(400).json({ error: error });
        }
    } ,
    async UpdatePost(req, res){
        try {
            var user = await User.GetUserInfomation(req.body.token);
            var post = await Post.GetPost(user.userName, req.body.postID);
            if (post.userName != user.userName) {
                res.status(400).json({ error: error });
                return;
            }
            if (post !== null) await Post.UpdatePost(req.body.postID, req.body.newData);
            res.status(200).json({ success: true});
        }
        catch (error) {
            res.status(400).json({ error: error });
        }
    }
    
}