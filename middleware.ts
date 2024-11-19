import { auth } from '@/auth';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export async function middleware(req: NextRequest) {
  const session = await auth();

  const protectedPaths = ['/middleware-example', '/admin'];

  const isProtectedPath = protectedPaths.some((path) =>
    req.nextUrl.pathname.startsWith(path),
  );

  if (!isProtectedPath) {
    return NextResponse.next();
  }

  if (!session) {
    const loginUrl = new URL('/login', req.url);
    loginUrl.searchParams.set('callbackUrl', req.url);
    return NextResponse.redirect(loginUrl);
  }

  // Vérifiez si l'utilisateur a le rôle "admin" pour les chemins réservés
  const isAdminPath = req.nextUrl.pathname.startsWith('/admin');
  if (isAdminPath && session.user.role !== 'ADMIN') {
    return NextResponse.redirect(new URL('/403', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
