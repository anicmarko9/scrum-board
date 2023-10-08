'use client';

import { SessionProvider } from 'next-auth/react';
import { type ReactNode } from 'react';
import { type Session } from 'next-auth';

export default function AuthProvider({
  children,
  session,
}: {
  children: ReactNode;
  session: Session;
}): ReactNode {
  return <SessionProvider session={session}>{children}</SessionProvider>;
}
