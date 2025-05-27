"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = void 0;
// src/config/db.ts
const client_1 = require("@prisma/client");
const extension_accelerate_1 = require("@prisma/extension-accelerate");
const env_1 = require("./env");
exports.prisma = new client_1.PrismaClient({
    datasources: { db: { url: env_1.ENV.DATABASE_URL } },
})
    .$extends((0, extension_accelerate_1.withAccelerate)());
exports.prisma
    .$connect()
    .then(() => console.log('✅ Prisma connected with Accelerate'))
    .catch((err) => console.error('❌ Prisma connection error:', err));
