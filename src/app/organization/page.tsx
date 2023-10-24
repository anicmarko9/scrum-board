'use client';

import { api } from '@Lib/api';
import KanbanBoard from '@Components/board/KanbanBoard';

function Page(): JSX.Element {
  return (
    <section className='flex w-full flex-col items-center justify-center space-y-4 overflow-x-hidden px-12 py-8 text-secondary'>
      <KanbanBoard />
    </section>
  );
}

export default api.withTRPC(Page);
