'use client';

import { api } from '@Lib/api';

function Organization(): JSX.Element {
  return (
    <section>
      <h1>Organization Page</h1>
    </section>
  );
}

export default api.withTRPC(Organization);
