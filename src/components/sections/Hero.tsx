'use client';

import Image from 'next/image';

import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className='relative flex min-h-[90vh] items-center overflow-hidden'>
            {/* Background Elements */}
            <div className='absolute inset-0 z-0'>
                <div className='absolute inset-0 bg-gradient-to-br from-pink-100/50 via-white to-purple-100/50'></div>
                <Image
                    src='/images/20241128094506, output_x4_00001_.png'
                    alt='Umetnost nohtov'
                    fill
                    className='scale-110 object-cover opacity-20 transition-transform duration-1000 hover:scale-105'
                    priority
                />
            </div>

            {/* Floating Elements */}
            <div className='absolute inset-0 overflow-hidden'>
                <div className='absolute left-10 top-20 size-64 rounded-full bg-pink-300/10 blur-3xl'></div>
                <div className='absolute bottom-20 right-10 size-64 rounded-full bg-purple-300/10 blur-3xl'></div>
            </div>

            <div className='container relative z-10 mx-auto px-4'>
                <div className='max-w-2xl space-y-8'>
                    <h1 className='text-6xl font-bold md:text-7xl'>
                        Vaša Lepota,{' '}
                        <span className='bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent'>
                            Naša Strast
                        </span>
                    </h1>
                    <p className='text-xl leading-relaxed text-gray-600'>
                        Doživite luksuzno nego nohtov in očarljive dizajne v najboljšem salonu za nohte v Ljubljani.
                    </p>
                    <div className='flex gap-4'>
                        <a
                            href='https://lime-booking.si'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='group relative inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 px-8 py-4 font-medium text-white shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:from-pink-600 hover:to-purple-600 hover:shadow-xl'>
                            <span className='ease absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform bg-white opacity-10 transition-all duration-1000 group-hover:-translate-x-40'></span>
                            <span className='relative'>Rezervirajte Termin</span>
                        </a>
                        <a
                            href='/galerija'
                            className='group relative inline-flex items-center justify-center rounded-lg border border-gray-100 bg-white/80 px-8 py-4 font-medium text-gray-700 shadow-lg backdrop-blur-sm transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:bg-white/90 hover:shadow-xl'>
                            Oglej si Galerijo
                        </a>
                    </div>
                </div>
            </div>

            {/* Decorative Shapes */}
            <div className='absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent'></div>
        </section>
    );
};

export default Hero;
