'use client';

import Layout from '@Layout/Layout';
import { api } from '@Lib/api';

function Home(): JSX.Element {
  const hello = api.hello.useQuery();

  const data = hello.data;

  return (
    <Layout>
      <h1>{data}</h1>
    </Layout>
  );
}

export default api.withTRPC(Home);
