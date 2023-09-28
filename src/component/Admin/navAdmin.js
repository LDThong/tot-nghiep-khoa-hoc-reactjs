import React, { useState } from 'react';
import { HiHome } from 'react-icons/hi';
import { HiUsers } from 'react-icons/hi';
import { FaCartShopping } from 'react-icons/fa6';
import { PiListFill } from 'react-icons/pi';
import { BiCartAdd } from 'react-icons/bi';
import { IoNewspaper } from 'react-icons/io5';
import './AdminCss.css';
import { TbLogout } from 'react-icons/tb';
import {FaCircleXmark} from 'react-icons/fa6';
import { Link } from 'react-router-dom';

function navAdmin() {
  const [selectPage, setSelectPage] = useState("hidden");

  const selectProductPage = () => {
    setSelectPage("block")
  };

  const handleX = () => {
    setSelectPage("hidden");
  }

  const pageP = ` ${selectPage} flex items-center justify-center fixed z-55 top-0 bottom-0 bg-[#0000004d] right-0 left-0 `;

  return (
    <div className='h-hull w-full bg-[#4D5E9B] fixed top-0 left-0 right-0 z-50'>
      <div className='flex justify-between w-[1140px] mx-auto h-full '>
        <div className='flex py-[30px]'>
          <div className='flex items-center justify-center gap-[20px] w-full'>
            <div className=''>
              <img className='w-[60px] rounded-[8px]' src='/images/logo.png'></img>
            </div>
            <div>
              <p className='font-bold text-[#fff]'>Productly</p>
            </div>
          </div>
        </div>

        <div className='flex items-center gap-[50px] '>
          <Link to={'/admin/home/'}>
            <div className='flex items-center gap-[10px]'>
              <HiHome className='text-[25px] text-[#A0A9CB]' />
              <p className='text-[#A0A9CB]'>Home</p>
            </div>
          </Link>
          <Link to={'/admin/home/usermanagements/'}>
            <div className='flex items-center gap-[10px]'>
              <HiUsers className='text-[25px] text-[#A0A9CB]' />
              <p className='text-[#A0A9CB]'>Customer</p>
            </div>
          </Link>
          <div 
            onClick={selectProductPage}
            className='flex gap-[10px]'>
            <FaCartShopping className='text-[25px] text-[#A0A9CB]' />
            <p className='text-[#A0A9CB]'>Products</p>
          </div>
            <div className={pageP}>
              <div className='flex items-center justify-center relative gap-[25px] bg-[#fff] p-[75px_100px_75px_100px] rounded-[15px]'>
                <Link to={'/admin/home/listproduct'} className='p-[15px_30px_15px_30px] bg-[#96BF49] rounded-[25px]'>
                  <div className='flex items-center gap-[10px]'>
                    <PiListFill className='text-[20px] text-[#fff]' />
                    <p className='text-[#fff]'>List Products</p>
                  </div>
                </Link>
                <Link to={'/admin/home/addproduct'} className='p-[15px_30px_15px_30px] bg-[#96BF49] rounded-[25px]'>
                  <div className='flex items-center gap-[10px]'>
                    <BiCartAdd className='text-[20px] text-[#fff]' />
                    <p className='text-[#fff]'>Add Product</p>
                  </div>
                </Link>
                <div 
                  onClick={handleX}
                  className='absolute top-[15px] right-[15px]'>
                  <FaCircleXmark className='text-[35px] text-red-500'/>
                </div>
              </div>
            </div>
          <Link to={'/admin/home/listorder/'}>
            <div className='flex items-center gap-[10px]'>
              <IoNewspaper className='text-[25px] text-[#A0A9CB]' />
              <p className='text-[#A0A9CB]'>Order</p>
            </div>
          </Link>
          <Link to={'/admin/'} className='p-[15px_25px_15px_25px] w-full rounded-[18px] bg-[#EFF4FC] hover:bg-[#D63131] hover:text-[#fff]'>
            <button className='flex justify-center items-center h-full gap-[20px]'>
              <TbLogout className='text-[30px] text-[#FE8063]  hover:text-[#fff]' />
              <h1 className='font-bold text-[20px]'>Log Out</h1>
            </button>
          </Link>
        </div>
      </div>

      
    </div>
  )
}

export default navAdmin                                        