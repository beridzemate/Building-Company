// src/config/env.ts

import { config } from 'dotenv';
config();

// этот export делает файл модулем
export const ENV = {
  PORT: process.env.PORT || '5000',
  DATABASE_URL: process.env.DATABASE_URL || '',
};
