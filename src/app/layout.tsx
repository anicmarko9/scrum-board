import { type ReactNode } from 'react';
import { type Metadata } from 'next';
import { type Session } from 'next-auth';

import './globals.css';
import AuthProvider from '@Client/AuthProvider';

export default function RootLayout({
  children,
  session,
}: {
  children: ReactNode;
  session: Session;
}): JSX.Element {
  return (
    <html lang='en'>
      <body className='bg-darkerBG'>
        <AuthProvider session={session}>{children}</AuthProvider>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: 'Scrum Board',
  applicationName: 'Scrum Board',
  keywords: ['scrum', 'board', 'agile', 'roadmap', 'sprint', 'issue'],
  description:
    'Streamline issues, sprints, and product roadmaps with this app.',
  viewport: { width: 'device-width', initialScale: 1 },
  themeColor: '#f9f3f1',
  creator: 'Marko Anić',
  authors: [{ name: 'Marko Anić', url: 'https://github.com/anicmarko9' }],
  generator: 'Next.js',
  publisher: 'Vercel',
};
