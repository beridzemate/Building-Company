// src/routes/testRoutes.ts
import { Router } from 'express';
import { prisma } from '../config/db';

const router = Router();

router.get('/test-db', async (_req, res) => {
  try {
    // попробуем прочитать первые 5 сервисов
    const list = await prisma.service.findMany({ take: 5 });
    res.json({ ok: true, list });
  } catch (err) {
    res.status(500).json({ ok: false, error: String(err) });
  }
});

export default router;
