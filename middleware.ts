//export { auth as middleware } from '@/auth';

import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { auth } from './auth';

const protectedRoutes = ['/middleware'];

export default async function middleware(req: NextRequest) {
  const session = await auth();

  const isProtected = protectedRoutes.some((route) =>
    req.nextUrl.pathname.startsWith(route),
  );

  if (!session && isProtected) {
    const absoluteUrl = new URL('/', req.nextUrl.origin);
    return NextResponse.redirect(absoluteUrl.toString());
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
