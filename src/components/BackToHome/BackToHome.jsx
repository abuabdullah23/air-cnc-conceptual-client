import React from 'react';
import { Link } from 'react-router-dom';

const BackToHome = () => {
    return (
        <Link to='/'>
            <div className='px-5 py-3 rounded-md bg-slate-200 hover:bg-slate-300 w-fit mx-auto my-2'>
                Back To Home
            </div>
        </Link>
    );
};

export default BackToHome;