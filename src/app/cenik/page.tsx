'use client';

import { motion } from 'framer-motion';
import { Clock, Sparkles, Star } from 'lucide-react';

const priceList = [
    {
        category: 'Manikura',
        description: 'Klasična nega in oblikovanje nohtov',
        icon: <Star className='text-pink-500' />,
        services: [
            { name: 'Klasična manikura', price: '25€', duration: '45 min' },
            { name: 'Spa manikura', price: '35€', duration: '60 min', highlight: true },
            { name: 'Express manikura', price: '20€', duration: '30 min' }
        ]
    },
    {
        category: 'Gel Nohti',
        description: 'Profesionalno podaljševanje in oblikovanje',
        icon: <Sparkles className='text-pink-500' />,
        services: [
            { name: 'Novi set gel nohtov', price: '45€', duration: '90 min', highlight: true },
            { name: 'Dopolnitev', price: '35€', duration: '60 min' },
            { name: 'Odstranjevanje gela', price: '15€', duration: '30 min' }
        ]
    },
    {
        category: 'Dekoracija',
        description: 'Umetniško oblikovanje in okraševanje',
        icon: <Star className='text-pink-500' />,
        services: [
            { name: 'Osnovni nail art (po nohtu)', price: '3€', duration: '5 min' },
            { name: 'Zahtevni dizajn (po nohtu)', price: '5€', duration: '10 min' },
            { name: 'Kristalčki in okraski', price: 'od 5€', highlight: true }
        ]
    }
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
};

const PricingPage = () => {
    return (
        <div className='min-h-screen bg-gradient-to-b from-pink-50/50 via-white to-pink-50/50 py-24'>
            <div className='container mx-auto px-4'>
                <motion.div
                    className='mb-16 text-center'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}>
                    <h1 className='mb-6 text-4xl font-bold md:text-5xl'>Naš Cenik</h1>
                    <p className='mx-auto max-w-2xl text-lg text-gray-600'>
                        Transparentne cene za profesionalne storitve, prilagojene vašim željam
                    </p>
                </motion.div>

                <motion.div
                    className='mx-auto max-w-4xl space-y-8'
                    variants={container}
                    initial='hidden'
                    animate='show'>
                    {priceList.map((category, index) => (
                        <motion.div
                            key={index}
                            variants={item}
                            className='rounded-2xl bg-white shadow-sm transition-all duration-300 hover:shadow-md'>
                            <div className='p-8'>
                                <div className='mb-4 flex items-center gap-3'>
                                    <div className='rounded-lg bg-pink-50 p-2'>{category.icon}</div>
                                    <div>
                                        <h2 className='text-2xl font-semibold'>{category.category}</h2>
                                        <p className='text-gray-600'>{category.description}</p>
                                    </div>
                                </div>
                                <div className='space-y-4'>
                                    {category.services.map((service, serviceIndex) => (
                                        <div
                                            key={serviceIndex}
                                            className={`flex items-center justify-between rounded-xl p-4 transition-all ${
                                                service.highlight
                                                    ? 'border border-pink-100 bg-gradient-to-r from-pink-50/50 to-purple-50/50'
                                                    : 'hover:bg-gray-50'
                                            }`}>
                                            <div className='flex-1'>
                                                <div className='flex items-center gap-2'>
                                                    <span className='font-medium'>{service.name}</span>
                                                    {service.highlight && (
                                                        <span className='rounded-full bg-gradient-to-r from-pink-500 to-purple-500 px-2 py-0.5 text-xs text-white'>
                                                            Priljubljeno
                                                        </span>
                                                    )}
                                                </div>
                                                <div className='mt-1 flex items-center gap-2 text-sm text-gray-500'>
                                                    <Clock size={14} />
                                                    <span>{service.duration}</span>
                                                </div>
                                            </div>
                                            <span className='text-lg font-semibold'>{service.price}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className='px-8 pb-8'>
                                <motion.a
                                    href='https://lime-booking.si'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='group relative inline-flex w-full items-center justify-center overflow-hidden rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 p-4 text-white'
                                    whileHover={{ scale: 1.01 }}
                                    whileTap={{ scale: 0.99 }}>
                                    <span className='absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform bg-white opacity-10 transition-all duration-1000 group-hover:-translate-x-40'></span>
                                    <span className='relative'>Rezerviraj Termin</span>
                                </motion.a>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default PricingPage;
