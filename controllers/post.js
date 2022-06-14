const PostServices = require('../services/post');
module.exports = (app) => {
    app.post('/api/post/getpost', (req, res) => {
        PostServices.GetPost(req, res);
    });
    app.post('/api/post/createpost', (req, res) => {
        PostServices.CreatePost(req, res);
    });
    app.post('/api/post/getallposts', (req, res) => {
        PostServices.GetAllPosts(req, res);
    });
    app.post('/api/post/removepost', (req, res) => {
        PostServices.RemovePost(req, res);
    });
    app.post('/api/post/updatepost', (req, res) => {
        PostServices.UpdatePost(req, res);
    });
};