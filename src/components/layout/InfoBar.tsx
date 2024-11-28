'use client';

import { useEffect, useState } from 'react';

import { Mail, Phone } from 'lucide-react';

const InfoBar = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const controlInfoBar = () => {
            if (window.scrollY > 100 && window.scrollY > lastScrollY) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
            setLastScrollY(window.scrollY);
        };

        let timeoutId: NodeJS.Timeout;
        const throttledControlInfoBar = () => {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
            timeoutId = setTimeout(controlInfoBar, 100);
        };

        window.addEventListener('scroll', throttledControlInfoBar);

        return () => {
            window.removeEventListener('scroll', throttledControlInfoBar);
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
        };
    }, [lastScrollY]);

    return (
        <div
            className={`fixed inset-x-0 top-0 z-[60] transform transition-all duration-300 ${
                isVisible ? 'translate-y-0' : '-translate-y-full'
            }`}>
            <div className='relative overflow-hidden bg-gradient-to-r from-pink-500 to-purple-500 text-white'>
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
        </div>
    );
};

export default InfoBar;
