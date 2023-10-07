import NextAuth from 'next-auth';

import { authOptions } from '@Auth/auth.config';

export default NextAuth(authOptions);
