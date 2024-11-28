import Link from 'next/link';

import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
    return (
        <footer className='bg-gray-50'>
            <div className='container mx-auto px-4 py-12'>
                <div className='grid grid-cols-1 gap-8 md:grid-cols-3'>
                    {/* Contact Info */}
                    <div>
                        <h3 className='mb-4 text-lg font-semibold'>Kontakt</h3>
                        <div className='space-y-3'>
                            <div className='flex items-center gap-2'>
                                <MapPin size={18} className='text-pink-500' />
                                <span>Slovenska cesta 123, 1000 Ljubljana</span>
                            </div>
                            <div className='flex items-center gap-2'>
                                <Phone size={18} className='text-pink-500' />
                                <span>040 123 456</span>
                            </div>
                            <div className='flex items-center gap-2'>
                                <Mail size={18} className='text-pink-500' />
                                <span>info@blameless.si</span>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className='mb-4 text-lg font-semibold'>Povezave</h3>
                        <div className='space-y-2'>
                            <Link href='/storitve' className='block hover:text-pink-500'>
                                Storitve
                            </Link>
                            <Link href='/cenik' className='block hover:text-pink-500'>
                                Cenik
                            </Link>
                            <Link href='/galerija' className='block hover:text-pink-500'>
                                Galerija
                            </Link>
                        </div>
                    </div>

                    {/* Social & Hours */}
                    <div>
                        <h3 className='mb-4 text-lg font-semibold'>Delovni Čas</h3>
                        <div className='mb-6 space-y-2'>
                            <p>Pon - Pet: 9:00 - 19:00</p>
                            <p>Sob: 9:00 - 15:00</p>
                            <p>Ned: Zaprto</p>
                        </div>
                        <div className='flex gap-4'>
                            <a href='#' className='text-pink-500 hover:text-pink-600'>
                                <Facebook size={24} />
                            </a>
                            <a href='#' className='text-pink-500 hover:text-pink-600'>
                                <Instagram size={24} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className='mt-8 border-t border-gray-200 pt-8 text-center text-sm text-gray-500'>
                    <p>© {new Date().getFullYear()} Blameless. Vse pravice pridržane.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
