"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
/**
 * Универсальный обработчик ошибок.
 * Надо подключить в app.ts **после** всех роутов:
 * app.use(errorHandler);
 */
const errorHandler = (err, req, res, next) => {
    console.error('❌ Error:', err);
    const status = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    res.status(status).json({ error: message });
};
exports.errorHandler = errorHandler;
