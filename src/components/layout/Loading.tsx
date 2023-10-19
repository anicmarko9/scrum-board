import React from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const Loading = () => {
  return (
    <div className='mx-auto flex w-2/3 flex-col justify-center'>
      <button type='button' className='... bg-indigo-500' disabled>
        <AiOutlineLoading3Quarters className=' mx-auto h-[150px] w-[150px] animate-spin'></AiOutlineLoading3Quarters>
        Loading...
      </button>
    </div>
  );
};

export default Loading;
