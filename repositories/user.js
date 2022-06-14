const UserModel = require('../db/models/user');
var hash = require('object-hash');
const User = {};

User.Login = async (data) => {
    const hashPassWord = hash(data?.passWord + process.env.SECRET_KEY_PASSWORD, {algorithm: 'md5'})
    // console.log(hashPassWord)
    var userData = await UserModel.findOne({ userName: data?.userName, passWord: hashPassWord});
    if (userData === null) {
        return undefined
    }
    return {
        userName: userData?.userName,
        token: userData?.token,
        fullName: userData?.fullName,
        group: userData?.group
    };
},
User.GetUserInfomation = async (token) => {

    var user = await UserModel.findOne({token: token});
    return user;
}
User.ChangeInfomation = async (newUserData) => {
    console.log(newUserData);
    var user = await UserModel.findOne({userName: newUserData.userName});
    user.fullName = newUserData.fullName;
    user.group = newUserData.group;
    await user.save();
    console.log(user);
    return user;
}
User.ChangePassWord = async (data) => {
    console.log(data);
    
    var user = await UserModel.findOne({userName: data.userName});
    const hashOldPassWord = hash(data?.oldPassWord + process.env.SECRET_KEY_PASSWORD, {algorithm: 'md5'})
    if (hashOldPassWord !== user.passWord) return false;
    const hashPassWord = hash(data?.newPassWord + process.env.SECRET_KEY_PASSWORD, {algorithm: 'md5'})
    const token = hash(data?.newPassWord + process.env.SECRET_KEY_TOKEN, {algorithm: 'md5'});
    user.passWord = hashPassWord;
    user.token = token;

    await user.save();

    return true;
}

User.CheckExistUserName = async (userName) => {
    var user = await UserModel.findOne({userName: userName});
    if (user !== null) return true;
    return false;
}
User.CreateUser = async (data) => {
    const hashPassWord = hash(data?.passWord + process.env.SECRET_KEY_PASSWORD, {algorithm: 'md5'});
    const token = hash(data?.passWord + process.env.SECRET_KEY_TOKEN, {algorithm: 'md5'});
    var user = await UserModel.create({
        userName: data?.userName,
        fullName: data?.fullName,
        passWord: hashPassWord,
        token: token
    });
    console.log(user);
    return;
}
module.exports = User;
