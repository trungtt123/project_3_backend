const GroupServices = require('../services/group');
module.exports = (app) => {
    app.get('/api/group/getlistgroups', (req, res) => {
        GroupServices.GetListGroups(req, res);
    });
    app.get('/api/group/:id', (req, res) => {
        GroupServices.GetListPostInGroup(req, res);
    });
};