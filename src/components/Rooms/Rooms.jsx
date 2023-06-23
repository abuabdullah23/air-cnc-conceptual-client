import React, { useEffect, useState } from 'react';
import Card from './Card';
import Loader from '../Loader/Loader';

const Rooms = () => {
    const [rooms, setRooms] = useState([]);
    const [loading, setLoading] = useState(false)

    console.log(rooms)
    useEffect(() => {
        setLoading(true)
        fetch('rooms.json')
            .then(res => res.json())
            .then(data => {
                setRooms(data)
                setLoading(false)
            })
    }, [])

    if(loading){
        return <Loader/>
    }

    return (
        <div className='my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8'>
            {
                rooms.map(room => <Card
                    key={room._id}
                    room={room}
                ></Card>)
            }
        </div>
    );
};

export default Rooms;