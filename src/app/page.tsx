'use client';

import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

import Layout from '@Layout/Layout';
import LandingPage from '@Components/LandingPage';
import Loading from '@/components/layout/Loading';

export default function Page(): JSX.Element {
  const { data: session, status } = useSession<boolean>();

  if (session && status === 'authenticated') redirect('/organization');

  return (
    <Layout>
      <Loading />
      <LandingPage />
    </Layout>
  );
}
