"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Users_1 = __importDefault(require("../../repositories/Users"));
const createUser = async (req, res) => {
    try {
        const user = await Users_1.default.create(req.body);
        return res.status(201).json(user);
    }
    catch (error) {
        const message = error instanceof Error ? error.message : "Unexpected error";
        return res.status(400).json(message);
    }
};
exports.default = createUser;
//# sourceMappingURL=createUser.js.map