import { PrismaClient } from '@prisma/client';
import type {
  PrismaClientOptions,
  DefaultArgs,
} from '@prisma/client/runtime/library';

declare global {
  var prisma: PrismaClient<PrismaClientOptions, never, DefaultArgs> | undefined;
}

export const prisma: PrismaClient<PrismaClientOptions, never, DefaultArgs> =
  global.prisma ||
  new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['error', 'warn'] : ['error'],
  });

if (process.env.NODE_ENV !== 'production') global.prisma = prisma;
