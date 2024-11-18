import { auth } from '@/auth';
import CustomLink from '@/components/CustomLink';

export default async function MiddlewareExample() {
  const session = await auth();
  return (
    <div className="mt-16 bg-white px-4 py-12 font-geistsans text-zinc-950 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-3xl px-4">
        <h1 className="text-3xl font-bold">Middleware usage</h1>
        <p className="text-base">
          This page is protected by using the universal{' '}
          <CustomLink href="https://nextjs.authjs.dev#auth">
            <code>auth()</code>
          </CustomLink>{' '}
          method in{' '}
          <CustomLink href="https://nextjs.org/docs/app/building-your-application/routing/middleware">
            Next.js Middleware
          </CustomLink>
          .
        </p>
        <p className="text-base">{session?.user?.email}</p>
      </div>
    </div>
  );
}
