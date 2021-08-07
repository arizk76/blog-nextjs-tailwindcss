import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <>
      <footer className='max-w-6xl mx-auto px-4 py-2'>
        <div className=' flex justify-center'>
          <a
            className='flex items-center'
            href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
            target='_blank'
            rel='noopener noreferrer'
          >
            Designed by Ahmed Rizk | Powered by
            <span className='ml-3'>
              <Image
                src='/vercel.svg'
                alt='Vercel Logo'
                width={72}
                height={16}
              />
            </span>
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
