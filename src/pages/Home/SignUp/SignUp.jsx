import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../../../components/SocialLogin/SocialLogin';
import BackToHome from '../../../components/BackToHome/BackToHome';
import useAuth from '../../../hooks/useAuth';
import { TbFidgetSpinner } from 'react-icons/tb';
import { toast } from 'react-hot-toast';
import { saveUser } from '../../../api/auth';
import { imageUpload } from '../../../api/utils';

const SignUp = () => {
    const { user, loading, setLoading, createUser, updateUserProfile } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    // handle singUp
    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        // image Upload
        const image = event.target.image.files[0];
        imageUpload(image) // call from utils.js for no repeat same code
            .then(data => {
                const imgUrl = data.data.display_url;
                createUser(email, password)
                    .then(result => {
                        updateUserProfile(name, imgUrl)
                            .then(() => {
                                navigate(from, { replace: true })
                                toast.success('Successfully Signed Up!')
                                
                                // save user in mongoDB
                                saveUser(result.user)
                            })
                            .catch(error => {
                                toast.error(error.message)
                                setLoading(false)
                            })

                    })
                    .catch(error => {
                        toast.error(error.message)
                        setLoading(false)
                    })
            })
    }

    return (
        <div className='md:flex gap-10 justify-center items-center min-h-screen'>
            <BackToHome />
            <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900'>
                <div className='mb-8 text-center'>
                    <h1 className='my-3 text-4xl font-bold'>Sign Up</h1>
                    <p className='text-sm text-gray-400'>Welcome to AirCNC</p>
                </div>
                <form onSubmit={handleSignUp}
                    noValidate=''
                    action=''
                    className='space-y-6 ng-untouched ng-pristine ng-valid'
                >
                    <div className='space-y-4'>
                        <div>
                            <label htmlFor='email' className='block mb-2 text-sm'>
                                Name
                            </label>
                            <input
                                type='text'
                                name='name'
                                id='name'
                                placeholder='Enter Your Name Here'
                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                                data-temp-mail-org='0'
                            />
                        </div>
                        <div>
                            <label htmlFor='image' className='block mb-2 text-sm'>
                                Select Image:
                            </label>
                            <input
                                required
                                type='file'
                                id='image'
                                name='image'
                                accept='image/*'
                            />
                        </div>
                        <div>
                            <label htmlFor='email' className='block mb-2 text-sm'>
                                Email address
                            </label>
                            <input
                                type='email'
                                name='email'
                                id='email'
                                required
                                placeholder='Enter Your Email Here'
                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                                data-temp-mail-org='0'
                            />
                        </div>
                        <div>
                            <div className='flex justify-between'>
                                <label htmlFor='password' className='text-sm mb-2'>
                                    Password
                                </label>
                            </div>
                            <input
                                type='password'
                                name='password'
                                id='password'
                                required
                                placeholder='*******'
                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type='submit'
                            className='bg-rose-500 w-full rounded-md py-3 text-white'
                        >
                            {
                                loading ? <TbFidgetSpinner size={24} className='animate-spin mx-auto' /> : 'Continue'
                            }
                        </button>
                    </div>
                </form>
                <div className='flex items-center pt-4 space-x-1'>
                    <div className='flex-1 h-[2px] sm:w-16 bg-gray-400'></div>
                    <p className='px-3 text-sm dark:text-gray-400'>
                        Signup with social accounts
                    </p>
                    <div className='flex-1 h-[2px] sm:w-16 bg-gray-400'></div>
                </div>
                <SocialLogin />

                <p className='px-6 text-sm text-center text-gray-400'>
                    Already have an account?{' '}
                    <Link
                        to='/login'
                        className='hover:underline hover:text-rose-500 text-gray-600'
                    >
                        Login
                    </Link>
                    .
                </p>
            </div>
        </div>
    );
};

export default SignUp;