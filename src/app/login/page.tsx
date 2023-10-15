'use client';

import { api } from '@Lib/api';
import SignIn from '@Components/auth/SignIn';

function Page(): JSX.Element {
  return (
    <main className='flex min-h-screen items-center justify-center'>
      <SignIn />
    </main>
  );
}

export default api.withTRPC(Page);
