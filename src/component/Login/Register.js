import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Register() {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const postData = async (data) => {
        const response = await axios.post(
            'http://localhost:8000/user',
            {
                email: data.email,
                username: data.username,
                password: data.password
            }
        );

        if (response.status === 200) {
           
        }
    }

    const onSubmit = (event) => {
        event.preventDefault();

        const data = {
            email: event.target.email.value,
            username: event.target.username.value,
            password: event.target.password.value,
        }

        postData(data)
        console.log(data);
        alert("Sign Up Success");
        navigate('/login');

    }

    

    return (
        <div className='bg-[#F8F8F8]'>
            <div className='container flex flex-row w-full rounded-[16px] p-[20px] '>
                <div className='w-1/2'>
                    <Link to={'/'}>
                        <div className='flex items-center h-[5%]'>
                            <img className='w-1/5 h-[55px] rounded-[15px]' src='/images/logoFooter.png'></img>
                        </div>
                    </Link>
                    <div className='flex flex-col h-[90%] justify-center items-center w-full'>
                        <div className='flex flex-col p-[30px_40px] w-3/5 gap-[24px] bg-[#fff] rounded-[25px]'>
                            <div className='flex flex-col items-center gap-[24px]'>
                                <div className='flex items-center justify-between w-full'>
                                    <p className='text-[24px] font-bold'>MEMBER REGISTRATION</p>
                                    <span className='text-[16px] font-normal text-[#0098EA]'>Daftar</span>
                                </div>
                                <form className='flex flex-col gap-[16px] w-full' onSubmit={onSubmit}>
                                    <div className='w-full leading-[40px]'>
                                        <input
                                            type='email'
                                            name='email'
                                            value={email.email}
                                            className='bg-[#fff] w-full text-[14px] p-[0_16px_0_14px] rounded-[4px] border-solid border-[#D0D0D0] border'
                                            placeholder='Email' />
                                    </div>
                                    <div className='w-full leading-[40px]'>
                                        <input
                                            type='text'
                                            name='username'
                                            value={username.username}
                                            className='bg-[#fff] w-full text-[14px] p-[0_16px_0_14px] rounded-[4px] border-solid border-[#D0D0D0] border'
                                            placeholder='Username' />
                                    </div>
                                    <div className='w-full leading-[40px]'>
                                        <input
                                            type='password'
                                            name='password'
                                            value={password.password}
                                            className='bg-[#fff] w-full text-[14px] p-[0_16px_0_14px] rounded-[4px] border-solid border-[#D0D0D0] border'
                                            placeholder='Password' />
                                    </div>
                                    <div className='w-full h-[4px]'></div>
                                    <div className='w-full'>
                                        <button
                                            className='px-[24px] py-[12px] rounded-[8px] font-bold text-[16px] text-[#fff] bg-[#42A7C3] w-full'>
                                            Submit
                                        </button>
                                    </div>
                                    
                                    <div className='w-full h-[1px]'></div>
                                    
                                </form>
                            </div>
                            <div className='flex flex-row justify-center items-center w-full relative h-[40px]'>
                                <div className='w-full h-[1px] bg-[#D0D0D0]'></div>
                                <div className='flex items-center justify-center bg-[#fff] absolute p-[10px]'>
                                    <p className='text-[14px] text-[#D0D0D0]'>Other Ways to Register</p>
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
                    <div className='flex flex-col justify-center h-[5%]'>
                        <p className='text-[gray]'>© 2021 Travling. All Rights Reserved</p>
                    </div>
                </div>
                <div className='w-1/2 p-[15px]'>
                    <img className='w-full rounded-[35px]' src='/images/logoLogin.png'></img>
                </div>
            </div>
        </div>
    )
}

export default Register