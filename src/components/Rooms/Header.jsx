import React from 'react';
import Heading from '../Heading/Heading';

const Header = ({singleRoom}) => {
    const {title, image, location} = singleRoom;
    return (
        <div>
            <Heading
                title={title}
                subtitle={location}
            ></Heading>
            <div className='w-full md:h-[60vh] overflow-hidden rounded-xl mt-5'>
                <img className='object-cover w-full' src={image} alt="Header Image" />
            </div>
        </div>
    );
};

export default Header;