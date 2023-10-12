'use client';

import { api } from '@Lib/api';
import SignIn from '@Components/auth/SignIn';

function Page(): JSX.Element {
  return (
    <main>
      <SignIn />
    </main>
  );
}

export default api.withTRPC(Page);
