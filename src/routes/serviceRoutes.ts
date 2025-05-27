import express from 'express';
import { getServices } from '../controllers/serviceController';

const router = express.Router();

// GET /api/services?lang=ru|en|ka
router.get('/', getServices);

export default router;
