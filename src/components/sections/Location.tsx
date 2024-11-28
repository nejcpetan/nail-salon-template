'use client';

import { motion } from 'framer-motion';
import { Clock, Mail, MapPin, Phone } from 'lucide-react';

const Location = () => {
    return (
        <section className='bg-gradient-to-b from-white via-pink-50/30 to-white py-16'>
            <div className='container mx-auto px-4'>
                <motion.h2
                    className='mb-12 text-center text-3xl font-bold text-black md:text-4xl'
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}>
                    Kje Nas Najdete
                </motion.h2>

                <div className='grid items-start gap-8 md:grid-cols-2'>
                    {/* Contact Information */}
                    <motion.div
                        className='space-y-6'
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}>
                        <div className='rounded-lg bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-md'>
                            <h3 className='mb-6 text-xl font-semibold'>Kontakt in Delovni Čas</h3>
                            <div className='space-y-4'>
                                <div className='flex items-center gap-3'>
                                    <MapPin className='text-pink-500' />
                                    <p>Slovenska cesta 123, 1000 Ljubljana</p>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <Phone className='text-pink-500' />
                                    <p>040 123 456</p>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <Mail className='text-pink-500' />
                                    <p>info@blameless.si</p>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <Clock className='text-pink-500' />
                                    <div>
                                        <p>Pon - Pet: 9:00 - 19:00</p>
                                        <p>Sob: 9:00 - 15:00</p>
                                        <p>Ned: Zaprto</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='rounded-lg bg-white p-8 shadow-sm'>
                            <h3 className='mb-4 text-xl font-semibold'>Rezervacija Termina</h3>
                            <p className='mb-4'>Rezervirajte svoj termin preko spleta ali nas pokličite!</p>
                            <motion.a
                                href='https://lime-booking.si'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 px-6 py-3 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg'
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}>
                                <span className='absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform bg-white opacity-10 transition-all duration-1000 group-hover:-translate-x-40'></span>
                                <span className='relative'>Rezerviraj Zdaj</span>
                            </motion.a>
                        </div>
                    </motion.div>

                    {/* Map */}
                    <motion.div
                        className='overflow-hidden rounded-lg shadow-sm'
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}>
                        <div className='relative h-[400px] w-full'>
                            <iframe
                                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2769.2259422912837!2d14.502774776888494!3d46.056946471123445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47652d613d6755a3%3A0x788c39f8f031d488!2sLjubljana!5e0!3m2!1ssl!2ssi!4v1710338899999!5m2!1ssl!2ssi'
                                width='100%'
                                height='100%'
                                style={{ border: 0 }}
                                allowFullScreen
                                loading='lazy'
                                referrerPolicy='no-referrer-when-downgrade'
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Location;
