import React from 'react';
import { categories } from './categoriesData';
import CategoryBox from './CategoryBox';

const Categories = () => {
    return (
        <div className='pt-4 flex flex-row gap-5 items-center justify-between overflow-x-auto'>
            {
                categories.map(item => <CategoryBox
                    key={item.label}
                    label={item.label}
                    icon={item.icon}
                ></CategoryBox>)
            }
        </div>
    );
};

export default Categories;