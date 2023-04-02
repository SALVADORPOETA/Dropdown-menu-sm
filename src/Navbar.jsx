import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Navbar = () => {
    
    const [nav, setNav] = useState(false);
    
    const handleNav = () => {
        setNav(!nav);
        };
        
    return (
        <div className='w-full h-20 flex justify-between items-center px-8 text-white' >
            <h1 className='text-2xl font-bold text-[#00df9a]' >
                Salvador Martinez
            </h1>
            <ul className='hidden md:flex items-center' >
                <li className='p-4' >
                    <Menu as="div" className="relative inline-block text-left">
                        <Menu.Button>
                            Services
                        </Menu.Button>
                        <Transition 
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items className="absolute left-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg focus:outline-none">
                                <div className='py-1' >
                                    <Menu.Item>
                                        {({ active }) => (
                                        <a
                                        href="#"
                                        className={classNames(
                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                            'block px-4 py-2 text-sm'
                                        )}
                                        >
                                        For Companies
                                        </a>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                        <a
                                        href="#"
                                        className={classNames(
                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                            'block px-4 py-2 text-sm'
                                        )}
                                        >
                                        For Investors
                                        </a>
                                        )}
                                    </Menu.Item>
                                </div>
                            </Menu.Items>
                        </Transition>
                    </Menu>
                </li>
                <li className='p-4' >
                    <Menu as="div" className="relative inline-block text-left">
                        <Menu.Button>
                            Banking
                        </Menu.Button>
                        <Transition 
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items className="absolute left-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg focus:outline-none">
                                <div className='py-1' >
                                    <Menu.Item>
                                        {({ active }) => (
                                        <a
                                        href="#"
                                        className={classNames(
                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                            'block px-4 py-2 text-sm'
                                        )}
                                        >
                                        Market
                                        </a>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                        <a
                                        href="#"
                                        className={classNames(
                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                            'block px-4 py-2 text-sm'
                                        )}
                                        >
                                        Assets
                                        </a>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                        <a
                                        href="#"
                                        className={classNames(
                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                            'block px-4 py-2 text-sm'
                                        )}
                                        >
                                        Insurance
                                        </a>
                                        )}
                                    </Menu.Item>
                                </div>
                            </Menu.Items>
                        </Transition>
                    </Menu>
                </li>
                <li className='p-4' >
                <Menu as="div" className="relative inline-block text-left">
                        <Menu.Button>
                            Company
                        </Menu.Button>
                        <Transition 
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg focus:outline-none">
                                <div className='py-1' >
                                    <Menu.Item>
                                        {({ active }) => (
                                        <a
                                        href="#"
                                        className={classNames(
                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                            'block px-4 py-2 text-sm'
                                        )}
                                        >
                                        Info
                                        </a>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                        <a
                                        href="#"
                                        className={classNames(
                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                            'block px-4 py-2 text-sm'
                                        )}
                                        >
                                        History
                                        </a>
                                        )}
                                    </Menu.Item>
                                </div>
                            </Menu.Items>
                        </Transition>
                    </Menu>
                </li>
                <li className='p-4' >
                    <Menu as="div" className="relative inline-block text-left">
                        <Menu.Button>
                            Resources
                        </Menu.Button>
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="py-1">
                                <Menu.Item>
                                {({ active }) => (
                                    <a
                                    href="#"
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm'
                                    )}
                                    >
                                    Edit
                                    </a>
                                )}
                                </Menu.Item>
                                <Menu.Item>
                                {({ active }) => (
                                    <a
                                    href="#"
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm'
                                    )}
                                    >
                                    Duplicate
                                    </a>
                                )}
                                </Menu.Item>
                            </div>
                            <div className="py-1">
                                <Menu.Item>
                                {({ active }) => (
                                    <a
                                    href="#"
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm'
                                    )}
                                    >
                                    Archive
                                    </a>
                                )}
                                </Menu.Item>
                                <Menu.Item>
                                {({ active }) => (
                                    <a
                                    href="#"
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm'
                                    )}
                                    >
                                    Move
                                    </a>
                                )}
                                </Menu.Item>
                            </div>
                            <div className="py-1">
                                <Menu.Item>
                                {({ active }) => (
                                    <a
                                    href="#"
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm'
                                    )}
                                    >
                                    Share
                                    </a>
                                )}
                                </Menu.Item>
                                    <Menu.Item>
                                    {({ active }) => (
                                        <a
                                        href="#"
                                        className={classNames(
                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                            'block px-4 py-2 text-sm'
                                        )}
                                        >
                                        Add to favorites
                                        </a>
                                    )}
                                    </Menu.Item>
                                </div>
                                <div className="py-1">
                                    <Menu.Item>
                                    {({ active }) => (
                                        <a
                                        href="#"
                                        className={classNames(
                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                            'block px-4 py-2 text-sm'
                                        )}
                                        >
                                        Delete
                                        </a>
                                    )}
                                    </Menu.Item>
                                </div>
                            </Menu.Items>
                        </Transition>
                    </Menu>
                </li>
                <li className='p-4' >
                    <Menu as="div" className="relative inline-block text-left">
                        <div>
                            <Menu.Button className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
                            Account
                            <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                            </Menu.Button>
                        </div>
                        <Transition 
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg focus:outline-none">
                                <div className='py-1' >
                                    <Menu.Item>
                                        {({ active }) => (
                                        <a
                                        href="#"
                                        className={classNames(
                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                            'block px-4 py-2 text-sm'
                                        )}
                                        >
                                        Log In
                                        </a>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                        <a
                                        href="#"
                                        className={classNames(
                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                            'block px-4 py-2 text-sm'
                                        )}
                                        >
                                        Register
                                        </a>
                                        )}
                                    </Menu.Item>
                                </div>
                            </Menu.Items>
                        </Transition>
                    </Menu>
                </li>
            </ul>
            <div 
                onClick={handleNav} 
                className='md:hidden cursor-pointer' >
                <AiOutlineMenu size={25} />
            </div>
            <div 
                className={
                    nav 
                        ? 'fixed left-0 top-0 w[75%] sm:w-[60%] md:w-[45%] h-screen bg-gray-900 p-10 ease-in duration-500 z-10' 
                        : 'fixed left-[-100%] top-0 h-screen p-10 ease-in duration-500 z-10'} >
                <div>
                    <div className='flex w-full items-center justify-between' >
                        <div 
                            onClick={handleNav} 
                            className='rounded-full shadow-lg shadow-[#00df9a] p-3 cursor-pointer' >
                            <AiOutlineClose />                
                        </div>
                    </div>
                    <div className='border-b border-[#00df9a] my-4' >
                        <p className='w-[85%] md:[90%] py-4 text-white' >We are always the best option!</p>
                    </div>
                </div>
                <div className='py-4 flex-col' >
                    <ul className='uppercase' >
                        <li onClick={()=> setNav(false)} className='py-4 text-sm cursor-pointer' >Services</li>
                        <li onClick={()=> setNav(false)} className='py-4 text-sm cursor-pointer' >Banking</li>
                        <li onClick={()=> setNav(false)} className='py-4 text-sm cursor-pointer' >Company</li>
                        <li onClick={()=> setNav(false)} className='py-4 text-sm cursor-pointer' >Resources</li>
                        <li onClick={()=> setNav(false)} className='py-4 text-sm cursor-pointer'>Account</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar
