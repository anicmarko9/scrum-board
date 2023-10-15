import { signIn } from 'next-auth/react';

export const handleProviderLogin = async (provider: string): Promise<void> => {
  await signIn(provider, { callbackUrl: '/organization' });
};
