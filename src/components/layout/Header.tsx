import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { type AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

export default function Header(): JSX.Element {
  const router: AppRouterInstance = useRouter();

  return (
    <header>
      <nav className='flex items-center justify-between border-gray-200 bg-gradient-to-r from-lighterBG via-darkerBG to-lighterBG px-4 py-2 text-secondary shadow-sm lg:px-16'>
        <figure className='flex items-center'>
          <Image src='/logo-2.png' alt='Logo' width={40} height={40} />
          <figcaption className='ml-3 whitespace-nowrap text-xl font-semibold'>
            Scrum Board
          </figcaption>
        </figure>
        <ul className='hidden font-medium lg:flex lg:space-x-8'>
          <li className='p-3 transition duration-300 ease-in-out hover:text-gray-50'>
            <Link href='#'>Home</Link>
          </li>
          <li className='p-3 transition duration-300 ease-in-out hover:text-gray-50'>
            <Link href='#'>Company</Link>
          </li>
          <li className='p-3 transition duration-300 ease-in-out hover:text-gray-50'>
            <Link href='#'>Marketplace</Link>
          </li>
          <li className='p-3 transition duration-300 ease-in-out hover:text-gray-50'>
            <Link href='#'>Features</Link>
          </li>
          <li className='p-3 transition duration-300 ease-in-out hover:text-gray-50'>
            <Link href='#'>Team</Link>
          </li>
          <li className='p-3 transition duration-300 ease-in-out hover:text-gray-50'>
            <Link href='#'>Contact</Link>
          </li>
        </ul>
        <ul className='flex items-center text-white'>
          <li
            onClick={(): void => router.push('/login')}
            className='mr-2 cursor-pointer rounded-full border bg-secondary px-4 py-2 text-sm font-bold transition duration-300 ease-in-out hover:border-secondary hover:bg-lighterBG hover:text-secondary'
          >
            Log in
          </li>
          <li
            onClick={(): void => router.push('/sign-up')}
            className='cursor-pointer rounded-full border bg-secondary px-4 py-2 text-sm font-bold transition duration-300 ease-in-out hover:border-secondary hover:bg-lighterBG hover:text-secondary'
          >
            Sign up
          </li>
        </ul>
      </nav>
    </header>
  );
}
