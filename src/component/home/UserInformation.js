import React, { useContext, useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import { AuthContext } from '../../context/authContext';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { BiSolidUser } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import { deleteProductToCart } from '../../store/CartSlice';
import {HiOutlineUserCircle} from 'react-icons/hi2';
import {HiOutlineLogout} from 'react-icons/hi';

function UserInformation() {
    const { id } = useParams();
    const { state, setState } = useContext(AuthContext);
    const [user, setUser] = useState([]);
    const dispatch = useDispatch();
    const Navigate = useNavigate();

    const handleLogout = (product) => {
        setState({ email: '', password: '', username: '', id: '', fullName: '', phoneNumber: '' });
        window.localStorage.removeItem('username');
        window.localStorage.removeItem('id');
        window.localStorage.removeItem('email');
        window.localStorage.removeItem('fullName');
        window.localStorage.removeItem('phoneNumber');
        dispatch(deleteProductToCart(product));
        Navigate('/');
    };

    const getDataUser = async () => {
        const response = await axios.get(
            'http://localhost:8000/user/' + id  
        );

        if (response.status === 200) {
            setUser(response.data);
        };
    };

    const handeleEditChange = () => {
        Navigate('/user/' + id + '/editinfo/')
    };
    
    const handleUpdateInfo = () => {
        Navigate('/user/' + id + '/updateinfo/');
    };

    const nextChangePassword = (id) => {
        Navigate('/user/changepassword/' + id);
    }

    useEffect(() => {
        getDataUser();
    }, []);

    return (
        <div>
            <Header />
            <div className='mt-[70px] h-full w-full'>
                <div className='mb-[30px] border-b shadow-[0_1px_2px_0_rgba(48,56,64,0.16)]'>
                    <div className='flex items-center justify-center gap-[20px] py-[40px] w-full bg-[#F7F7F7]'>
                        <h1 className='text-[30px] font-bold text-[#303840]'>USER PROFILE</h1>
                        <BiSolidUser className='text-[35px] text-[#303840]' />
                    </div>
                </div>
                <div className='lg:w-[1140px] lg:mx-auto pb-[50px] flex max-sm:flex-col'>
                    <div className='lg:w-[30%] max-sm:w-full max-sm:p-[12px_12px_35px_12px]'>
                        {user && (
                            <div>
                                <div className='flex flex-col'>
                                    <div className='flex items-center gap-[15px] pb-[10px]'>
                                        <HiOutlineUserCircle className='text-[70px] text-[#C5C5C5]' />
                                        <p className='text-[20px]'>{user.username}</p>
                                    </div>
                                    <div className='border-b py-[10px] border-r-[5px] border-r-[#02021E]'>
                                        <Link to={'/user/' + id}>
                                            <p className='font-medium text-[#343434] '>ACCOUNT</p>
                                        </Link>
                                    </div>
                                    <div 
                                        className='border-b py-[10px] hover:border-r-[5px] hover:border-r-[#FA6E4F]'>
                                        <Link to={'/user/' + id + '/orders'}>
                                            <p className='font-medium text-[#897D7D] hover:text-[#343434]'>ORDER</p>
                                        </Link>
                                    </div>
                                    <div className='w-full hover:border-r-[5px] hover:border-r-[#FA6E4F]'>
                                        <button
                                            onClick={handleLogout}
                                            className='flex items-center gap-[15px] text-[#897D7D] font-medium py-[10px] hover:text-[#343434]'
                                        >
                                            LOGOUT
                                            <HiOutlineLogout className='lg:text-[25px] max-sm:text-[18px]'/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className='lg:w-[70%] lg:border-l lg:p-[0_30px_30px_30px] max-sm:w-full max-sm:p-[12px]'>
                        {user && (
                            <div className='flex flex-col items-center'>
                                <div className='flex flex-col gap-[10px] w-[100%] mb-[40px]'>
                                    <span className='font-bold'>User Name</span>
                                    <div className='p-[10px_40px_10px_40px] shadow-[0_1px_2px_0_rgba(48,56,64,0.16)] border rounded-[10px] bg-[#FBFBFB]'>
                                        <p className=''>{user.username}</p>
                                    </div>
                                </div>
                                <div className='flex flex-col gap-[10px] w-[100%] mb-[40px]'>
                                    <span className='font-bold'>Email Address</span>
                                    <div className='p-[10px_40px_10px_40px] shadow-[0_1px_2px_0_rgba(48,56,64,0.16)] border rounded-[10px] bg-[#FBFBFB]'>
                                        <p className=''>{user.email}</p>
                                    </div>
                                </div>
                                <div className='flex flex-col gap-[10px] w-[100%] mb-[40px]'>
                                    <span className='font-bold'>Full Name</span>
                                    <div className='p-[10px_40px_10px_40px] shadow-[0_1px_2px_0_rgba(48,56,64,0.16)] border rounded-[10px] bg-[#FBFBFB]'>
                                        {user?.fullName? (
                                            <div>
                                                <p className=''>{user.fullName}</p>
                                            </div>
                                        ) : (
                                            <div>
                                                <p className='text-[#FE0004] font-semibold max-sm:text-[14px]'>Your full name has not been updated !!</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className='flex flex-col gap-[10px] w-[100%] mb-[40px]'>
                                    <span className='font-bold'>Phone Number</span>
                                    <div className='p-[10px_40px_10px_40px] shadow-[0_1px_2px_0_rgba(48,56,64,0.16)] border rounded-[10px] bg-[#FBFBFB]'>
                                        {user?.phoneNumber? (
                                            <div>
                                                <p className=''>{user.phoneNumber}</p>
                                            </div>
                                        ) : (
                                            <div>
                                                <p className='text-[#FE0004] font-semibold max-sm:text-[14px]'>Your phone number has not been updated !!</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className='flex gap-[25px] w-[100%]
                                    max-sm:flex-col'>
                                    {state.fullName && state.phoneNumber ? (
                                        <div className='max-sm:w-[100%]'>
                                            <button
                                                type='button'
                                                onClick={handeleEditChange}
                                                className='w-full p-[10px_50px] rounded-[10px] bg-[#FD612A] text-[#fff] font-semibold'>
                                                Change
                                            </button>
                                        </div>
                                    ) : (
                                        <button
                                            type='button'
                                            onClick={handleUpdateInfo}
                                            className='p-[10px_40px] rounded-[10px] bg-[#0545BF] text-[#fff] font-semibold'>
                                            Update Info
                                        </button>
                                    )}
                                    <button
                                        type='button'
                                        onClick={() => nextChangePassword(state.id)}
                                        className='p-[10px_50px] bg-[#6D4AFF] text-[#fff] font-bold rounded-[10px]'>
                                        Change Password
                                    </button>
                                </div>
                            </div>
                        )}

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default UserInformation