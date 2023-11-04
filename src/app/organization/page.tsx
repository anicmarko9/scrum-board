'use client';

import { api } from '@Lib/api';
import KanbanBoard from '@Components/board/KanbanBoard';
import { useState } from 'react';

function Page(): JSX.Element {
  const [name, setName] = useState<string>('');
  const [domain, setDomain] = useState<string>('');

  // const getMyOrganization = api.organization.get.useQuery();
  const createNewOrganization = api.organization.create.useMutation();
  const updateNewOrganization = api.organization.update.useMutation();
  const deleteNewOrganization = api.organization.delete.useMutation();

  const handleSubmitCreate = async (
    e: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    e.preventDefault();
    try {
      await createNewOrganization.mutateAsync({ name, domain });
      console.log('Organization created.');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className='flex w-full flex-col items-center justify-center space-y-4 overflow-x-hidden px-12 py-8 text-secondary'>
      <KanbanBoard />
    </section>
  );
}

export default api.withTRPC(Page);
