import Link from 'next/link';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

import { handleProviderLogin } from '@Utils/auth';

export default function SignUp(): JSX.Element {
  const { data: session, status } = useSession<boolean>();

  if (session && status === 'authenticated') redirect('/organization');

  return (
    <section className='flex flex-col items-center justify-center space-y-4 rounded-lg bg-lighterBG px-12 py-8 text-secondary'>
      <h2 className='w-64 p-2 text-center text-3xl'>Register</h2>
      <input
        type='email'
        className='w-64 rounded border border-secondary border-opacity-30 px-4 py-2'
        name='email'
        placeholder='Email'
      />
      <input
        type='password'
        className='w-64 rounded border border-secondary border-opacity-30 px-4 py-2'
        name='password'
        placeholder='Password'
      />
      <input
        type='password'
        className='w-64 rounded border border-secondary border-opacity-30 px-4 py-2'
        name='confirm_password'
        placeholder='Confirm Password'
      />
      <button
        type='submit'
        className='flex w-64 items-center justify-center rounded border border-white border-opacity-30 bg-black px-4 py-2 text-white'
      >
        Sign Up
      </button>
      <hr className='w-full border-black' />
      <button
        type='button'
        onClick={() => void handleProviderLogin('google')}
        className='flex w-64 items-center justify-center rounded border border-white border-opacity-30 bg-red-600 px-4 py-2 text-white'
      >
        <FaGoogle className='mr-3 h-5 w-5' />
        Sign Up with Google
      </button>
      <button
        type='button'
        onClick={() => void handleProviderLogin('github')}
        className='flex w-64 items-center justify-center rounded border border-white border-opacity-30 bg-gray-700 px-4 py-2 text-white'
      >
        <FaGithub className='mr-3 h-5 w-5' />
        Sign Up with GitHub
      </button>
      <nav className='flex w-64 items-center justify-evenly'>
        <span>Already have an account?</span>
        <Link className='text-accent' href='../login'>
          Sign In
        </Link>
      </nav>
    </section>
  );
}
