import React from 'react';
import { BsSearch } from 'react-icons/bs';
import {TbLogout} from 'react-icons/tb';

function headerAdmin() {
  return (
    <div className='w-full'>
        <div className='p-[30px_40px_30px_40px]'>
          <div className='flex justify-between w-full'>
            <div className='relative w-3/5'>
              <input className='w-full px-[16px] py-[20px] border-none rounded-[18px] text-[12.2px] border-gray bg-[#EFF4FC]' type='search' placeholder='SEARCH'></input>
              <a>
                <BsSearch className='absolute top-5 right-5 text-[20px]' />
              </a>
            </div>

            <div className='flex justify-end w-1/5'>
              <button className='gap-[30px] w-full h-full rounded-[18px] bg-[#EFF4FC]'>
                <div className='flex justify-center items-center h-full gap-[20px]'>
                  <div>
                    <TbLogout className='text-[30px] text-[#FE8063]'/>
                  </div>
                  <h1 className='font-bold text-[20px]'>Log Out</h1>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default headerAdmin