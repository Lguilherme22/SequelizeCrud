const User = require("../../repositories/Users");

module.exports = async (req, res) => {

    const users = await User.findByPkr(req.params.id);

    return res.json(users);

};