'use client';

import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

import LandingPage from '@Components/LandingPage';
import Layout from '@Layout/Layout';
import KanbanBoard from '@/components/Board/KanbanBoard';

export default function Page(): JSX.Element {
  const { data: session, status } = useSession<boolean>();

  if (session && status === 'authenticated') redirect('/organization');

  return (
    <Layout>
      <LandingPage />
      <KanbanBoard />
    </Layout>
  );
}
