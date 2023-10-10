'use client';

import { SessionProvider } from 'next-auth/react';
import { type Session } from 'next-auth';
import { ReactNode } from 'react';

export default function AuthProvider({
  children,
  session,
}: {
  children: ReactNode;
  session: Session;
}): JSX.Element {
  return <SessionProvider session={session}>{children}</SessionProvider>;
}
