import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import queryString from 'query-string';

const CategoryBox = ({ label, icon: Icon, selected }) => {
    const [params, setParams] = useSearchParams();
    const navigate = useNavigate();

    const handleShowCategory = () => {
        let currentQuery = {}
        if (params) {
            currentQuery = queryString.parse(params.toString());
        }
        const updatedQuery = {
            ...currentQuery, category: label,
        }
        const url = queryString.stringifyUrl(
            {
                url: '/',
                query: updatedQuery,
            },
            { skipNull: true }
        )
        navigate(url)
    }
    return (
        <div onClick={handleShowCategory} className={`flex flex-col gap-2 items-center justify-center border-b-2 border-transparent hover:text-neutral-800 text-neutral-500 cursor-pointer
        ${selected
                ? 'border-b-neutral-800 text-neutral-800'
                : 'border-transparent text-neutral-500'
            }
        `}>
            <Icon size={26} />
            <div>
                {label}
            </div>
        </div>
    );
};

export default CategoryBox;