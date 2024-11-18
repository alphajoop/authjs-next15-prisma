'use client';
import CustomLink from '@/components/CustomLink';
import { useEffect, useState } from 'react';

export default function ApiExample() {
  const [data, setData] = useState();
  useEffect(() => {
    (async () => {
      const res = await fetch('/api/protected');
      const json = await res.json();
      setData(json);
    })();
  }, []);
  return (
    <div className="mt-16 bg-white px-4 py-12 font-geistsans text-zinc-950 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-3xl px-4">
        <h1 className="text-3xl font-bold">Route Handler Usage</h1>
        <p className="text-base">
          This page fetches data from an API{' '}
          <CustomLink href="https://nextjs.org/docs/app/building-your-application/routing/route-handlers">
            Route Handler
          </CustomLink>{' '}
          The API is protected using the universal{' '}
          <CustomLink href="https://nextjs.authjs.dev#auth">
            <code>auth()</code>
          </CustomLink>{' '}
          method.
        </p>
        <div className="mt-4 flex flex-col rounded-md bg-gray-100">
          <div className="rounded-t-md bg-gray-200 p-4 font-bold">
            Data from API Route
          </div>
          <pre className="whitespace-pre-wrap break-all px-4 py-6">
            {JSON.stringify(data, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  );
}
