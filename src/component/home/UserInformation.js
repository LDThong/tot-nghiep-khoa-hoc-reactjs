import React, { useContext, useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import { AuthContext } from '../../context/authContext';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {BiSolidUser} from 'react-icons/bi';

function UserInformation() {
    const {id} = useParams();
    const [user, setUser] = useState([]);
    const [ name, setName] = useState([]);

    const getData = async () => {
        const response = await axios.get(
            'http://localhost:8000/user/' + id
        );

        if (response.status === 200) {
            setUser(response.data);
        };
    };

    const editChange = () => {
        
    }

    useEffect(() => {
        getData();
    }, []);

  return (
    <div>
        <Header />
        <div className='mt-[70px] h-full w-full'>
            <div className='w-[1140px] mx-auto'>
                <div className='flex items-center justify-center gap-[20px] py-[40px]'>
                    <h1 className='text-[30px] font-bold'>USER PROFILE</h1>
                    <BiSolidUser className='text-[35px]'/>
                </div>
                <div className='pb-[50px]'>
                    {user && (
                        <div className='flex flex-col items-center'>
                            <div className='flex flex-col gap-[10px] w-[50%] mb-[40px]'>
                                <span>User Name</span>
                                <div className='p-[10px_40px_10px_40px] border rounded-[10px] bg-[#FBFBFB]'>
                                    <p className='font-bold'>{user.username}</p>
                                </div>
                            </div>
                            <div className='flex flex-col gap-[10px] w-[50%] mb-[40px]'>
                                <span>Email Address</span>
                                <div className='p-[10px_40px_10px_40px] border rounded-[10px] bg-[#FBFBFB]'>
                                    <p className='font-bold'>{user.email}</p>
                                </div>
                            </div>
                            <div className='flex justify-end w-1/2'>
                                <button 
                                    type='button'
                                    onClick={editChange}
                                    className='p-[10px_50px] rounded-[10px] bg-[#FD612A] text-[#fff]'>
                                    Change
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