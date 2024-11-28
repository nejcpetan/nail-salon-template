'use client';

import { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = [
    { label: 'Domov', href: '/' },
    { label: 'Storitve', href: '/storitve' },
    { label: 'Cenik', href: '/cenik' },
    { label: 'Galerija', href: '/galerija' }
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className='sticky top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-md'>
            <div className='container mx-auto px-4'>
                <div className='flex items-center justify-between py-4'>
                    <Link href='/' className='group flex items-center gap-2'>
                        <div className='relative'>
                            <span className='bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-2xl font-bold text-transparent'>
                                Blameless
                            </span>
                            <div className='absolute -bottom-2 left-0 h-0.5 w-0 bg-gradient-to-r from-pink-500 to-purple-500 transition-all duration-300 group-hover:w-full'></div>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className='hidden items-center gap-8 md:flex'>
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className='group relative text-gray-600 transition-colors hover:text-pink-500'>
                                {item.label}
                                <span className='absolute -bottom-1 left-0 h-0.5 w-0 bg-pink-500 transition-all duration-300 group-hover:w-full'></span>
                            </Link>
                        ))}
                        <a
                            href='https://lime-booking.si'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-pink-500 px-6 py-2 font-medium transition-all hover:bg-pink-600'>
                            <span className='ease absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform bg-white opacity-10 transition-all duration-1000 group-hover:-translate-x-40'></span>
                            <span className='relative text-white'>Rezerviraj</span>
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className='rounded-lg p-2 text-gray-600 hover:bg-gray-100 md:hidden'
                        onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className='border-t border-gray-100 bg-white md:hidden'>
                        <div className='container mx-auto space-y-4 px-4 py-6'>
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className='block rounded-lg px-4 py-2 text-gray-600 transition-colors hover:bg-pink-50 hover:text-pink-500'>
                                    {item.label}
                                </Link>
                            ))}
                            <a
                                href='https://lime-booking.si'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='mt-4 block rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 px-4 py-3 text-center font-medium text-white'>
                                Rezerviraj Termin
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
