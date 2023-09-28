import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Register() {
    const navigate = useNavigate();
    const [listUser, setListUser] = useState([]);
    const [emailRS, setEmailRS] = useState('');
    const [userNameRS, setUserNameRS] = useState('');
    const [passwordRS, setPasswordRS] = useState('');
    const [rePassword, setRePassword] = useState('');

    const getData = async () => {
        const res = await axios.get(
            'http://localhost:8000/user'
        );

        if (res.status === 200) {
            setListUser(res.data);
        };
    };

    const postData = async () => {
        const emailUser = listUser.map((item) => item.email);

        let check = true;

        if (emailRS === '' || userNameRS === '') {
            alert('Please enter complete information !!')
        } 
        else {
            for (let i = 0; i < emailUser.length; i++) {
                if (emailUser[i] === emailRS) {
                    alert("Email already exists. Please enter another email !!");
                    check = false;
                    break;
                } 
            }

            if (check) {
                if (passwordRS === '' || rePassword === '') {
                    alert("Please enter password !!");
                } else {
                    if (passwordRS === rePassword) {
                        const response = await axios.post(
                            'http://localhost:8000/user',
                            {
                                email: emailRS,
                                username: userNameRS,
                                password: passwordRS,
                                fullName: "",
                                phoneNumber: "",
                                role: "User",
                            }
                        );
    
                        if (response.status === 201) {
                            navigate('/login');
                        }
    
                    } else {
                        alert('Password does not match')
                    }

                }
            }
        }
    }

    useEffect(()=>{
        getData();
    },[])

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
                            lg:w-3/5 max-sm:w-[95%] max-sm:shadow-[0px_1px_2px_rgba(48,56,64,.16)]s'>
                            <div className='flex flex-col items-center gap-[24px]'>
                                <div className='flex items-center justify-between w-full'>
                                    <p className='text-[24px] font-bold'>MEMBER REGISTRATION</p>
                                    <span className='lg:block max-sm:hidden text-[16px] font-normal text-[#0098EA]'>List</span>
                                </div>
                                <form className='flex flex-col gap-[16px] w-full' >
                                    <div className='w-full leading-[40px]'>
                                        <input
                                            type='email'
                                            name='email'
                                            onChange={(e) => setEmailRS(e.target.value)}
                                            className='bg-[#fff] w-full text-[14px] p-[0_16px_0_14px] rounded-[4px] border-solid border-[#D0D0D0] border'
                                            placeholder='Email' />
                                    </div>
                                    <div className='w-full leading-[40px]'>
                                        <input
                                            type='text'
                                            name='username'
                                            onChange={(e) => setUserNameRS(e.target.value)}
                                            className='bg-[#fff] w-full text-[14px] p-[0_16px_0_14px] rounded-[4px] border-solid border-[#D0D0D0] border'
                                            placeholder='Username' />
                                    </div>
                                    <div className='w-full leading-[40px]'>
                                        <input
                                            type='password'
                                            name='password'
                                            onChange={(e) => setPasswordRS(e.target.value)}
                                            className='bg-[#fff] w-full text-[14px] p-[0_16px_0_14px] rounded-[4px] border-solid border-[#D0D0D0] border'
                                            placeholder='Password' />
                                    </div>
                                     <div className='w-full leading-[40px]'>
                                        <input
                                            type='password'
                                            name='repassword'
                                            onChange={(e) => setRePassword(e.target.value)}
                                            className='bg-[#fff] w-full text-[14px] p-[0_16px_0_14px] rounded-[4px] border-solid border-[#D0D0D0] border'
                                            placeholder='Re-enter password' />
                                    </div>
                                    <div className='w-full h-[4px]'></div>
                                    <div className='w-full'>
                                        <button
                                            type='button'
                                            onClick={postData}
                                            className='px-[24px] py-[12px] rounded-[8px] font-bold text-[16px] text-[#fff] bg-[#00A400] w-full'>
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
                <div className='lg:w-1/2 lg:p-[15px] lg:block max-sm:hidden'>
                    <img className='w-full rounded-[35px]' src='/images/logoLogin.png'></img>
                </div>
            </div>
        </div>
    )
}

export default Register