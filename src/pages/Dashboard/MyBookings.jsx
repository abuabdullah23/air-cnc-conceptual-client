import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { getBookings } from '../../api/bookings';
import TableRow from '../../components/Dashboard/TableRow';
import EmptyContent from '../../components/EmptyContent/EmptyContent';

const MyBookings = () => {
    const { user } = useAuth();
    const [bookings, setBookings] = useState([]);
    const fetchBookings = () => {
        getBookings(user?.email)
            .then(data => {
                setBookings(data)
            })
    }
    useEffect(() => {
        fetchBookings()
    }, [user])

    return (
        <>{bookings && Array.isArray(bookings) && bookings.length > 0 ? <div className='container mx-auto px-4 sm:px-8'>
            <div className='py-8'>
                <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
                    <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
                        <table className='min-w-full leading-normal'>
                            <thead>
                                <tr>
                                    <th
                                        scope='col'
                                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-semibold'
                                    >
                                        Title
                                    </th>
                                    <th
                                        scope='col'
                                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-semibold'
                                    >
                                        Location
                                    </th>
                                    <th
                                        scope='col'
                                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-semibold'
                                    >
                                        Price
                                    </th>
                                    <th
                                        scope='col'
                                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-semibold'
                                    >
                                        From
                                    </th>
                                    <th
                                        scope='col'
                                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-semibold'
                                    >
                                        To
                                    </th>
                                    <th
                                        scope='col'
                                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-semibold'
                                    >
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    bookings && bookings.map(booking => <TableRow
                                        key={booking._id}
                                        booking={booking}
                                        fetchBookings={fetchBookings}
                                    />)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div> : <EmptyContent
            emptyMessage={'You have not booking any room'}
            address={'/'}
            label={'Browse Rooms'}
        />}</>


    );
};

export default MyBookings;