import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AiOutlineRight, AiFillCaretRight} from 'react-icons/ai';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {PiNumberCircleOne, PiNumberCircleTwo, PiNumberCircleThree, PiNumberCircleFour} from 'react-icons/pi';

function ViewCart() {
    const carts = useSelector((state) => state.cart.carts);
    const dispatch = useDispatch();
    // const [item, setItem] = useState(carts);
    // console.log(item);

    return (
        <div>
            <Header />
            <div className='h-full mt-[70px] w-full'>
                <div className='w-full'>

                    {carts.length ? carts.map((item) => (
                                <div key={item.id}>
                                    <p>{item.nameProduct}</p>
                                </div>
                            )) : (
                        <div className='pb-[80px] h-auto bg-[#f8f8f8]'>
                            <div className=''>
                                <div className='w-[1140px] mx-auto'>
                                    <div className='flex items-center gap-[10px] p-[10px_0_15px_0] w-full'>
                                        <Link to={'/'} className=''>
                                            <h1 className='text-[#262626]'>HOME</h1>
                                        </Link>
                                        <AiOutlineRight className='text-[#CDCDCD]'/>
                                        <p className='font-bold'>SHOPPING CART</p>
                                    </div>
                                </div>
                            </div>
                            <div className='bg-[#F0F0F0]'>
                                <div className='w-[1140px] mx-auto'>
                                    <div className='w-full flex justify-center py-[50px]'>
                                        <h1 className='text-[40px] text-[#303840] font-bold'>SHOPPING CART</h1>
                                    </div>
                                </div>
                                <div className='flex w-[1140px] mx-auto bg-[#f8f8f8]'>
                                    <div className='relative flex justify-center items-center gap-[15px] w-[25%] py-[20px] bg-[#384450]'>
                                        <PiNumberCircleOne className='text-[25px] text-[#fff]'/>
                                        <span className='text-[#fff]'>SHOPPING CART</span>
                                        {/* <AiFillCaretRight className='absolute right-[-64px] text-[93px] text-[#384450]'/> */}
                                    </div>
                                    <div className='flex justify-center items-center w-[25%]'>
                                        <PiNumberCircleTwo className='text-[20px]'/>
                                        <span>SHOPPING CART</span>
                                    </div>
                                    <div className='flex justify-center items-center w-[25%]'>
                                        <PiNumberCircleThree className='text-[20px]'/>
                                        <span>SHOPPING CART</span>
                                    </div>
                                    <div className='flex justify-center items-center w-[25%]'>
                                        <PiNumberCircleFour className='text-[20px]'/>
                                        <span>SHOPPING CART</span>
                                    </div>
                                </div>
                            </div>
                            <div className='w-[1140px] mx-auto bg-[#fff] p-[40px_40px_20px_40px] shadow-[0_1px_2px_0_rgba(48,56,64,0.16)]'>
                                <div>
                                    <div className='p-[18px_23px_18px_23px] bg-[rgba(248,40,136,0.08)] text-center'>
                                        <h1 className='text-[#f82888] font-medium'>Cart is empty.</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </div>

    )
}

export default ViewCart