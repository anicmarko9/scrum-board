'use client';

import { ReactNode } from 'react';

import SideMenu from '@Layout/SideMenu';

export default function OrganizationLayout({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  return (
    <main className='flex'>
      <SideMenu />
      {children}
    </main>
  );
}
