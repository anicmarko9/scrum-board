import Link from 'next/link';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

import { handleProviderLogin } from '@Utils/auth';

export default function SignIn(): JSX.Element {
  const { data: session, status } = useSession<boolean>();

  if (session && status === 'authenticated') redirect('/organization');

  return (
    <section className='flex flex-col items-center justify-center space-y-4 rounded-lg bg-lighterBG px-12 py-8 text-secondary'>
      <h2 className='w-64 p-2 text-center text-3xl'>Login</h2>
      <input
        type='email'
        disabled
        className='w-64 rounded border border-secondary border-opacity-30 px-4 py-2'
        name='email'
        placeholder='Email'
      />
      <input
        type='password'
        disabled
        className='w-64 rounded border border-secondary border-opacity-30 px-4 py-2'
        name='password'
        placeholder='Password'
      />
      <button
        type='submit'
        disabled
        className='flex w-64 items-center justify-center rounded border border-white border-opacity-30 bg-black px-4 py-2 text-white'
      >
        Sign In
      </button>
      <hr className='w-full border-black' />
      <button
        type='button'
        onClick={() => void handleProviderLogin('google')}
        className='from-darkerRed to-lighterRed hover:border-customRed hover:text-customRed flex w-64 items-center justify-center rounded border border-white border-opacity-30 bg-gradient-to-r px-4 py-2 font-bold text-white transition duration-500 ease-in-out hover:bg-gradient-to-r hover:from-white hover:to-white'
      >
        <FaGithub className='mr-3 h-5 w-5' />
        <span>Sign In with Google</span>
      </button>
      <button
        type='button'
        onClick={() => void handleProviderLogin('github')}
        className='from-darkerBlue to-lighterBlue hover:border-customBlue hover:text-customBlue flex w-64 items-center justify-center rounded border border-white border-opacity-30 bg-gradient-to-r px-4 py-2 font-bold text-white transition duration-500 ease-in-out hover:bg-gradient-to-r hover:from-white hover:to-white'
      >
        <FaGoogle className='mr-3 h-5 w-5' />
        <span>Sign In with GitHub</span>
      </button>
      <nav className='flex w-64 items-center justify-evenly'>
        <span>Don&apos;t have an account?</span>
        <Link
          className='text-accent transition duration-500 ease-in-out hover:text-secondary'
          href='../sign-up'
        >
          Sign Up
        </Link>
      </nav>
    </section>
  );
}
