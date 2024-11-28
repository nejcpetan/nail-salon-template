'use client';

import Image from 'next/image';

import { motion } from 'framer-motion';
import { Clock, Heart, Sparkles } from 'lucide-react';

const services = [
    {
        title: 'Klasična Manikura',
        description:
            'Popolna osnovna nega vaših rok in nohtov. Vključuje oblikovanje, nego obnohtne kožice in lakiranje po izbiri.',
        duration: '45 min',
        features: ['Oblikovanje nohtov', 'Nega obnohtne kožice', 'Lakiranje', 'Masaža rok'],
        image: '/images/20241128094506, output_x4_00001_.png'
    },
    {
        title: 'Gel Nohti',
        description: 'Profesionalno podaljševanje in oblikovanje nohtov z gelom za dolgotrajne in čudovite rezultate.',
        duration: '90 min',
        features: ['Podaljševanje nohtov', 'Oblikovanje po želji', 'Gel premaz', 'Možnost dekoracije'],
        image: '/images/20241128094506, output_x4_00002_.png'
    },
    {
        title: 'Permanentno Lakiranje',
        description: 'Dolgotrajno lakiranje z UV utrjevanjem za sijoč in obstojen videz vaših nohtov.',
        duration: '60 min',
        features: ['Priprava nohtov', 'UV lakiranje', 'Dolgotrajen sijaj', 'Zaščitni premaz'],
        image: '/images/20241128094506, output_x4_00003_.png'
    },
    {
        title: 'Nail Art & Dekoracija',
        description: 'Umetniško oblikovanje in dekoracija nohtov po vaših željah za edinstven videz.',
        duration: '30-60 min',
        features: ['Unikatni dizajni', 'Kristalčki', 'Ročno slikanje', '3D dekoracije'],
        image: '/images/20241128094506, output_x4_00004_.png'
    }
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.2 }
    }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
};

const ServicesPage = () => {
    return (
        <div className='min-h-screen bg-gradient-to-b from-pink-50/50 via-white to-pink-50/50 py-24'>
            <div className='container mx-auto px-4'>
                <motion.div
                    className='mb-16 text-center'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}>
                    <h1 className='mb-6 text-4xl font-bold md:text-5xl'>Naše Storitve</h1>
                    <p className='mx-auto max-w-2xl text-lg text-gray-600'>
                        Odkrijte našo paleto profesionalnih storitev, prilagojenih vašim željam in potrebam
                    </p>
                </motion.div>

                <motion.div variants={container} initial='hidden' animate='show' className='grid gap-8 md:gap-12'>
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={item}
                            className='group relative overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:shadow-md'>
                            <div className='grid gap-8 md:grid-cols-2'>
                                <div className='relative aspect-[4/3] md:aspect-auto'>
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className='object-cover transition-transform duration-500 group-hover:scale-105'
                                    />
                                </div>
                                <div className='flex flex-col justify-center p-8'>
                                    <div className='mb-4 flex items-center gap-2'>
                                        <Clock className='text-pink-500' size={20} />
                                        <span className='text-gray-600'>{service.duration}</span>
                                    </div>
                                    <h2 className='mb-4 text-2xl font-bold'>{service.title}</h2>
                                    <p className='mb-6 text-gray-600'>{service.description}</p>
                                    <div className='grid grid-cols-2 gap-4'>
                                        {service.features.map((feature, idx) => (
                                            <div key={idx} className='flex items-center gap-2'>
                                                <Sparkles className='text-pink-500' size={16} />
                                                <span className='text-sm text-gray-600'>{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <motion.a
                                        href='https://lime-booking.si'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className='group relative mt-8 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 px-6 py-3 text-white'
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}>
                                        <span className='absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform bg-white opacity-10 transition-all duration-1000 group-hover:-translate-x-40'></span>
                                        <span className='relative'>Rezerviraj Termin</span>
                                    </motion.a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default ServicesPage;
