import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div>
      <nav className='bg-black py-5'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between h-16'>
            <div className='flex items-center'>
              <div className='flex-shrink-0'>
                <Image src='/logo.png' alt='logo' width={100} height={100} />
              </div>
              <div className='hidden md:block text-center w-full items-center'>
                <div className=' ml-20 flex items-baseline space-x-4'>
                  <Link
                    href='#'
                    className='text-white px-4 py-2 rounded-md text-sm font-medium'
                  >
                    Home
                  </Link>

                  <Link
                    href='#'
                    className='text-white px-4 py-2 rounded-md text-sm font-medium'
                  >
                    About Us
                  </Link>

                  <Link
                    href='#'
                    className='text-white px-4 py-2 rounded-md text-sm font-medium'
                  >
                    Services
                  </Link>

                  <Link
                    href='#'
                    className='text-white px-4 py-2 rounded-md text-sm font-medium'
                  >
                    Pricing Plans
                  </Link>

                  <Link
                    href='#'
                    className='text-white px-4 py-2 rounded-md text-sm font-medium'
                  >
                    Testimonials
                  </Link>

                  <Link
                    href='#'
                    className='text-white px-4 py-2 rounded-md text-sm font-medium'
                  >
                    FAQ
                  </Link>

                  <Link
                    href='#'
                    className='text-white px-4 py-2 rounded-md text-sm font-medium'
                  >
                    Team Members
                  </Link>

                  <Link
                    href='#'
                    className='text-white px-4 py-2 rounded-md text-sm font-medium'
                  >
                    Contact Us
                  </Link>

                  <Link
                    href='#'
                    className='text-white px-4 py-2 rounded-md text-sm font-medium'
                  >
                    Blog
                  </Link>
                </div>
              </div>
            </div>
            <div className='-mr-2 md:hidden'>
              <button
                type='button'
                className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white'
              >
                <svg
                  className='h-6 w-6'
                  stroke='currentColor'
                  fill='none'
                  viewBox='0 0 24 24'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    strokeWidth='2'
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* <!-- This is the dropdown menu that will appear when the hamburger menu is clicked --> */}
        <div className='hidden md:hidden'>
          <div className='px-2 pt-2 pb-3'>
            {/* <!-- Your nav links go here --> */}
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header
