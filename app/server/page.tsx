import { auth } from '@/auth';
import SessionData from '@/components/session-data';
import Link from 'next/link';

export default async function Server() {
  const session = await auth();
  return (
    <div className="mt-16 bg-white px-4 py-12 font-geistsans text-zinc-950 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-3xl px-4">
        <h1 className="text-3xl font-bold">React Server Component Usage</h1>
        <p className="text-base">
          This page is server-rendered as a{' '}
          <Link
            href="https://nextjs.org/docs/app/building-your-application/rendering/server-components"
            className="underline"
          >
            React Server Component
          </Link>{' '}
          It gets the session data on the server using{' '}
          <Link href="https://nextjs.authjs.dev#auth" className="underline">
            <code>auth()</code>
          </Link>{' '}
          method.
        </p>
        <SessionData session={session} />
      </div>
    </div>
  );
}
