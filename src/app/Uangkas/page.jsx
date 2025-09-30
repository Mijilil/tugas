import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <>
    <nav className='bg-black'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex items-center justify-between h-16'>
                <div className='flex items-center'>
                    <div className='flex items-center'>
                        <div className='flex-shrink-0'>
                            <a href="/" className="text-white">
                            Logo
                            </a>
                            </div>
                        </div>
                    </div>
                    <div className='hidden md:block'>
                        <div className='ml-4 flex items-center'></div>
                    </div>
                </div>
            </div>
    </nav>
    <nav>
      <div className='Logo'>
        <h1>ninja list</h1>
      </div>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/ninjas">Ninja listing</Link>
    </nav>
    </>
  );
};

export default Navbar;