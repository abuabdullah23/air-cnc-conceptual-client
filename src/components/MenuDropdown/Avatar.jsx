import React from 'react';
import avatarLogo from '../../assets/images/placeholder.jpg'
import useAuth from '../../hooks/useAuth';


const Avatar = () => {
    const { user } = useAuth();
    return (
        <img
        className='rounded-full'
            src={user && user.photoURL ? user.photoURL : avatarLogo}
            alt="profile" 
            width='30'
            height='30'
            />
    );
};

export default Avatar;