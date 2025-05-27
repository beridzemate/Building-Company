// src/config/db.ts
import { PrismaClient } from '@prisma/client';
import { withAccelerate } from '@prisma/extension-accelerate';
import { ENV } from './env';

export const prisma = new PrismaClient({
  datasources: { db: { url: ENV.DATABASE_URL } },
})
  .$extends(withAccelerate());

prisma
  .$connect()
  .then(() => console.log('✅ Prisma connected with Accelerate'))
  .catch((err: unknown) => console.error('❌ Prisma connection error:', err));
