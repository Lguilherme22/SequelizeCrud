"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const requestValidator = (req, res, next) => {
    const schema = joi_1.default.object({
        firstName: joi_1.default.string().min(2).max(50).required(),
        lastName: joi_1.default.string().min(2).max(50).required(),
        age: joi_1.default.number().integer().min(12).max(99).required(),
        email: joi_1.default.string().email().required(),
    });
    const { error } = schema.validate(req.body);
    if (error) {
        res.status(400).json({
            message: error.details[0].message,
        });
        return;
    }
    next();
};
exports.default = requestValidator;
//# sourceMappingURL=validator.js.map