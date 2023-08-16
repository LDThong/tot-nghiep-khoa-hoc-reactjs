import React, { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import { HomeContext } from '../../context/HomeContext';



function Header() {
  const { list, setList } = useContext(HomeContext);
  const listnew = [];
  const getData = async () => {
    const response = await axios.get(
      'http://localhost:8000/user',
    );

    if (response.status === 200) {
      const sortDec = [...response.data].sort((a, b) => b.id - a.id);
      setList(sortDec);
    }
  };

  useEffect(() => {
    getData();
  }, []);
    return (
        <div>
            <div className='flex flex-row justify-center items-center w-full fixed top-0 left-0 right-0 z-50' id='pagetop'>
                <div className='flex  container justify-between bg-[#02021E] h-[70px] px-[24px]'>
                    <div className='flex flex-row  gap-[20px] items-center w-full h-full'>
                        <div className='h-full'>

                            <img src='/images/logo.png' className='h-full'></img>
                        </div>
                        <div className='relative w-2/5'>
                            <form className='flex flex-row items-center w-full'>
                                <input className='w-full px-[16px] py-[8px] border rounded-[18px] text-[12.2px] border-gray bg-[#f8f8f8]' type='search' placeholder='SEARCH'></input>
                                <a className='flex items-center absolute top-0 right-0 text-black cursor-pointer w-[36px] h-full'>
                                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                                </a>
                            </form>
                        </div>
                    </div>

                    <div className='flex flex-row items-center gap-[30px] h-full'>
                        <div className='flex flex-row items-center gap-[30px] h-full'>
                            <div className='flex items-center h-full'>
                                <a className='flex items-center border-b-4 border-transparent border-solid h-full text-[#fff] hover:border-[#454c53] cursor-pointer'>FRANCHISES</a>
                            </div>
                            <div className='flex items-center h-full'>
                                <a className='flex items-center border-b-4 border-transparent border-solid h-full text-[#fff] hover:border-[#454c53] cursor-pointer'>SHOPS</a>
                            </div>
                        </div>
                        <a className='relative border-l border-[#e8e8e8] pl-[24px] py-[8px] cursor-pointer'>
                            <FontAwesomeIcon icon={faCartShopping} className='text-[#fff] text-[18px]' />
                            <span className='absolute top-[-2px] left-[35px] bg-[#F82888] rounded-[20px] min-w-[30px] max-h-[25px] text-center text-[15px] text-[#fff]'>0</span>
                        </a>
                        <Link to="/login">
                            <div className='relative aaa'>
                                <a className='px-[24px] py-[8px] cursor-pointer'>
                                    <FontAwesomeIcon icon={faUser} className='text-[#fff] text-[20px]' />
                                </a>
                                <div className="a-tooltip--type-2  ">SIGN IN</div>
                            </div>
                        </Link>

                    </div>

                </div>
            </div>
            {/* <div className='mt-[100px]'>
        {list.map((item) => (
          <div key={item.id}>
            {item.name}<br></br>
            {item.price}
          </div>
        ))}
      </div> */}
        </div>
    )
}

export default Header