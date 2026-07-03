"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Users_1 = __importDefault(require("../../repositories/Users"));
const deleteUser = async (req, res) => {
    const user = await Users_1.default.findByPk(req.params.id);
    if (!user) {
        return res.status(404).json({
            message: "User not found",
        });
    }
    await user.destroy();
    return res.status(204).send();
};
exports.default = deleteUser;
//# sourceMappingURL=deleteUser.js.map