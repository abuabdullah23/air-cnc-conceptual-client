import React, { useState } from 'react';
import AddRoomForm from '../../components/Forms/AddRoomForm';
import { imageUpload } from '../../api/utils';
import useAuth from '../../hooks/useAuth';
import { addRoom } from '../../api/rooms';
import { toast } from 'react-hot-toast';

const AddRoom = () => {
    const { user } = useAuth();
    const [dates, setDates] = useState({
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
    })
    // for loading spinner
    const [loading, setLoading] = useState(false);

    // for change image upload button text
    const [uploadButtonText, setUploadButtonText] = useState('Upload Image')
    // handle form Submit
    const handleSubmit = (event) => {
        event.preventDefault();
        setLoading(true);
        const form = event.target;
        const location = form.location.value;
        const title = form.title.value;
        const from = dates.startDate;
        const to = dates.endDate;
        const category = form.category.value;
        const price = form.price.value;
        const total_guest = form.total_guest.value;
        const bedrooms = form.bedrooms.value;
        const bathrooms = form.bathrooms.value;
        const description = form.description.value;
        const image = event.target.image.files[0];

        // upload Image
        imageUpload(image)
            .then(data => {
                // console.log(data)
                const roomData = {
                    location,
                    title,
                    host: {
                        name: user?.displayName,
                        image: user?.photoURL,
                        email: user?.email,
                    },
                    image: data.data.display_url,
                    category,
                    price: parseFloat(price),
                    to,
                    from,
                    total_guest: parseInt(total_guest),
                    bedrooms: parseInt(bedrooms),
                    bathrooms: parseInt(bathrooms),
                    description
                }
                // console.log(roomData)
                // save room data in server
                addRoom(roomData)
                    .then(data => {
                        // console.log(data)
                        toast.success('Successfully Added Your Room!')
                    })
                    .catch(error => {
                        // console.log(error.message)
                        toast.error(error.message)
                    })
                setLoading(false)
            })
            .catch(error => {
                // console.log(error.message)
                setLoading(false)
            })
    }

    // change dynamically upload image button text according to image name
    const handleImageChange = (image) => {
        setUploadButtonText(image.name)
    }

    // handle select date
    const handleSelectDate = (ranges) => {
        // console.log(ranges.selection)
        setDates(ranges.selection);
    }

    return (
        <div>
            <AddRoomForm
                handleSubmit={handleSubmit}
                loading={loading}
                handleImageChange={handleImageChange}
                uploadButtonText={uploadButtonText}
                dates={dates}
                handleSelectDate={handleSelectDate}
            />
        </div>
    );
};

export default AddRoom;