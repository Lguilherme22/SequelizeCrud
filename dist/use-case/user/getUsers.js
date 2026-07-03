"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Users_1 = __importDefault(require("../../repositories/Users"));
const getUsers = async (_req, res) => {
    const users = await Users_1.default.findAll();
    return res.json(users);
};
exports.default = getUsers;
//# sourceMappingURL=getUsers.js.map