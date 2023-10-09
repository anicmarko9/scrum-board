import { ReactNode } from 'react';

import SideMenu from '@Layout/SideMenu';

export default function OrganizationLayout({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  return (
    <main>
      <SideMenu />
      {children}
    </main>
  );
}

// this is something like:
// <main>
//   <aside>
//     content...
//   </aside>
//   <section>
//     content...
//   </section>
// </main>
