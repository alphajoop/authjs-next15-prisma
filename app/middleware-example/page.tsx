import { auth } from '@/auth';
import Link from 'next/link';

export default async function MiddlewareExample() {
  const session = await auth();
  return (
    <div className="mt-16 bg-white px-4 py-12 font-geistsans text-zinc-950 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-3xl px-4">
        <h1 className="text-3xl font-bold">Middleware usage</h1>
        <p className="text-base">
          This page is protected by using the universal{' '}
          <Link href="https://nextjs.authjs.dev#auth" className="underline">
            <code>auth()</code>
          </Link>{' '}
          method in{' '}
          <Link
            href="https://nextjs.org/docs/app/building-your-application/routing/middleware"
            className="underline"
          >
            Next.js Middleware
          </Link>
          .
        </p>
        <p className="text-base">{session?.user?.email}</p>
      </div>
    </div>
  );
}
