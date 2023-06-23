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
            title={user&& user?.displayName ? user?.displayName : user?.email}
            />
    );
};

export default Avatar;