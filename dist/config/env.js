"use strict";
// src/config/env.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.ENV = void 0;
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
// этот export делает файл модулем
exports.ENV = {
    PORT: process.env.PORT || '5000',
    DATABASE_URL: process.env.DATABASE_URL || '',
};
