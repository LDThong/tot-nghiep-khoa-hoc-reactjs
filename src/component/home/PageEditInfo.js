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
import {CgDanger} from 'react-icons/cg';
import {BsCheckCircle} from 'react-icons/bs';

function UserInformation() {
    const { id } = useParams();
    const { state, setState } = useContext(AuthContext);
    const [user, setUser] = useState([]);
    const [username, setUsername] = useState('');
    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [notificationFailed, setNotificationFailed] = useState("hidden");
    const [changeSuccessfull, setChangeSuccessfull] = useState("hidden");
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

   const editDateUser = async () => {
        if (username === '' || fullName === '' || phoneNumber === '') {
            setNotificationFailed("block")
        } else {
            const res = await axios.patch(
                'http://localhost:8000/user/' + id, {
                    username: username,
                    fullName: fullName,
                    phoneNumber: +phoneNumber
                }
            );

            if (res.status === 200) {
                window.localStorage.removeItem('username');
                window.localStorage.removeItem('email');
                window.localStorage.removeItem('fullName');
                window.localStorage.removeItem('phoneNumber');
                window.localStorage.setItem('username', username);
                window.localStorage.setItem('fullName', fullName);
                window.localStorage.setItem('phoneNumber', phoneNumber);
                setChangeSuccessfull("block");
            }
            
        }
   };

   const classNotificationFailed = ` ${notificationFailed} max-sm:px-[12px] flex items-center justify-center fixed z-55 top-0 bottom-0 bg-[#0000004d] right-0 left-0`;
   const classChangePasswordSuccessfull = ` ${changeSuccessfull} max-sm:px-[12px] flex items-center justify-center fixed z-55 top-0 bottom-0 bg-[#0000004d] right-0 left-0`;

   const handleClose = () => {
        setNotificationFailed("hidden")
   };

   const handleNextPage = () => {
        setChangeSuccessfull("block");
        Navigate('/user/' + id);
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
                        <h1 className='text-[30px] font-bold'>USER PROFILE</h1>
                        <BiSolidUser className='text-[35px]' />
                    </div>
                </div>
                <div className='lg:w-[1140px] lg:mx-auto lg:pb-[50px] flex max-sm:flex-col'>
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
                        <div className='flex flex-col gap-[10px] mb-[30px]'>
                            <span className='font-bold'>Username</span>
                            <input
                                onChange={(e) => setUsername(e.target.value)}
                                type='text'
                                className='p-[10px_40px_10px_40px] border rounded-[10px] shadow-[0_1px_2px_0_rgba(48,56,64,0.16)] w-[100%]'></input>
                        </div>
                        <div className='flex flex-col gap-[10px] mb-[30px]'>
                            <span className='font-bold'>Full Name</span>
                            <input
                                onChange={(e) => setFullName(e.target.value)}
                                type='text'
                                className='p-[10px_40px_10px_40px] border rounded-[10px] shadow-[0_1px_2px_0_rgba(48,56,64,0.16)] w-[100%]'></input>
                        </div>
                        <div className='flex flex-col gap-[10px] mb-[30px]'>
                            <span className='font-bold'>Phone Number</span>
                            <input
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                type='number'
                                className='p-[10px_40px_10px_40px] border rounded-[10px] shadow-[0_1px_2px_0_rgba(48,56,64,0.16)] w-[100%]'></input>
                        </div>
                        <div className='max-sm:mb-[35px]'>
                            <button
                                type='button'
                                onClick={editDateUser}
                                className='p-[10px_50px] rounded-[10px] bg-[#FA6E4F] text-[#fff] font-semibold'>
                                Save Change
                            </button>
                        </div>
                    </div>

                    <div className={classNotificationFailed}>
                        <div className='flex flex-col justify-center gap-[25px] bg-[#fff] lg:p-[26px_122px_26px_122px] max-sm:p-[26px_25px_26px_25px]'>
                            <div className='flex flex-col items-center gap-[15px]'>
                                <CgDanger className='text-[100px] text-[#CC1914]' />
                                <p className='max-sm:text-center max-sm:text-[20px] lg:text-[25px] font-bold text-[#000] max-sm:w-[100%]'>Please enter the information you want to change!</p>
                            </div>
                            <div className='flex justify-center gap-[10px]'>
                                <button
                                    type='button'
                                    onClick={handleClose}
                                    className='max-sm:p-[5px_20px_5px_20px] bg-[#F7EA00] lg:p-[5px_15px_5px_15px] font-medium text-[#000] rounded-[5px]'>
                                    <p className='font-bold'>Close</p>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className={classChangePasswordSuccessfull}>
                        <div className='flex flex-col justify-center gap-[25px] bg-[#fff] lg:p-[26px_122px_26px_122px] max-sm:p-[26px_25px_26px_25px]'>
                            <div className='flex flex-col items-center gap-[15px]'>
                                <BsCheckCircle className='text-[100px] text-[#349E81]' />
                                <p className='max-sm:text-center max-sm:text-[20px] lg:text-[25px] font-bold text-[#595959]'>Changed password successfully.</p>
                            </div>
                            <div className='flex justify-center gap-[10px]'>
                                <button
                                    type='button'
                                    onClick={handleNextPage}
                                    className='max-sm:p-[5px_20px_5px_20px] bg-[#A99A2D] lg:p-[5px_15px_5px_15px] font-medium text-[#fff] rounded-[5px]'>
                                    OK
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default UserInformation