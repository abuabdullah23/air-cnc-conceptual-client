import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import emptyImg from '../../assets/images/empty-box/empty-box.svg'

const EmptyContent = ({ emptyMessage, address, label, btnClass }) => {
    return (
        <div className='h-screen gap-5 flex flex-col justify-center items-center pb-16'>
            <img className='w-1/6' src={emptyImg} alt="empty box image" />
            <p className='text-gray-600 text-xl lg:text-3xl'>{emptyMessage}</p>
            <Link className={btnClass} to={address}>
                <Button label={label} />
            </Link>
        </div>
    )
};

export default EmptyContent;