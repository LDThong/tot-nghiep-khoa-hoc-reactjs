import React, { useContext, useEffect } from 'react';
import NavAdmin from './NavAdmin';
import { HomeContext } from '../../context/HomeContext';
import axios from 'axios';
import {AiFillDelete, AiTwotoneEdit} from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

function UserManagement() {
    const {list, setList} = useContext(HomeContext);
    const Navigate = useNavigate();

    const getDataUser = async () => {
        const response = await axios.get(
            'http://localhost:8000/user'
        );

        if (response.status === 200) {
            setList(response.data);
        };
    };

    const onDelete = async (id) => {
        let text = ('Are you sure you want to delete');

        if (window.confirm(text) === true) {
            const res = await axios.delete(
              'http://localhost:8000/user/' + id
            );
      
            if (res.status === 200) {
                alert('Delete id successful')
            };
            await getDataUser();
        };
    }

    const onEditUserInfo = (id) => {
        Navigate('/admin/home/edituserinfo/' + id);
    }

    useEffect(() => {
        getDataUser();
    }, []);

  return (
    <div className='bg-[#F8F8F8]'>
        <NavAdmin />
        <div className='mt-[120px] h-[625px] py-[20px]'>
            <div className='relative flex flex-col w-full h-[82%] px-[40px]'>
                <div className='border'>
                    <div className='flex flex-row w-full border-b'>
                        <div className='w-[5%] bg-[#fff] text-center py-[15px] font-bold text-[20px] bg-yellow-400'>
                            <h1>ID</h1>
                        </div>
                        <div className='w-[23%] bg-[#fff] text-center py-[15px] font-bold text-[20px] bg-yellow-400'>
                            <h1>Email</h1>
                        </div>
                        <div className='w-[12%] bg-[#fff] text-center py-[15px] font-bold text-[20px] bg-yellow-400'>
                            <h1>Password</h1>
                        </div>
                        <div className='w-[14%] bg-[#fff] text-center py-[15px] font-bold text-[20px] bg-yellow-400'>
                            <h1>Username</h1>
                        </div>
                        <div className='w-[15%] bg-[#fff] text-center py-[15px] font-bold text-[20px] bg-yellow-400'>
                            <h1>Full Name</h1>
                        </div>
                        <div className='w-[16%] bg-[#fff] text-center py-[15px] font-bold text-[20px] bg-yellow-400'>
                            <h1>Phone Number</h1>
                        </div>
                        <div className='w-[7%] bg-[#fff] text-center py-[15px] font-bold text-[20px] bg-yellow-400'>
                            <h1>Role</h1>
                        </div>
                        <div className='w-[8%] bg-[#fff] text-center py-[15px] font-bold text-[20px] bg-yellow-400'>
                            <h1>Edit</h1>
                        </div>
                    </div>
                    {list.map((item) => (
                        <div key={item} className='flex flex-row bg-[#fff] w-full'>
                            <div className='flex justify-center items-center px-[15px] w-[5%] border-r border-b'>
                                <p>{item.id}</p>
                            </div>
                            <div className='flex items-center px-[15px] w-[23%] border-r border-b'>
                                <p>{item.email}</p>
                            </div>
                            <div className='flex items-center px-[15px] w-[12%] border-r border-b'>
                                <input type='password' className='w-[100%] bg-[#fff]' value={item.password} disabled></input>
                            </div>
                            <div className='flex items-center px-[15px] w-[14%] border-r border-b'>
                                <p>{item.username}</p>
                            </div>
                            {item.fullName ? (
                                <div className='flex items-center px-[15px] w-[15%] border-r border-b'>
                                    <p>{item.fullName}</p>
                                </div>
                            ) : (
                                <div className='flex items-center px-[15px] w-[15%] border-r border-b'>
                                    <p className='text-[#FE0004] font-semibold'>Not Update</p>
                                </div>
                            )}
                            {item.phoneNumber ? (
                                <div className='flex items-center px-[15px] w-[16%] border-r border-b'>
                                    <p>{item.phoneNumber}</p>
                                </div>
                            ) : (
                                <div className='flex items-center px-[15px] w-[16%] border-r border-b'>
                                    <p className='text-[#FE0004] font-semibold'>Not Update</p>
                                </div>
                            )}
                            <div className='flex justify-center items-center px-[15px] w-[7%] border-r border-b'>
                                <p>{item.role}</p>
                            </div>
                            <div className='flex flex-col justify-center items-center gap-[5px] p-[10px_15px_10px_15px] w-[8%] border-r border-b'>
                                <button
                                    onClick={() => onDelete(item.id)}
                                    className='flex items-center gap-[5px] text-[#fff] bg-red-500 p-[5px] rounded-[20px]'>
                                    <AiFillDelete className='text-[15px] text-[#fff]'/>
                                    Delete
                                </button>
                                <button 
                                    onClick={() => onEditUserInfo(item.id)}
                                    className='flex items-center gap-[5px] text-[#fff] bg-[#22C55E] p-[5px_10px_5px_10px] rounded-[20px]'>
                                    <AiTwotoneEdit className='text-[20px] text-[#fff]'/>
                                    Edit
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default UserManagement 