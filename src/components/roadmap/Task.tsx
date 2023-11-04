import React from 'react';
import { FaCheck } from 'react-icons/fa';

type Props = {
  status: string;
  date: string;
};

export default function Task(props: Props): JSX.Element {
  const { status, date } = props;

  return (
    <div className='flex md:contents'>
      <div className='relative col-start-2 col-end-4 mr-10 md:mx-auto'>
        <div className='flex h-full w-6 items-center justify-center'>
          <div className='pointer-events-none h-full w-1 bg-green-500'></div>
        </div>
        <div className='absolute top-1/2 -mt-3 h-6 w-6 rounded-full bg-green-500 text-center shadow'>
          <FaCheck className='mx-auto'></FaCheck>
        </div>
      </div>
      <section className='col-start-4 col-end-12 my-4 mr-auto w-full rounded-xl bg-green-500 p-4 shadow-md'>
        <h3 className='text-lg'>{status}</h3>
        <time dateTime={date}>{date}</time>
      </section>
    </div>
  );
}
