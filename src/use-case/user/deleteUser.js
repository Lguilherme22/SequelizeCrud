const User = require("../../repositories/Users");

module.exports = async (req, res) => {

    const user = await User.findByPk(req.params.id);

    if (!user)
        return res.status(404).json({
            message: "User not found"
        });

    await user.destroy();

    return res.status(204).send();

};