import { type NextAuthOptions } from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import { TypeORMAdapter } from '@auth/typeorm-adapter';

import { dataSourceConfig } from '@Database/datasource.config';

export const authOptions: NextAuthOptions = {
  // callbacks: {
  //   session({ session, user }) {
  //     if (session.user) session.user.id = user.id;
  //     return session;
  //   },
  // },
  adapter: TypeORMAdapter(dataSourceConfig),
  providers: [
    GoogleProvider({
      allowDangerousEmailAccountLinking: true,
      clientId: process.env.GOOGLE_ID || '',
      clientSecret: process.env.GOOGLE_SECRET || '',
    }),
    GithubProvider({
      allowDangerousEmailAccountLinking: true,
      clientId: process.env.GITHUB_ID || '',
      clientSecret: process.env.GITHUB_SECRET || '',
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
};
