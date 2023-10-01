import React, { useEffect, useState } from 'react';
import NavAdmin from './NavAdmin';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function EditUserInfo() {
    const {id} = useParams();
    const Navigate = useNavigate();
    const [dataUser, setDataUser] = useState([]);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const getDataUser = async () => {
        const response = await axios.get(
            'http://localhost:8000/user/' + id,
        );

        if (response.status === 200) {
            setDataUser(response.data);
        };
    };

    const editInfoUser = async () => {
        const res = await axios.patch(
            'http://localhost:8000/user/' + id, {
                email: email,
                username: username,
                fullName: fullName,
                phoneNumber: phoneNumber,
            }
        );

        if (res.status === 200) {
            Navigate('/admin/home/usermanagements/')
        }
    };

    const nextChangePassword = (id) => {
        Navigate('/admin/home/editpassword/' + id);
    }

    useEffect(() => {
        getDataUser();
    }, []);

  return (
    <div className='bg-[#F8F8F8]'>
        <NavAdmin />
        <div className='mt-[120px] h-[625px]'>
            <div>
                {dataUser && (
                    <div className='flex justify-evenly w-full py-[40px]'>
                          <div className='flex flex-col gap-[20px] w-[20%]'>
                              <div className='flex justify-center'>
                                  <div className='border w-[100%] text-center px-[20px] py-[10px] border rounded-[10px] bg-[#fff]'>
                                      <p>{dataUser.username}</p>
                                  </div>
                              </div>
                              <div className='flex justify-center'>
                                  <div className='border w-[100%] text-center px-[20px] py-[10px] border rounded-[10px] bg-[#fff]'>
                                      <p>{dataUser.email}</p>
                                  </div>
                              </div>
                              <div className='flex justify-center gap-[10px]'>
                                  <div className='flex justify-center gap-[10px] w-[100%] px-[20px] py-[10px] border rounded-[10px] bg-[#fff]'>
                                      {dataUser.fullName ? (
                                          <div>
                                              <p>{dataUser.fullName}</p>
                                          </div>
                                      ) : (
                                          <div>
                                              <p className='text-[#FE0004] font-semibold'>Not Update</p>
                                          </div>
                                      )}
                                  </div>
                              </div>
                              <div className='flex justify-center gap-[10px]'>
                                  <div className='flex justify-center gap-[10px] w-[100%] px-[20px] py-[10px] border rounded-[10px] bg-[#fff]'>
                                      {dataUser.phoneNumber ? (
                                          <div>
                                              <p>{dataUser.phoneNumber}</p>
                                          </div>
                                      ) : (
                                          <div>
                                              <p className='text-[#FE0004] font-semibold'>Not Update</p>
                                          </div>
                                      )}
                                  </div>
                              </div>
                          </div>

                          <div className='w-[20%]'>
                                <form className='flex flex-col gap-[20px]'>
                                    <div className='w-full'>
                                      <input
                                          name='nameProduct'
                                          onChange={(e) => setUsername(e.target.value)}
                                          className='px-[20px] py-[10px] w-[100%] border rounded-[10px]' placeholder='Username'>
                                      </input>
                                    </div>
                                    <div className='w-full'>
                                      <input
                                          name='email'
                                          onChange={(e) => setEmail(e.target.value)}
                                          className='px-[20px] py-[10px] w-[100%] border rounded-[10px]' placeholder='Email'>
                                      </input>
                                    </div>
                                    <div className='w-full'>
                                      <input
                                          name='fullName'
                                          onChange={(e) => setFullName(e.target.value)}
                                          className='px-[20px] py-[10px] w-[100%] border rounded-[10px]' placeholder='Full Name'>
                                      </input>
                                    </div>
                                    <div className='w-full'>
                                      <input
                                          name='phoneNumber'
                                          onChange={(e) => setPhoneNumber(e.target.value)}
                                          className='px-[20px] py-[10px] w-[100%] border rounded-[10px]' placeholder='Phone Number'>
                                      </input>
                                    </div>
                                </form>
                          </div>
                    </div>
                )}
                <div className='flex justify-end w-[60%] gap-[25px] mx-auto '>
                    <button
                        onClick={editInfoUser}
                        className='p-[10px_50px] bg-[#1877F2] text-[#fff] font-bold rounded-[10px]'>
                        Save Change
                    </button>
                    <button
                        onClick={() => nextChangePassword(id)}
                        className='p-[10px_50px] bg-[#6D4AFF] text-[#fff] font-bold rounded-[10px]'>
                        Change Password
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EditUserInfo