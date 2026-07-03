"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Users_1 = __importDefault(require("../../repositories/Users"));
const getUserById = async (req, res) => {
    const user = await Users_1.default.findByPk(req.params.id);
    return res.json(user);
};
exports.default = getUserById;
//# sourceMappingURL=getUserID.js.map