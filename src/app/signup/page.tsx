'use client';

import { api } from '@Lib/api';
import SignUp from '@Components/auth/SignUp';

function Page(): JSX.Element {
  return (
    <main className='flex min-h-screen items-center justify-center'>
      <SignUp />
    </main>
  );
}

export default api.withTRPC(Page);
