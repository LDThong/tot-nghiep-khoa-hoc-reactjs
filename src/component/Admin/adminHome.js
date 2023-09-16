import React from 'react';
import NavAdmin from '../Admin/navAdmin';
import HeaderAdmin from '../Admin/headerAdmin'

function adninHome() {
  return (
    <div className='flex h-auto w-full'>
        <div className='w-1/5'>
          <NavAdmin />
        </div>
        <div className='h-full w-4/5 bg-[#F8F8F8]'>
          <HeaderAdmin />
        </div>
    </div>
  )
}

export default adninHome