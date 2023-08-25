import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { HomeContext } from '../../context/HomeContext'
import axios from 'axios';
import { AuthContext } from '../../context/authContext';

function Login() {
    const {list, setList} = useContext(HomeContext);
    const navigate = useNavigate();
    const {state, setState} = useContext(AuthContext);
    const [userState, setUserState] = useState('')
    const [email,setEmail] = useState('')

    const getData = async () => {
        const response = await axios.get(
            'http://localhost:8000/user',
        );

        if (response.status === 200) {
            setList(response.data);
        }
    };

    const onLogin = (event) => {
        event.preventDefault();
        console.log(list);
        const data = {
            email: email,
            password: event.target.password.value,
        };
        console.log(data);

        const foundUser = list.find(user => user.email === data.email && user.password === data.password);
        
        
        if (foundUser) {
            alert('Login successful');
            window.localStorage.setItem('email', email);
            setState(foundUser);
            navigate('/')
            
        } else {
            alert('Login failed');
        }
    }
    
    useEffect(() => {
        getData();
    }, [])

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
                                    <p className='text-[24px] font-bold'>Masuk</p>
                                    <span className='text-[16px] font-normal text-[#0098EA]'>List</span>
                                </div>
                                <form className='flex flex-col gap-[16px] w-full' onSubmit={onLogin}>
                                    <div className='w-full leading-[40px]'>
                                        <input  required
                                            type='email'
                                            name='email'
                                            onChange={(e)=>setEmail(e.target.value)}
                                            className='bg-[#fff] w-full text-[14px] p-[0_16px_0_14px] rounded-[4px] border-solid border-[#D0D0D0] border'
                                            placeholder='Email' />
                                    </div>
                                    <div className='w-full leading-[40px]'>
                                        <input
                                            type='password'
                                            name='password'
                                            className='bg-[#fff] w-full text-[14px] p-[0_16px_0_14px] rounded-[4px] border-solid border-[#D0D0D0] border'
                                            placeholder='Password' />
                                    </div>
                                    <div className='w-full h-[4px]'></div>
                                    <div className='w-full'>
                                        <button
                                            type='submit'
                                            className='px-[24px] py-[12px] rounded-[8px] font-bold text-[16px] text-[#fff] bg-[#1877F2] w-full'>
                                            Login
                                        </button>
                                    </div>
                                    <Link to={'/register'}>
                                        <div className='w-full'>
                                            <button
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

export default Login