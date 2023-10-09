// This Layout will be used only for the Landing Page when user is not logged in
import { ReactNode } from 'react';

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
      <main>{children}</main>
      <Footer />
    </>
  );
}
