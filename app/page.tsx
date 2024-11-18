import { auth } from '@/auth';
import CustomLink from '@/components/CustomLink';

export default async function Home() {
  const session = await auth();
  return (
    <div className="mt-16 bg-white px-4 py-12 font-geistsans text-zinc-950 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-3xl px-4">
        <h1 className="text-3xl font-bold">
          NextJs 15 + AuthJs + Prisma + Mongodb
        </h1>
        <p className="text-base">
          This is an example site to demonstrate how to use{' '}
          <CustomLink href="https://nextjs.authjs.dev">NextAuth.js</CustomLink>{' '}
          for authentication. Check out the{' '}
          <CustomLink href="/server">Server</CustomLink> examples to see how to
          secure pages and get session data.
        </p>
        <div className="mt-4 flex flex-col rounded-md bg-gray-100">
          <div className="rounded-t-md bg-gray-200 p-4 font-bold">
            Current Session
          </div>
          <pre className="whitespace-pre-wrap break-all px-4 py-6">
            {JSON.stringify(session, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  );
}
