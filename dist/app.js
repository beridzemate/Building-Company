"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const serviceRoutes_1 = __importDefault(require("./routes/serviceRoutes"));
const errorHandler_1 = require("./middlewares/errorHandler");
const testRoutes_1 = __importDefault(require("./routes/testRoutes"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/api/services', serviceRoutes_1.default);
app.use('/api', testRoutes_1.default);
app.use(errorHandler_1.errorHandler);
exports.default = app;
