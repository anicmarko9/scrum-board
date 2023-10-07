import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './globals.css';
import Provider from '@Context/ClientProvider';

const inter = Inter({ subsets: ['latin'] });

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

export default function RootLayout({
  children,
  session,
}: {
  children: React.ReactNode;
  session: any;
}): React.ReactNode {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Provider session={session}>{children}</Provider>
      </body>
    </html>
  );
}
