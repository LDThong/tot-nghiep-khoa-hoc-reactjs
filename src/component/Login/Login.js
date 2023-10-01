import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { AuthContext } from '../../context/authContext';
import {CgDanger} from 'react-icons/cg';

function Login() {
    const [list, setList] = useState([]);
    const navigate = useNavigate();
    const {state, setState} = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [notificationFailed, setNotificationFailed] = useState("hidden");

    const getData = async () => {
        const response = await axios.get(
            'http://localhost:8000/user',
        );

        if (response.status === 200) {
            setList(response.data);
        }
    };

    const onLogin = () => {
        const foundUser = list.find(user => user.email === email && user.password === password);

        if (foundUser) {
            setState(foundUser);
            window.localStorage.setItem('username', foundUser.username);
            window.localStorage.setItem('id', foundUser.id);
            window.localStorage.setItem('email', foundUser.email);
            window.localStorage.setItem('fullName', foundUser.fullName);
            window.localStorage.setItem('phoneNumber', foundUser.phoneNumber)
            navigate('/')
        } else {
            setNotificationFailed("block")
        }
    };

    const classNotificationFailed = ` ${notificationFailed} flex items-center justify-center fixed z-55 top-0 bottom-0 bg-[#0000004d] right-0 left-0`;

    const handleClose = () => {
        setNotificationFailed("hidden")
    };
    
    useEffect(() => {
        getData();
    }, [])

    return (
        <div className='bg-[#F8F8F8]'>
            <div className='lg:container lg:flex lg:flex-row w-full lg:rounded-[16px] lg:p-[20px] '>
                <div className='lg:w-1/2 max-sm:w-full'>
                    <Link to={'/'}>
                        <div className='flex items-center h-[5%] max-sm:justify-center max-sm:py-[10px]'>
                            <img className='lg:w-1/5 max-sm:w-[35%] h-[55px] rounded-[15px]' src='/images/logoFooter.png'></img>
                        </div>
                    </Link>
                    <div className='flex flex-col h-[90%] justify-center items-center w-full'>
                        <div className='flex flex-col p-[30px_40px] gap-[24px] bg-[#fff] rounded-[25px]
                            lg:w-3/5 max-sm:w-[95%] max-sm:shadow-[0px_1px_2px_rgba(48,56,64,.16)]'>
                            <div className='flex flex-col items-center gap-[24px]'>
                                <div className='flex items-center justify-between w-full'>
                                    <p className='text-[24px] font-bold'>Login</p>
                                    <span className='lg:block max-sm:hidden text-[16px] font-normal text-[#0098EA]'>List</span>
                                </div>
                                <form className='flex flex-col gap-[16px] w-full'>
                                    <div className='w-full leading-[40px]'>
                                        <input  required
                                            type='email'
                                            name='email'
                                            onChange={(e) => setEmail(e.target.value)}
                                            className='bg-[#fff] w-full text-[14px] p-[0_16px_0_14px] rounded-[4px] border-solid border-[#D0D0D0] border'
                                            placeholder='Email' />
                                    </div>
                                    <div className='w-full leading-[40px]'>
                                        <input
                                            type='password'
                                            name='password'
                                            onChange={(e) => setPassword(e.target.value)}
                                            className='bg-[#fff] w-full text-[14px] p-[0_16px_0_14px] rounded-[4px] border-solid border-[#D0D0D0] border'
                                            placeholder='Password' />
                                    </div>
                                    <div className='w-full h-[4px]'></div>
                                    <div className='w-full'>
                                        <button
                                            type='button'
                                            onClick={onLogin}
                                            className='px-[24px] py-[12px] rounded-[8px] font-bold text-[16px] text-[#fff] bg-[#1877F2] w-full'>
                                            Login
                                        </button>
                                    </div>
                                    <Link to={'/register'}>
                                        <div className='w-full'>
                                            <button
                                                type='button'
                                                className='px-[24px] py-[12px] rounded-[8px] font-bold text-[16px] text-[#fff] bg-[#42B72A] w-full'>
                                                Register
                                            </button>
                                        </div>
                                    </Link>
                                    <div className='w-full h-[1px]'></div>
                                    <div className='flex flex-col gap-[24px]'>
                                        <div className='flex gap-[5px]'>
                                            <a className='text-[14px] text-[#515151]'>Forgot your password ?</a>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className='flex flex-row justify-center items-center w-full relative h-[40px]'>
                                <div className='w-full h-[1px] bg-[#D0D0D0]'></div>
                                <div className='flex items-center justify-center bg-[#fff] absolute p-[10px]'>
                                    <p className='text-[14px] text-[#D0D0D0]'>Other Ways To Sign In</p>
                                </div>
                            </div>
                            <div className='flex flex-col items-center gap-[16px]'>
                                <div className='flex items-start w-full'>
                                    <button className='flex justify-center items-center gap-[16px] px-[24px] py-[12px] rounded-[8px] w-full font-bold border-solid border-[#D0D0D0] border'>
                                        <img src='/images/icongoogle.png'></img>
                                        Google
                                    </button>
                                </div>
                                <div className='flex items-start w-full'>
                                    <button className='flex justify-center items-center gap-[16px] px-[24px] py-[12px] rounded-[8px] w-full font-bold border-solid border-[#D0D0D0] border'>
                                        <img src='/images/iconfacebook.png'></img>
                                        Facebook
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={classNotificationFailed}>
                        <div className='flex flex-col justify-center gap-[25px] bg-[#fff] lg:p-[26px_122px_26px_122px] max-sm:p-[30px_110px_30px_110px]'>
                            <div className='flex flex-col items-center gap-[15px]'>
                                <CgDanger className='text-[100px] text-[#CC1914]' />
                                <p className='max-sm:text-center max-sm:text-[20px] lg:text-[25px] font-bold text-[#000] max-sm:w-[100%]'>Login Failed!</p>
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
                    <div className='flex flex-col justify-center h-[5%]'>
                        <p className='text-[gray]'>© 2021 Travling. All Rights Reserved</p>
                    </div>
                </div>
                <div className='lg:w-1/2 lg:p-[15px] lg:block max-sm:hidden'>
                    <img className='w-full rounded-[35px]' src='/images/logoLogin.png'></img>
                </div>
            </div>
        </div>
    )
}

export default Login