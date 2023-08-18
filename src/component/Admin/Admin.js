import React, { useContext, useEffect } from 'react';
import './AdminCss.css'
import { HomeContext } from '../../context/HomeContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Admin() {
    const { list, setList} = useContext(HomeContext);
    const navigate = useNavigate();

    const getData = async () => {
        const response = await axios.get(
            'http://localhost:8000/admin'
        );

        if (response.status === 200) {
            setList(response.data)
        };
    };

    const onLoginAdmin = (event) => {
        event.preventDefault();
        const data = {
            email: event.target.email.value,
            password: event.target.password.value,
        }

        const foundUser = list.find(user => user.email === data.email && user.password === data.password)

        if (foundUser) {
            navigate('/admin/home');
        } else {
            alert('Login Failed')
        }
    }

    useEffect(() => {
        getData();
    }, [])

  return (
    <div className='Admin'>
        <div className='flex items-center justify-center h-screen'>
            <div className='border border-solid border-[#fff] rounded-[8px] w-1/2 text-center'>
                <form className='flex flex-col gap-[30px] items-center form-admin' onSubmit={onLoginAdmin}>
                    <div className='p-[20px_0_0_0]'>
                        <h1 className='text-yellow-400 text-[42px] font-bold'>Admin Login</h1>
                    </div>
                    <div className='w-4/5 p-[0_0_0px_0] text-center'>
                        <input 
                            name='email'
                            type='email' 
                            className='border-[1px] border-solid border-black rounded-[8px] p-[10px_0_10px_15px] w-full' 
                            placeholder='Enter Email Admin'></input>
                    </div>
                    <div className='w-4/5 p-[0_0_0px_0]'>
                        <input 
                            name='password'
                            type='password' 
                            className='border-[1px] border-solid border-black rounded-[8px] p-[10px_0_10px_15px] w-full' 
                            placeholder='Enter Password Admin'></input>
                    </div>
                    <div className='p-[10px_0_40px_0]'>
                        <button 
                            type='submit'
                            className='bg-[#000] p-[10px_50px_10px_50px] border border-solid border-black rounded-[8px] font-bold text-[18px] text-yellow-400'>
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Admin