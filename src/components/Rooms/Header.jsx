import React from 'react';
import Heading from '../Heading/Heading';

const Header = () => {
    return (
        <div>
            <Heading
                title={'Kecamatan Selemadeg, Bali'}
                subtitle={'Kecamatan Selemadeg, Bali'}
            ></Heading>
            <div className='w-full md:h-[60vh] overflow-hidden rounded-xl mt-5'>
                <img className='object-cover w-full' src="https://a0.muscache.com/im/pictures/e25a9b25-fa98-4160-bfd1-039287bf38b6.jpg" alt="Header Image" />
            </div>
        </div>
    );
};

export default Header;