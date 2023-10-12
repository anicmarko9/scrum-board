import Link from 'next/link';
import { FaGithub, FaGoogle } from 'react-icons/fa';

export default function SignUp(): JSX.Element {
  return (
    <section className='flex flex-col items-center justify-center space-y-4 rounded-lg bg-lighterBG p-4 text-secondary'>
      <h2 className='w-64 p-2 text-center text-3xl'>Sign Up</h2>
      <input
        type='email'
        className='w-64 rounded border border-secondary border-opacity-30 px-2 py-1'
        name='email'
        placeholder='Email'
      />
      <input
        type='password'
        className='w-64 rounded border border-secondary border-opacity-30 px-2 py-1'
        name='password'
        placeholder='Password'
      />
      <input
        type='password'
        className='w-64 rounded border border-secondary border-opacity-30 px-2 py-1'
        name='confirm_password'
        placeholder='Confirm Password'
      />
      <button
        type='button'
        className='flex w-64 items-center justify-center rounded border border-white border-opacity-30 bg-red-600 px-2 py-1 text-white'
      >
        <FaGoogle className='mr-3 h-5 w-5' />
        Sign In with Google
      </button>
      <button
        type='button'
        className='flex w-64 items-center justify-center rounded border border-white border-opacity-30 bg-gray-700 px-2 py-1 text-white'
      >
        <FaGithub className='mr-3 h-5 w-5' />
        Sign In with GitHub
      </button>
      <button
        type='submit'
        className='flex w-64 items-center justify-center rounded border border-white border-opacity-30 bg-black px-2 py-1 text-white'
      >
        Create Account
      </button>
      <nav className='flex w-64 items-center justify-evenly'>
        <span>Already have an account?</span>
        <Link className='text-accent' href='../signin'>
          Sign In
        </Link>
      </nav>
    </section>
  );
}
