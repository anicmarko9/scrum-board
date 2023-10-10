export default function SideMenu(): JSX.Element {
  return (
    <div>
      <button
        data-drawer-target='sidebar-multi-level-sidebar'
        data-drawer-toggle='sidebar-multi-level-sidebar'
        aria-controls='sidebar-multi-level-sidebar'
        type='button'
        className='ml-3 mt-2 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 sm:hidden'
      >
        <span className='sr-only'>Open sidebar</span>
        <svg
          className='h-6 w-6'
          aria-hidden='true'
          fill='currentColor'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            clipRule='evenodd'
            fillRule='evenodd'
            d='M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z'
          ></path>
        </svg>
      </button>

      <aside
        id='sidebar-multi-level-sidebar'
        className='fixed left-0 top-0 z-40 h-screen w-64 -translate-x-full transition-transform sm:translate-x-0'
        aria-label='Sidebar'
      >
        <div className='h-full overflow-y-auto bg-gray-50 px-3 py-4 dark:bg-white'>
          <ul className=' space-y-2 font-medium'>
            <li className='flex items-center justify-between'>
              <button className='rounded-full bg-black p-4 text-white'>
                ORG
              </button>
              <button className='rounded-full bg-black p-4 text-white'>
                USER
              </button>
            </li>
          </ul>
          <div className='flex flex-col items-center justify-center'>
            <button className='w-9/10 fixed bottom-0   bg-black p-4 text-white'>
              +CREATE NEW BOARD
            </button>
          </div>
        </div>
      </aside>
    </div>
  );
}
