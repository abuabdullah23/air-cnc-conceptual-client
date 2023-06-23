import React from 'react';
import Container from '../../../components/Container/Container';
import Logo from './Logo';
import Search from '../../../components/Search/Search';
import MenuDropdown from '../../../components/MenuDropdown/MenuDropdown';

const Navbar = () => {
    return (
        <div className='fixed w-full bg-white z-10 shadow-md'>
            <div className='py-4 border-b[1px]'>
                <Container>
                    <div className='flex flex-row items-center justify-between gap-3 md:gap-0'>
                        <Logo />
                        <Search/>
                        <MenuDropdown/>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Navbar;