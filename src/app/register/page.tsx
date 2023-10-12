import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const page = () => {
  return (
    <div className='bg-grey-lighter flex min-h-screen flex-col'>
      <div className='container mx-auto flex max-w-sm flex-1 flex-col items-center justify-center px-2'>
        <div className='w-full rounded bg-white px-6 py-8 text-black shadow-md'>
          <h1 className='mb-8 text-center text-3xl'>Sign up</h1>

          <input
            type='text'
            className='border-grey-light mb-4 block w-full rounded border p-3'
            name='email'
            placeholder='Email'
          />

          <input
            type='password'
            className='border-grey-light mb-4 block w-full rounded border p-3'
            name='password'
            placeholder='Password'
          />
          <input
            type='password'
            className='border-grey-light mb-4 block w-full rounded border p-3'
            name='confirm_password'
            placeholder='Confirm Password'
          />

          <button
            type='button'
            className='my-2 flex w-full items-center justify-center rounded-lg  bg-red-600 px-4 py-2 text-center text-base font-semibold text-white shadow-md transition duration-200 ease-in hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2  focus:ring-offset-red-200 '
          >
            <FaGoogle size={'2em'} className='mx-3' />
            Sign in with Google
          </button>

          <button
            type='button'
            className='my-2 flex w-full items-center justify-center rounded-lg  bg-gray-600 px-4 py-2 text-center text-base font-semibold text-white shadow-md transition duration-200 ease-in hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2  focus:ring-offset-gray-200 '
          >
            <FaGithub size={'2em'} className='mx-3' />
            Sign in with GitHub
          </button>

          <button
            type='submit'
            className='hover:bg-green-dark my-1 w-full rounded bg-black py-3 text-center text-white focus:outline-none'
          >
            Create Account
          </button>
        </div>

        <div className='text-grey-dark mt-6'>
          Already have an account?
          <a
            className='border-blue text-blue border-b no-underline'
            href='../login/'
          >
            Log in
          </a>
          .
        </div>
      </div>
    </div>
  );
};

export default page;
