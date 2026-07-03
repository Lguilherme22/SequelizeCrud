const User = require("../../repositories/Users");

module.exports = async (req, res) => {

    const users = await User.findByPk(req.params.id);

    return res.json(users);

};