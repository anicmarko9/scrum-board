'use client';

import { signOut } from 'next-auth/react';

import { api } from '@Lib/api';
import KanbanBoard from '@Components/board/KanbanBoard';

function Page(): JSX.Element {
  return (
    <section className='flex w-full flex-col items-center justify-center space-y-4 px-12 py-8 text-secondary'>
      <KanbanBoard />
      <button
        type='button'
        onClick={() => void signOut({ callbackUrl: '/' })}
        className='flex w-64 items-center justify-center rounded border border-white border-opacity-30 bg-red-600 px-4 py-2 text-white'
      >
        Sign Out
      </button>
    </section>
  );
}

export default api.withTRPC(Page);
