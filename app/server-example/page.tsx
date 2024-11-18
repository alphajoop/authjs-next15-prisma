import { auth } from '@/auth';
import CustomLink from '@/components/CustomLink';
import SessionData from '@/components/session-data';

export default async function ServerExample() {
  const session = await auth();
  return (
    <div className="mt-16 bg-white px-4 py-12 font-geistsans text-zinc-950 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-3xl px-4">
        <h1 className="text-3xl font-bold">React Server Component Usage</h1>
        <p className="text-base">
          This page is server-rendered as a{' '}
          <CustomLink href="https://nextjs.org/docs/app/building-your-application/rendering/server-components">
            React Server Component
          </CustomLink>{' '}
          It gets the session data on the server using{' '}
          <CustomLink href="https://nextjs.authjs.dev#auth">
            <code>auth()</code>
          </CustomLink>{' '}
          method.
        </p>
        <SessionData session={session} />
      </div>
    </div>
  );
}
