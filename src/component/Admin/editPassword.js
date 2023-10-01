import React, { useEffect, useState } from 'react';
import NavAdmin from './NavAdmin';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function editPassword() {
    const {id} = useParams();
    const [dataUser, setDataUser] = useState([]);
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [reEnterNewPassword, setReEnterNewPassword]= useState('');

    const getDataUser = async () => {
        const response = await axios.get(
            'http://localhost:8000/user/' + id,
        );

        if (response.status) {
            setDataUser(response.data)
        };
    };

    const handleSavePassword = async () => {
        if (oldPassword === '' || newPassword === '' || reEnterNewPassword === '') {
            alert("Can not be empty. Please enter a password!")
        } else {
            if (oldPassword === dataUser.password) {
                if (newPassword === reEnterNewPassword) {
                    const res = await axios.patch(
                        'http://localhost:8000/user/' + id, {
                            password: newPassword,
                        }
                    );
    
                    if (res.status === 200) {
                        alert("Change Password Successfully");
                        Navigate("/admin/home/usermanagements/");
                    }
                } else (
                    alert("The new password does not match!")
                )
            } else (
                alert("The old password is incorrect!")
            )
        }
    }

    useEffect(() => {
        getDataUser();
    }, []);

    return (
        <div className='bg-[#F8F8F8]'>
            <NavAdmin />
            <div className='mt-[120px] h-[625px]'>
                <div className='flex flex-col gap-[30px] w-[30%] mx-auto py-[40px]'>
                    <input
                        type='password'
                        onChange={(e) => setOldPassword(e.target.value)}
                        className='px-[20px] py-[10px] w-[100%] border rounded-[10px]'
                        placeholder='Old Password'>
                    </input>
                    <input
                        type='password'
                        onChange={(e) => setNewPassword(e.target.value)}
                        className='px-[20px] py-[10px] w-[100%] border rounded-[10px]'
                        placeholder='New Password'>
                    </input>
                    <input
                        type='password'
                        onChange={(e) => setReEnterNewPassword(e.target.value)}
                        className='px-[20px] py-[10px] w-[100%] border rounded-[10px]'
                        placeholder='Re-enter New Password'>
                    </input>
                    <div className='w-full text-right'>
                        <button
                            onClick={handleSavePassword}
                            className='p-[10px_50px] bg-[#6D4AFF] text-[#fff] w-[50%] font-bold rounded-[10px]'>
                            Save Password
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default editPassword