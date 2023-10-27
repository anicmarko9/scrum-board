import React from 'react';

const Roadmap = () => {
  return (
    <div className='mt-4 p-4'>
      <h1 className='mb-6 text-center text-4xl font-semibold'>
        Roadmap status
      </h1>
      <div className='container'>
        <div className='flex grid-cols-12 flex-col text-gray-50 md:grid'>
          <div className='flex md:contents'>
            <div className='relative col-start-2 col-end-4 mr-10 md:mx-auto'>
              <div className='flex h-full w-6 items-center justify-center'>
                <div className='pointer-events-none h-full w-1 bg-green-500'></div>
              </div>
              <div className='absolute top-1/2 -mt-3 h-6 w-6 rounded-full bg-green-500 text-center shadow'>
                <i className='fas fa-check-circle text-white'></i>
              </div>
            </div>
            <div className='col-start-4 col-end-12 my-4 mr-auto w-full rounded-xl bg-green-500 p-4 shadow-md'>
              <h3 className='mb-1 text-lg font-semibold'>Package Booked</h3>
              <p className='w-full text-justify leading-tight'>
                21 July 2021, 04:30 PM
              </p>
            </div>
          </div>

          <div className='flex md:contents'>
            <div className='relative col-start-2 col-end-4 mr-10 md:mx-auto'>
              <div className='flex h-full w-6 items-center justify-center'>
                <div className='pointer-events-none h-full w-1 bg-green-500'></div>
              </div>
              <div className='absolute top-1/2 -mt-3 h-6 w-6 rounded-full bg-green-500 text-center shadow'>
                <i className='fas fa-check-circle text-white'></i>
              </div>
            </div>
            <div className='col-start-4 col-end-12 my-4 mr-auto w-full rounded-xl bg-green-500 p-4 shadow-md'>
              <h3 className='mb-1 text-lg font-semibold'>Out for Delivery</h3>
              <p className='text-justify leading-tight'>
                22 July 2021, 01:00 PM
              </p>
            </div>
          </div>

          <div className='flex md:contents'>
            <div className='relative col-start-2 col-end-4 mr-10 md:mx-auto'>
              <div className='flex h-full w-6 items-center justify-center'>
                <div className='pointer-events-none h-full w-1 bg-red-500'></div>
              </div>
              <div className='absolute top-1/2 -mt-3 h-6 w-6 rounded-full bg-red-500 text-center shadow'>
                <i className='fas fa-times-circle text-white'></i>
              </div>
            </div>
            <div className='col-start-4 col-end-12 my-4 mr-auto w-full rounded-xl bg-red-500 p-4 shadow-md'>
              <h3 className='mb-1 text-lg font-semibold text-gray-50'>
                Cancelled
              </h3>
              <p className='text-justify leading-tight'>
                Customer cancelled the order
              </p>
            </div>
          </div>

          <div className='flex md:contents'>
            <div className='relative col-start-2 col-end-4 mr-10 md:mx-auto'>
              <div className='flex h-full w-6 items-center justify-center'>
                <div className='pointer-events-none h-full w-1 bg-gray-300'></div>
              </div>
              <div className='absolute top-1/2 -mt-3 h-6 w-6 rounded-full bg-gray-300 text-center shadow'>
                <i className='fas fa-exclamation-circle text-gray-400'></i>
              </div>
            </div>
            <div className='col-start-4 col-end-12 my-4 mr-auto w-full rounded-xl bg-gray-300 p-4 shadow-md'>
              <h3 className='mb-1 text-lg font-semibold text-gray-400'>
                Delivered
              </h3>
              <p className='text-justify leading-tight'></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
