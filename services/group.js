const Group = require('../repositories/group');

module.exports = {
    
    async GetListGroups(req, res) {
        try {
            var groups = await Group.GetListGroups();
            res.status(200).json({ success: true, result: groups });
        }
        catch (error) {
            res.status(400).json({ error: error });
        }
    },
    async GetListPostInGroup(req, res) {
        try {
            var posts = await Group.GetListPostInGroup(req.params.id);
            res.status(200).json({ success: true, result: posts });
        }
        catch (error) {
            res.status(400).json({ error: error });
        }
    }
    
}