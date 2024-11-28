'use client';

import { useEffect, useState } from 'react';

import { Mail, Phone } from 'lucide-react';

const InfoBar = () => {
    return (
        <div className='w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white'>
            <div className='container relative z-10 mx-auto flex flex-col items-center justify-between gap-2 px-4 py-2 text-sm md:flex-row md:gap-6'>
                <div className='flex flex-wrap items-center justify-center gap-4 md:gap-6'>
                    <a href='tel:040123456' className='flex items-center gap-2 transition-opacity hover:opacity-80'>
                        <Phone size={14} className='animate-pulse' />
                        <span>040 123 456</span>
                    </a>
                    <a
                        href='mailto:info@blameless.si'
                        className='flex items-center gap-2 transition-opacity hover:opacity-80'>
                        <Mail size={14} />
                        <span>info@blameless.si</span>
                    </a>
                </div>
                <div className='flex items-center gap-2'>
                    <span className='rounded-full bg-white/10 px-3 py-0.5 text-center backdrop-blur-sm'>
                        Pon - Pet: 9:00 - 19:00
                    </span>
                </div>
            </div>
        </div>
    );
};

export default InfoBar;
