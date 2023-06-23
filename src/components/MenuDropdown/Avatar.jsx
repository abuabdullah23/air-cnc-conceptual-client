import React from 'react';
import avatarLogo from '../../assets/images/placeholder.jpg'
import useAuth from '../../hooks/useAuth';


const Avatar = () => {
    const { user } = useAuth();
    return (
        <img
            className='rounded-full object-cover object-center w-8 h-8'
            src={user && user.photoURL ? user.photoURL : avatarLogo}
            alt="profile"
            title={user && user?.email ? user?.email : user?.displayName}
        />
    );
};

export default Avatar;