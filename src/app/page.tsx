'use client';

import LandingPage from '@/components/LandingPage';
import Layout from '@Layout/Layout';
import { api } from '@Lib/api';

function Page(): JSX.Element {
  const hello = api.hello.useQuery();

  const data = hello.data;

  return (
    <Layout>
      <h1>{data}</h1>
      <LandingPage />
    </Layout>
  );
}

export default api.withTRPC(Page);
