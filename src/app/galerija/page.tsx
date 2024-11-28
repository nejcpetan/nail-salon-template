'use client';

import { useState } from 'react';

import Image from 'next/image';

import { motion } from 'framer-motion';
import { X } from 'lucide-react';

const images = [
    {
        src: '/images/20241128094506, output_x4_00001_.png',
        title: 'Klasična Manikura',
        category: 'Manikura'
    },
    {
        src: '/images/20241128094506, output_x4_00002_.png',
        title: 'Gel Nohti',
        category: 'Gel'
    },
    {
        src: '/images/20241128094506, output_x4_00003_.png',
        title: 'Nail Art',
        category: 'Dekoracija'
    },
    {
        src: '/images/20241128094506, output_x4_00004_.png',
        title: 'Umetniški Dizajn',
        category: 'Nail Art'
    }
    // Add more images as needed
];

const categories = ['Vse', 'Manikura', 'Gel', 'Dekoracija', 'Nail Art'];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const item = {
    hidden: { opacity: 0, scale: 0.95 },
    show: { opacity: 1, scale: 1 }
};

const GalleryPage = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [selectedCategory, setSelectedCategory] = useState('Vse');

    const filteredImages = images.filter((img) => selectedCategory === 'Vse' || img.category === selectedCategory);

    return (
        <div className='min-h-screen bg-gradient-to-b from-pink-50/50 via-white to-pink-50/50 py-24'>
            <div className='container mx-auto px-4'>
                <motion.div
                    className='mb-16 text-center'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}>
                    <h1 className='mb-6 text-4xl font-bold md:text-5xl'>Naša Galerija</h1>
                    <p className='mx-auto mb-12 max-w-2xl text-lg text-gray-600'>
                        Oglejte si naše najnovejše kreacije in najljubše dizajne
                    </p>

                    {/* Category Filter */}
                    <div className='mb-12 flex flex-wrap justify-center gap-4'>
                        {categories.map((category) => (
                            <motion.button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`rounded-full px-6 py-2 transition-all ${
                                    selectedCategory === category
                                        ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-md'
                                        : 'bg-white text-gray-600 hover:bg-gray-50'
                                }`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}>
                                {category}
                            </motion.button>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
                    variants={container}
                    initial='hidden'
                    animate='show'>
                    {filteredImages.map((image, index) => (
                        <motion.div
                            key={index}
                            variants={item}
                            className='group relative aspect-square overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:shadow-md'
                            whileHover={{ y: -5 }}>
                            <Image
                                src={image.src}
                                alt={image.title}
                                fill
                                className='object-cover transition-transform duration-500 group-hover:scale-110'
                                onClick={() => setSelectedImage(image.src)}
                            />
                            <div className='absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                                <div className='absolute inset-x-0 bottom-0 p-4 text-white'>
                                    <h3 className='font-semibold'>{image.title}</h3>
                                    <p className='text-sm opacity-75'>{image.category}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Lightbox */}
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className='fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4'
                        onClick={() => setSelectedImage(null)}>
                        <button
                            className='absolute right-4 top-4 text-white transition-colors hover:text-pink-500'
                            onClick={() => setSelectedImage(null)}>
                            <X size={32} />
                        </button>
                        <motion.div
                            initial={{ scale: 0.95 }}
                            animate={{ scale: 1 }}
                            className='relative max-h-[90vh] max-w-[90vw] overflow-hidden rounded-2xl'
                            onClick={(e) => e.stopPropagation()}>
                            <Image
                                src={selectedImage}
                                alt='Selected work'
                                width={1200}
                                height={800}
                                className='object-contain'
                            />
                        </motion.div>
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default GalleryPage;
