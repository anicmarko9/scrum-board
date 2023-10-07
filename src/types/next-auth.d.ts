import { type DefaultSession } from 'next-auth';

// this improves intellisense for `session.user.id`
declare module 'next-auth' {
  interface Session {
    user?: {
      id: string;
    } & DefaultSession['user'];
  }
}
