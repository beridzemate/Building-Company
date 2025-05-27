
import express from 'express';
import cors from 'cors';
import serviceRoutes from './routes/serviceRoutes';
// просто импортируем, чтобы запустился код подключения
import { prisma } from './config/db';
import { errorHandler } from './middlewares/errorHandler';
import testRoutes from './routes/testRoutes';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/services', serviceRoutes);
app.use('/api', testRoutes);
app.use(errorHandler);

export default app;
