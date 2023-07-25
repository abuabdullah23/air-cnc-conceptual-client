import React, { useState } from 'react';
import { BsFingerprint } from 'react-icons/bs';
import { GrUserAdmin } from 'react-icons/gr';
import { NavLink, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { becomeHost } from '../../../api/auth';
import HostModal from '../../Modal/HostRequestModal';
import { toast } from 'react-hot-toast';

const GuestMenu = () => {
    const { user, role, setRole } = useAuth();
    const [modal, setModal] = useState(false);
    const navigate = useNavigate();

    const modalHandler = email => {
        becomeHost(email)
            .then(data => {
                toast.success('You are host now. Add rooms!');
                setRole('host');
                navigate('/dashboard/add-room')
                closeModal();
            })
    }

    const closeModal = () => {
        setModal(false);
    }

    return (
        <>
            <NavLink
                to='my-bookings'
                className={({ isActive }) =>
                    `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                    }`
                }
            >
                <BsFingerprint className='w-5 h-5' />

                <span className='mx-4 font-medium'>My Bookings</span>
            </NavLink>

            {!role && <div className='flex items-center px-4 py-2 mt-2  transition-colors duration-300 transform text-gray-600  hover:bg-gray-300   hover:text-gray-700 cursor-pointer'>
                <GrUserAdmin className='w-5 h-5' />

                <span
                    onClick={() => setModal(true)}
                    className='mx-4 font-medium'
                >Become A Host</span>
            </div>}

            <HostModal
                email={user?.email}
                modalHandler={modalHandler}
                isOpen={modal}
                closeModal={closeModal}
            />
        </>
    );
};

export default GuestMenu;