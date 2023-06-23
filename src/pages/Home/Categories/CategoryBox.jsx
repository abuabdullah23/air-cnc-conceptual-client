import React from 'react';
import { Link } from 'react-router-dom';

const CategoryBox = ({ label, icon: Icon }) => {
    return (
        <Link>
            <div className='flex flex-col gap-2 items-center justify-center border-b-2 border-transparent hover:text-neutral-800 text-neutral-500'>
                <Icon size={26} />
                <div>
                    {label}
                </div>
            </div>
        </Link>
    );
};

export default CategoryBox;