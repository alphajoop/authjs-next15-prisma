import 'next-auth';
import { DefaultSession } from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: DefaultSession['user'] & {
      role?: string | null;
      id?: string;
    };
  }

  interface User {
    role?: string | null;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    role?: string | null;
  }
}
