import { type Session, getServerSession } from 'next-auth';
import type {
  GetServerSidePropsContext,
  NextApiRequest,
  NextApiResponse,
} from 'next';

import { authOptions } from './auth.config';

// use this `auth()` inside of `getServerSideProps`
export const auth = (
  ...args:
    | [GetServerSidePropsContext['req'], GetServerSidePropsContext['res']]
    | [NextApiRequest, NextApiResponse]
    | []
): Promise<Session | null> => {
  return getServerSession(...args, authOptions);
};
