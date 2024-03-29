import React from 'react';
import Header from '../../components/Rooms/Header';
import RoomInfo from '../../components/Rooms/RoomInfo';
import RoomReservation from '../../components/Rooms/RoomReservation';
import { useLoaderData } from 'react-router-dom';

const RoomDetails = () => {
    const singleRoom = useLoaderData();
    return (
        <div className='max-w-screen-lg mx-auto'>
            <div className='flex flex-col gap-6 px-4'>
                <Header singleRoom={singleRoom} />
                <div className='grid grid-cols-1 md:grid-cols-2 gap-7'>
                    <div>
                        <RoomInfo singleRoom={singleRoom} />
                    </div>
                    <div className='order-first md:order-last w-full'>
                        <RoomReservation singleRoom={singleRoom} />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default RoomDetails;