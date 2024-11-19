import { db } from '@/lib/db';
import { PrismaAdapter } from '@auth/prisma-adapter';
import bcrypt from 'bcryptjs';
import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import GitHub from 'next-auth/providers/github';
import Google from 'next-auth/providers/google';

export const {
  handlers: { GET, POST },
  signIn,
  signOut,
  auth,
} = NextAuth({
  adapter: PrismaAdapter(db),
  session: { strategy: 'jwt' },
  providers: [
    GitHub({
      clientId: process.env.AUTH_GITHUB_ID!,
      clientSecret: process.env.AUTH_GITHUB_SECRET!,
    }),
    Google,
    Credentials({
      name: 'Credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'text',
          placeholder: 'email@example.com',
        },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async (credentials) => {
        if (!credentials.email || !credentials.password) {
          throw new Error('Missing credentials');
        }
        const email = credentials.email as string;
        const user = await db.user.findUnique({
          where: {
            email,
          },
        });
        if (!user || !user.hashedPassword) {
          throw new Error('No user found');
        }
        const isValid = bcrypt.compareSync(
          credentials.password as string,
          user.hashedPassword,
        );
        if (!isValid) {
          throw new Error('Invalid password');
        }
        return user;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.role = token.role as string;
      return session;
    },
  },
  secret: process.env.AUTH_SECRET,
  pages: {
    signIn: '/login',
  },
});
