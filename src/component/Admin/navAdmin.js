import React from 'react';
import { HiHome } from 'react-icons/hi';
import { HiUsers } from 'react-icons/hi';
import { FaCartShopping } from 'react-icons/fa6';
import { PiListFill } from 'react-icons/pi';
import { BiCartAdd } from 'react-icons/bi';
import { IoNewspaper } from 'react-icons/io5';
import './AdminCss.css';
import { Link } from 'react-router-dom';

function navAdmin() {
  return (
    <div className='w-full'>
      <div className='flex flex-col w-full h-screen bg-[#4D5E9B]'>
        <div className='flex flex-row w-full py-[30px]'>
          <div className='flex items-center justify-center gap-[20px] w-full'>
            <div className=''>
              <img className='w-[60px] rounded-[8px]' src='/images/logo.png'></img>
            </div>
            <div>
              <p className='font-bold text-[#fff]'>Productly</p>
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-[20px] pl-[20px]'>
          <div>
            <h1 className='font-bold text-[20px] text-[#fff]'>Management</h1>
          </div>
          <div className='flex items-center gap-[10px]'>
            <HiHome className='text-[25px] text-[#A0A9CB]' />
            <p className='text-[#A0A9CB]'>Home</p>
          </div>
          <div className='flex items-center gap-[10px]'>
            <HiUsers className='text-[25px] text-[#A0A9CB]' />
            <p className='text-[#A0A9CB]'>Customer</p>
          </div>
          <div className='flex flex-col gap-[15px] relative product'>
            <div className='flex gap-[10px]'>
              <FaCartShopping className='text-[25px] text-[#A0A9CB]' />
              <p className='text-[#A0A9CB]'>Products</p>
            </div>
            <div className='products'>
              <Link to={'/admin/home/listproduct'}>
                <div className='flex items-center gap-[10px]'>
                  <PiListFill className='text-[20px] text-[#A0A9CB]' />
                  <p className='text-[#A0A9CB]'>List Products</p>
                </div>
              </Link>
              <Link to={'/admin/home/addproduct'}>
                <div className='flex items-center gap-[10px]'>
                  <BiCartAdd className='text-[20px] text-[#A0A9CB]' />
                  <p className='text-[#A0A9CB]'>Add Product</p>
                </div>
              </Link>
            </div>
          </div>
          <div className='flex items-center gap-[10px]'>
            <IoNewspaper className='text-[25px] text-[#A0A9CB]' />
            <p className='text-[#A0A9CB]'>Order</p>
          </div>
        </div>

      </div>

      
    </div>
  )
}

export default navAdmin