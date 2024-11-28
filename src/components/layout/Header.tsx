'use client';

import InfoBar from './InfoBar';
import Navbar from './Navbar';

const Header = () => {
    return (
        <header className='fixed inset-x-0 top-0 z-50 flex flex-col bg-white/80 backdrop-blur-md'>
            <InfoBar />
            <Navbar />
        </header>
    );
};

export default Header;
