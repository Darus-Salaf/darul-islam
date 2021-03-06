import { Fragment } from 'react'
import Working from '../Home/Working'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import Link from 'next/link'

const navigation = [
  { name: 'প্রজেক্ট', href: '/projects' },
  { name: 'ব্লগ', href: '/' },
  { name: 'আমাদের সম্পর্কে', href: '/' },
  { name: 'সাহায্য', href: '/' },
]

export default function Navigation() {
  return <>
    <Working />
    <Popover>
      <div className="z-10 relative py-6 px-4 sm:px-6 lg:px-8 sm:mb-8 shadow-lg ">
        <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
          <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
            <div className="flex items-center justify-between w-full md:w-auto">
              <Link href="/">
                <a className='flex items-center font-bold text-primary-100 text-lg sm:text-2xl'>
                  <img
                    alt='logo'
                    className="h-12 sm:h-16 lg:h-24"
                    src='https://www.darulislam.foundation/images/darulislam300.png'
                  />
                  <span className="text-primary">দারুল ইসলাম ফউন্ডেশন</span>
                </a>
              </Link>
              <div className="-mr-2 flex items-center md:hidden">
                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary">
                  <span className="sr-only">Open main menu</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
          </div>
          <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
              >
                <a
                  className="font-medium text-gray-500 hover:text-primary"
                >
                  {item.name}
                </a>
              </Link>
            ))}
          </div>
        </nav>
      </div>

      <Transition
        as={Fragment}
        enter="duration-150 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute z-20 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
            <div className="px-5 pt-4 flex items-center justify-between">
              <div>
              <Link href="/">
                <a className='flex items-center font-bold text-primary text-md'>
                  <img
                    alt='logo'
                    className="h-12"
                    src='https://www.darulislam.foundation/images/darulislam300.png'
                  />
                  <span className="">দারুল ইসলাম ফউন্ডেশন</span>
                </a>
              </Link>
              </div>
              <div className="-mr-2">
                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary">
                  <span className="sr-only">Close main menu</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                >
                  <a
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-100"
                  >
                    {item.name}
                  </a></Link>
              ))}
            </div>
            <a
              href="#"
              className="block w-full px-5 py-3 text-center font-medium text-primary bg-gray-50 hover:bg-gray-100"
            >
              Log in
            </a>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  </>
}
