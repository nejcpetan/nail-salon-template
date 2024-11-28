import Image from 'next/image';

import Hero from '@/components/sections/Hero';
import Location from '@/components/sections/Location';
import Services from '@/components/sections/Services';
import WhyChooseUs from '@/components/sections/WhyChooseUs';

const Page = () => {
    return (
        <>
            <Hero />
            <WhyChooseUs />
            <Services />
            <Location />

            {/* Decorative images */}
            <div className='fixed -z-10 opacity-10'>
                <Image
                    src='/images/pink-smoke.jpg'
                    alt='Decorative smoke'
                    width={600}
                    height={600}
                    className='absolute right-0 top-[20%] rotate-180'
                />
                <Image
                    src='/images/pink-smoke.jpg'
                    alt='Decorative smoke'
                    width={600}
                    height={600}
                    className='absolute left-0 top-[60%]'
                />
            </div>
        </>
    );
};

export default Page;
