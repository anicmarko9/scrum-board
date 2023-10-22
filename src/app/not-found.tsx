'use client';

import { useRouter } from 'next/navigation';
import { type AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

import Layout from '@Layout/Layout';

export default function NotFound(): JSX.Element {
  const router: AppRouterInstance = useRouter();

  return (
    <Layout>
      <h2 className='text-4xl font-bold'>404 Page Not Found</h2>
      <button
        onClick={(): void => router.push('/')}
        className='w-fit rounded-full border border-secondary bg-secondary px-4 py-2 text-lg font-bold text-white transition duration-300 ease-in-out hover:bg-lighterBG hover:text-secondary'
      >
        Return Home
      </button>
    </Layout>
  );
}
