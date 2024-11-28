'use client';

import { motion } from 'framer-motion';
import { Award, Heart, Sparkles, Timer } from 'lucide-react';

const features = [
    {
        icon: <Sparkles className='size-6' />,
        title: 'Vrhunska Kvaliteta',
        description: 'Uporabljamo samo najboljše materiale in najnovejše tehnike'
    },
    {
        icon: <Timer className='size-6' />,
        title: 'Hitro & Učinkovito',
        description: 'Spoštujemo vaš čas z natančnim vodenjem terminov'
    },
    {
        icon: <Heart className='size-6' />,
        title: 'Osebni Pristop',
        description: 'Vsaka stranka je posebna in zasluži individualno pozornost'
    },
    {
        icon: <Award className='size-6' />,
        title: 'Izkušeni Strokovnjaki',
        description: 'Naš tim sestavljajo certificirani in izkušeni mojstri'
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

const WhyChooseUs = () => {
    return (
        <section className='relative py-24'>
            {/* Background decoration */}
            <div className='absolute inset-0 bg-gradient-to-b from-white via-pink-100/50 to-white'></div>

            <motion.div
                className='container mx-auto px-4'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}>
                <div className='mb-16 text-center'>
                    <motion.h2
                        className='mb-4 text-3xl font-bold md:text-4xl'
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}>
                        Zakaj Izbrati Nas
                    </motion.h2>
                    <motion.p
                        className='mx-auto max-w-2xl text-gray-600'
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}>
                        Združujemo strast, izkušnje in najnovejše trende za vaše popolno razvajanje
                    </motion.p>
                </div>

                <motion.div
                    className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4'
                    variants={container}
                    initial='hidden'
                    whileInView='show'
                    viewport={{ once: true }}>
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={item}
                            className='group relative rounded-2xl bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-md'>
                            <div className='absolute inset-0 rounded-2xl bg-gradient-to-br from-pink-500/5 to-purple-500/5 opacity-0 transition-opacity group-hover:opacity-100'></div>
                            <div className='relative z-10'>
                                <div className='mb-4 inline-block rounded-xl bg-gradient-to-br from-pink-500/10 to-purple-500/10 p-3 text-pink-500'>
                                    {feature.icon}
                                </div>
                                <h3 className='mb-2 text-xl font-semibold'>{feature.title}</h3>
                                <p className='text-gray-600'>{feature.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
};

export default WhyChooseUs;
