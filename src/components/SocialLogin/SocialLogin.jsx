import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import useAuth from '../../hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const SocialLogin = () => {
    const { signInWithGoogle, setLoading } = useAuth();

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result)
                navigate(from, { replace: true })
                toast.success('Successfully Logged In!')
            })
            .catch(error => {
                setLoading(false)
                toast.error(error.message)
            })
    }

    return (
        <div>
            <div onClick={handleGoogleSignIn} className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer'>
                <FcGoogle size={32} />
                <p>Continue with Google</p>
            </div>
        </div>
    );
};

export default SocialLogin;