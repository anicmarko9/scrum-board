import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { type AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { FaArrowRight } from 'react-icons/fa';
import Issue from '@Components/Issues';

export default function LandingPage(): JSX.Element {
  const [showPopup, setShowPopup] = useState(false);
  const router: AppRouterInstance = useRouter();

  return (
    <>
      <h1 className='flex justify-center text-4xl font-bold'>
        Welcome to the Scrum Board
      </h1>
      <hr className='w-1/2 border-secondary' />
      <p className='flex w-1/2 self-center text-center text-xl'>
        Create new organization so you can get started with streamlining issues,
        creating scrum boards, sprints, and product roadmaps.
      </p>
      <button
        onClick={(): void => router.push('/organization')}
        className='flex w-fit items-center justify-center space-x-4 self-center rounded-full border border-secondary bg-secondary px-4 py-2 text-lg font-bold text-white transition duration-300 ease-in-out hover:bg-lighterBG hover:text-secondary'
      >
        <span className='block'>Get Started</span>
        <FaArrowRight size='24' />
      </button>

      <button
        onClick={(): void => setShowPopup(true)}
        className='flex w-fit items-center justify-center space-x-4 self-center rounded-full border border-secondary bg-secondary px-4 py-2 text-lg font-bold text-white transition duration-300 ease-in-out hover:bg-lighterBG hover:text-secondary' >
        <span className='block'>Create Issue</span>
      </button>
{showPopup && <Issue onClose={():void => setShowPopup(false)} />}
    </>
  );
}
