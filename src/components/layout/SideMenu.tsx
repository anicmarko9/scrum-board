import Link from 'next/link';
import { FaPlus } from 'react-icons/fa';

export default function SideMenu(): JSX.Element {
  return (
    <aside className='sticky left-0 top-0 flex h-screen w-[200px] flex-col bg-gray-50 p-4 lg:w-[300px]'>
      <nav className='flex w-full items-center justify-between text-xs lg:text-base'>
        <Link
          href='/organization'
          className='flex h-12 w-12 items-center justify-center rounded-full bg-black uppercase text-white'
        >
          Org
        </Link>
        <Link
          href='/me'
          className='flex h-12 w-12 items-center justify-center rounded-full bg-black uppercase text-white'
        >
          User
        </Link>
      </nav>
      <ul className='flex w-full flex-col items-center justify-center space-y-2 py-8 text-xs uppercase text-white lg:text-base'>
        <li className='flex w-full items-center justify-center rounded-md bg-black p-4'>
          Board
        </li>
        <li className='flex w-full items-center justify-center rounded-md bg-black p-4'>
          Board
        </li>
        <li className='flex w-full items-center justify-center rounded-md bg-black p-4'>
          Board
        </li>
        <li className='flex w-full items-center justify-center rounded-md bg-black p-4'>
          Board
        </li>
        <li className='flex w-full items-center justify-center rounded-md bg-black p-4'>
          Board
        </li>
      </ul>
      <button className='mt-auto flex w-full items-center justify-center gap-2 rounded-md bg-black p-4 text-xs uppercase text-white lg:text-base'>
        <FaPlus /> Create New Board
      </button>
    </aside>
  );
}
