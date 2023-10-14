import React from 'react';

type Props = {};

const LandingPage = (props: Props) => {
  return (
    <div className='h-100 bg-teal-lightest flex w-full items-center justify-center font-sans'>
      <div className='m-4 w-full rounded bg-primaryDarker p-6 shadow lg:w-3/4 lg:max-w-lg'>
        <div className='mb-4'>
          <h1 className='text-grey-darkest'>Todo List</h1>
          <div className='mt-4 flex'>
            <input
              className='text-grey-darker mr-4 w-full appearance-none rounded border px-3 py-2 shadow'
              placeholder='Add Todo'
            />
            <button className='flex-no-shrink text-teal border-teal hover:bg-teal rounded border-2 p-2 hover:text-white'>
              Add
            </button>
          </div>
        </div>
        <div>
          <div className='mb-4 flex items-center'>
            <p className='text-grey-darkest w-full'>
              Add another component to Tailwind Components
            </p>
            <button className='flex-no-shrink text-green border-green hover:bg-green ml-4 mr-2 rounded border-2 p-2 hover:text-white'>
              Done
            </button>
            <button className='flex-no-shrink text-red border-red hover:bg-red ml-2 rounded border-2 p-2 hover:text-white'>
              Remove
            </button>
          </div>
          <div className='mb-4 flex items-center'>
            <p className='text-green w-full line-through'>
              Submit Todo App Component to Tailwind Components
            </p>
            <button className='flex-no-shrink text-grey border-grey hover:bg-grey ml-4 mr-2 rounded border-2 p-2 hover:text-white'>
              Not Done
            </button>
            <button className='flex-no-shrink text-red border-red hover:bg-red ml-2 rounded border-2 p-2 hover:text-white'>
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LandingPage;
