import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <>
      <nav className='max-w-6xl mx-auto px-4 py-2 shadow-md'>
        <div className='flex justify-between'>
          <div>
            <Link href='/' passHref>
              <a className='flex items-center py-2 '>
                <Image src='/logo.png' alt='Logo' width={25} height={50} />
                <span className='font-semibold text-gray-500 text-lg ml-2'>
                  Ahmed Rizk
                </span>
              </a>
            </Link>
          </div>
          <ul className='flex items-center space-x-7'>
            <li>
              <Link href='/' passHref>
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href='/portfolio' passHref>
                <a>Portfolio</a>
              </Link>
            </li>
            <li>
              <Link href='/blog' passHref>
                <a>Blog</a>
              </Link>
            </li>
          </ul>

          <ul className='flex items-center space-x-7'>
            <li>
              <Link href='/about' passHref>
                <a>About</a>
              </Link>
            </li>
            <li>
              <Link href='/contact' passHref>
                <a>Contact</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
