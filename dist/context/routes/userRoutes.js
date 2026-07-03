"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validator_1 = __importDefault(require("../../validator"));
const createUser_1 = __importDefault(require("../../use-case/user/createUser"));
const deleteUser_1 = __importDefault(require("../../use-case/user/deleteUser"));
const getUserID_1 = __importDefault(require("../../use-case/user/getUserID"));
const getUsers_1 = __importDefault(require("../../use-case/user/getUsers"));
const updateUser_1 = __importDefault(require("../../use-case/user/updateUser"));
const router = (0, express_1.Router)();
router.get("/users", getUsers_1.default);
router.get("/users/:id", getUserID_1.default);
router.post("/users", validator_1.default, createUser_1.default);
router.put("/users/:id", validator_1.default, updateUser_1.default);
router.delete("/users/:id", deleteUser_1.default);
exports.default = router;
//# sourceMappingURL=userRoutes.js.map