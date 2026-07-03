const User = require("../../repositories/Users");

module.exports = async (req, res) => {

    try {

        const user = await User.create(req.body);

        return res.status(201).json(user);

    } catch (error) {

        return res.status(400).json(error.message);

    }

};