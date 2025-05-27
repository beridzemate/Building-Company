"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/testRoutes.ts
const express_1 = require("express");
const db_1 = require("../config/db");
const router = (0, express_1.Router)();
router.get('/test-db', async (_req, res) => {
    try {
        // попробуем прочитать первые 5 сервисов
        const list = await db_1.prisma.service.findMany({ take: 5 });
        res.json({ ok: true, list });
    }
    catch (err) {
        res.status(500).json({ ok: false, error: String(err) });
    }
});
exports.default = router;
