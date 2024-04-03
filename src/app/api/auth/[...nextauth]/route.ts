import NextAuth from 'next-auth';
import Google from 'next-auth/providers/google';
import { PrismaAdapter } from '@next-auth/prisma-adapter';

import { prisma } from '@/app/libs/utils/constants';

const handler = NextAuth({
  adapter: PrismaAdapter(prisma),
  secret: process.env.JWT_SECRET,
  providers: [
    Google({
      clientId: String(process.env.GOOGLE_CLIENT_ID),
      clientSecret: String(process.env.GOOGLE_CLIENT_SECRET),
    }),
  ],
  pages: {
    signIn: '/',
  },
});

export {
  handler as GET,
  handler as POST,
  handler as PUT,
  handler as DELETE,
};
