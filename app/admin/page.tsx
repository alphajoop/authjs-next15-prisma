import { auth } from '@/auth';

export default async function Admin() {
  const session = await auth();

  return (
    <div className="mt-16 bg-white px-4 py-12 font-geistsans text-zinc-950 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-3xl px-4">
        <h1 className="text-3xl font-bold">Admin page</h1>
        <p className="text-base">
          {session?.user?.role === 'ADMIN'
            ? 'You are an admin, welcome!'
            : 'You are not authorized to view this page!'}
        </p>
      </div>
    </div>
  );
}
