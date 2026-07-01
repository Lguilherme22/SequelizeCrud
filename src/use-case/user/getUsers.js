const User = require("../../context/models/Users");

module.exports = async (req, res) => {

    const users = await User.findAll();

    return res.json(users);

};