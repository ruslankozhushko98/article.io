import { PrismaClient } from '@prisma/client';

import logo from '@/app/assets/logo.png';

export const icons = {
  logo,
};

export const prisma = new PrismaClient();
