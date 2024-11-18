import NextAuth from 'next-auth';
import GitHub from 'next-auth/providers/github';

export const authOptions = {
  providers: [
    GitHub({
      clientId: process.env.AUTH_GITHUB_ID!,
      clientSecret: process.env.AUTH_GITHUB_SECRET!,
    }),
  ],
};

const { handlers, signIn, signOut, auth } = NextAuth(authOptions);

export { auth, handlers, signIn, signOut };
