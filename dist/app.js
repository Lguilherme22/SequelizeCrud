"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRoutes_1 = __importDefault(require("./context/routes/userRoutes"));
const database_1 = __importDefault(require("./db/database"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(userRoutes_1.default);
database_1.default.sync().catch((error) => {
    console.error("falha na conexão.", error);
});
exports.default = app;
//# sourceMappingURL=app.js.map