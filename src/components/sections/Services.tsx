'use client';

import Image from 'next/image';

import { motion } from 'framer-motion';

const services = [
    {
        title: 'Klasična Manikura',
        description: 'Popolna nega vaših rok in nohtov',
        image: '/images/20241128094506, output_x4_00001_.png',
        price: 'od 25€'
    },
    {
        title: 'Gel Nohti',
        description: 'Dolgotrajni in čudoviti nohti',
        image: '/images/20241128094506, output_x4_00002_.png',
        price: 'od 45€'
    },
    {
        title: 'Nail Art',
        description: 'Unikatni dizajni po vaši želji',
        image: '/images/20241128094506, output_x4_00003_.png',
        price: 'od 15€'
    }
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
};

const Services = () => {
    return (
        <section className='relative overflow-hidden py-24'>
            <div className='absolute inset-0 bg-gradient-to-t from-white via-purple-50/30 to-white'></div>

            <motion.div
                className='container mx-auto px-4'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}>
                <motion.div
                    className='mb-16 text-center'
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}>
                    <h2 className='mb-4 text-3xl font-bold md:text-4xl'>Naše Storitve</h2>
                    <p className='mx-auto max-w-2xl text-gray-600'>
                        Izberite med našimi profesionalnimi storitvami za popoln videz vaših nohtov
                    </p>
                </motion.div>

                <motion.div
                    className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'
                    variants={container}
                    initial='hidden'
                    whileInView='show'
                    viewport={{ once: true }}>
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={item}
                            className='group relative overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:shadow-lg'>
                            <div className='relative aspect-[4/3] overflow-hidden'>
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className='object-cover transition-transform duration-500 group-hover:scale-105'
                                />
                            </div>
                            <div className='p-6'>
                                <div className='mb-2 flex items-center justify-between'>
                                    <h3 className='text-xl font-semibold'>{service.title}</h3>
                                    <span className='font-medium text-pink-500'>{service.price}</span>
                                </div>
                                <p className='text-gray-600'>{service.description}</p>
                                <motion.a
                                    href='https://lime-booking.si'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='mt-4 inline-flex items-center text-pink-500 transition-colors hover:text-pink-600'
                                    whileHover={{ x: 5 }}>
                                    Rezerviraj termin
                                    <svg
                                        className='ml-2 size-4'
                                        viewBox='0 0 24 24'
                                        fill='none'
                                        stroke='currentColor'
                                        strokeWidth='2'>
                                        <path d='M5 12h14M12 5l7 7-7 7' />
                                    </svg>
                                </motion.a>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Services;
