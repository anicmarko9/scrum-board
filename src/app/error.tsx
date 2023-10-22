'use client';

import { useEffect } from 'react';

import Layout from '@Layout/Layout';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}): JSX.Element {
  useEffect((): void => {
    console.error(error);
  }, [error]);

  return (
    <Layout>
      <h2 className='text-4xl font-bold'>Something went wrong!</h2>
      <button
        onClick={(): void => reset()}
        className='w-fit rounded-full border border-secondary bg-secondary px-4 py-2 text-lg font-bold text-white transition duration-300 ease-in-out hover:bg-lighterBG hover:text-secondary'
      >
        Try again
      </button>
    </Layout>
  );
}
