import React from 'react';
import { categories } from './categoriesData';
import CategoryBox from './CategoryBox';
import { useSearchParams } from 'react-router-dom';

const Categories = () => {
    const [params, setParams] = useSearchParams()
    const category = params.get('category')

    return (
        <div className='pt-4 flex flex-row gap-5 items-center justify-between overflow-x-auto'>
            {
                categories.map(item => <CategoryBox
                    key={item.label}
                    label={item.label}
                    icon={item.icon}
                    selected={category === item.label}
                ></CategoryBox>)
            }
        </div>
    );
};

export default Categories;