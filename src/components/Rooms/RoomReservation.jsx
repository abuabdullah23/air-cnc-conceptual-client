import React, { useState } from 'react';
import Calendar from './Calendar';
import Button from '../Button/Button';
import useAuth from '../../hooks/useAuth';
import BookingModal from '../Modal/BookingModal';
import { formatDistance } from 'date-fns';
import { addBooking, updateRoomStatus } from '../../api/bookings';
import { toast } from 'react-hot-toast';

const RoomReservation = ({ singleRoom }) => {
    const { user, role } = useAuth();
    const { _id, title, host, location, price } = singleRoom;

    // for modal
    const [isOpen, setIsOpen] = useState(false);
    const closeModal = () => {
        setIsOpen(false)
    }

    // price calculation
    const totalPrice = parseFloat(formatDistance(new Date(singleRoom.to), new Date(singleRoom.from)).split(' ')[0]).toFixed(2) * price;
    console.log(totalPrice)

    // date range
    const [value, setValue] = useState({
        startDate: new Date(singleRoom?.from),
        endDate: new Date(singleRoom?.to),
        key: 'selection',
    })

    // for date range show
    const handleSelect = (ranges) => {
        setValue(...value)
    }

    // Booking state
    const [bookingInfo, setBookingInfo] = useState({
        guest: { name: user?.displayName, email: user?.email, image: user?.photoURL },
        host: host.email,
        roomId: singleRoom._id,
        title,
        location,
        price: totalPrice,
        from: value.startDate,
        to: value.endDate
    })
    // console.log(bookingInfo)

    // save booking data
    const modalHandler = () => {
        addBooking(bookingInfo)
            .then(data => {
                updateRoomStatus(_id, true)
                    .then(data => {
                        toast.success('Booking Successful!');
                        closeModal();
                    })
                    .catch(error => {
                        toast.error(error.message);
                        closeModal();
                    })
            })
            .catch(error => {
                toast.error(error.message);
                closeModal();
            })
    }

    return (
        <div className='bg-white rounded-xl border-[1px] border-neutral-200 overflow-hidden'>
            <div className='flex flex-row items-center gap-1 p-4'>
                <div className='text-2xl font-semibold'>$ {price}</div>
                <div className="font-light text-neutral-600">night</div>
            </div>
            <hr />
            <div className='w-full flex justify-center'>
                <div>
                    <Calendar value={value} handleSelect={handleSelect} />
                </div>
            </div>
            <hr />
            <div className='p-4'>
                <Button
                    onClick={() => setIsOpen(true)}
                    disabled={host.email === user.email}
                    label={'Reserve'} />
            </div>
            <hr />
            <div className='p-4 flex flex-row items-center justify-between font-semibold text-lg'>
                <p>Total</p>
                <p>$ {totalPrice}</p>
            </div>

            <BookingModal
                modalHandler={modalHandler}
                closeModal={closeModal}
                bookingInfo={bookingInfo}
                isOpen={isOpen}
            />
        </div>
    );
};

export default RoomReservation;