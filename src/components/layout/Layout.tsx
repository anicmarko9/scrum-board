// This Layout will be used only for the Landing Page when user is not logged in
import { type ReactNode } from 'react';

import Header from './Header';
import Footer from './Footer';

export default function Layout({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  return (
    <>
      <Header />
      <main className='flex h-[600px] flex-col items-center justify-center space-y-4 p-4 text-secondary sm:space-y-8 sm:p-8 md:space-y-12 md:p-12 lg:p-16 xl:p-20 2xl:p-24'>
        {children}
      </main>
      <Footer />
    </>
  );
}
