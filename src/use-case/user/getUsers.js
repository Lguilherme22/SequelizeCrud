const User = require("../../repositories/Users");

module.exports = async (req, res) => {

    const users = await User.findAll();

    return res.json(users);

};