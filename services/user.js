const User = require('../repositories/user');

module.exports = {

    async Login(req, res) {
        try {
            var userData = await User.Login(req.body);
            res.status(200).json({ success: true, result: userData });
        }
        catch (error) {
            res.status(400).json({ error: error });
        }
    },
    async GetUserInfomation(req, res) {
        try {
            var userData = await User.GetUserInfomation(req.body.token);
            res.status(200).json({ success: true, result: userData });
        }
        catch (error) {
            res.status(400).json({ error: error });
        }
    },
    async ChangeInfomation(req, res) {
        try {
            var userData = await User.ChangeInfomation(req.body);
            res.status(200).json({ success: true, result: userData });
        }
        catch (error) {
            res.status(400).json({ error: error });
        }
    },
    async ChangePassWord(req, res) {
        try {
            var kt = await User.ChangePassWord(req.body);
            res.status(200).json({ success: true, result: kt });
        }
        catch (error) {
            res.status(400).json({ error: error });
        }
    },
    async CreateUser(req, res) {
        try {
            var response = await User.CheckExistUserName(req.body.userName);
            if (response === false) {
                console.log(req.body)
                await User.CreateUser(req.body);
                res.status(200).json({
                    success: true, result: {
                        status: 'OK'
                    }
                });
            }
            else {
                res.status(200).json({
                    success: true, result: {
                        status: 'USERNAME_IS_ALREADY_EXIST'
                    }
                });
            }

        }
        catch (error) {
            res.status(400).json({ error: error });
        }
    }


}