const UserServices = require('../services/user');
module.exports = (app) => {
    app.post('/api/auth/login', (req, res) => {
        UserServices.Login(req, res);
    });
    app.post('/api/auth/signup', (req, res) => {
        UserServices.CreateUser(req, res);
    });
    app.post('/api/user/change-infomation', (req, res) => {
        UserServices.ChangeInfomation(req, res);
    });
    app.post('/api/user/change-password', (req, res) => {
        UserServices.ChangePassWord(req, res);
    });
    
};