'use client';

import { useEffect, useState } from 'react';

import { Mail, Phone } from 'lucide-react';

const InfoBar = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const controlInfoBar = () => {
            if (window.scrollY > lastScrollY) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
            setLastScrollY(window.scrollY);
        };

        window.addEventListener('scroll', controlInfoBar);

        return () => window.removeEventListener('scroll', controlInfoBar);
    }, [lastScrollY]);

    return (
        <div
            className={`relative overflow-hidden bg-gradient-to-r from-pink-500 to-purple-500 text-white transition-all duration-300 ${
                isVisible ? 'opacity-100' : 'opacity-0'
            }`}>
            <div className='absolute inset-0 bg-[url("/images/noise.png")] opacity-10'></div>
            <div className='container relative z-10 mx-auto flex flex-col items-center justify-between gap-2 px-4 py-2.5 text-sm md:flex-row md:gap-6'>
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
