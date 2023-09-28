import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import { PiNumberCircleOneFill, PiNumberCircleTwoFill, PiNumberCircleThreeFill } from 'react-icons/pi';
import { AiOutlineRight, AiOutlineDoubleRight } from 'react-icons/ai';
import {BsChevronCompactRight} from 'react-icons/bs';

function OrderComplete() {
    return (
        <div>
            <Header />
            <div className='mt-[70px] h-full w-full bg-[#f8f8f8]'>
                <div className='lg:w-[1140px] lg:mx-auto'>
                    <div className='flex items-center lg:gap-[10px] lg:p-[10px_0_15px_0] w-full
                            max-sm:p-[7px_12px_7px_12px] max-sm:gap-[5px]'>
                        <Link to={'/'} className=''>
                            <h1 className='text-[#262626] max-sm:text-[10px]'>HOME</h1>
                        </Link>
                        <AiOutlineRight className='text-[#CDCDCD] max-sm:text-[12px]' />
                        <Link to={'/viewcart/'}>
                            <p className='max-sm:text-[10px]'>SHOPPING CART</p>
                        </Link>
                        <AiOutlineRight className='text-[#CDCDCD] max-sm:text-[12px]' />
                        <p className='max-sm:text-[10px]'>ORDER DETAILS</p>
                        <AiOutlineRight className='text-[#CDCDCD] max-sm:text-[12px]' />
                        <p className='font-bold max-sm:text-[10px]'>ORDER COMPLETE</p>
                    </div>
                </div>
                <div className='bg-[#f0f0f0]'>
                    <div className='w-full flex justify-center lg:py-[50px] max-sm:py-[35px]'>
                        <h1 className='lg:text-[40px] max-sm:text-[30px] text-[#303840] font-bold'>SHOPPING CART</h1>
                    </div>
                    <div className='flex lg:w-[1140px] lg:mx-auto bg-[#f8f8f8] lg:items-center max-sm:px-[12px]'>
                        <div className='relative flex justify-center items-center gap-[15px] lg:w-[33.33333333333333%] max-sm:w-[25%] lg:py-[20px] max-sm:py-[15px] bg-[#384450]'>
                            <PiNumberCircleOneFill className='text-[25px] text-[#C8C8C8]' />
                            <span className='text-[#C8C8C8] lg:block max-sm:hidden'>SHOPPING CART</span>
                            <AiOutlineDoubleRight className='lg:block max-sm:hidden absolute right-[-64px] text-[95px] text-[#F0F0F0] z-[1]' />
                            <BsChevronCompactRight className='lg:hidden max-sm:block absolute right-[-30px] text-[75px] text-[#F0F0F0] z-[1]'/>
                        </div>
                        <div className='relative flex justify-center items-center gap-[15px] lg:w-[33.33333333333333%] max-sm:w-[25%] lg:py-[20px] max-sm:py-[15px] bg-[#384450]'>
                            <PiNumberCircleTwoFill className='text-[25px] text-[#C8C8C8]' />
                            <span className='text-[#C8C8C8] lg:block max-sm:hidden'>ORDER DETAILS</span>
                            <AiOutlineDoubleRight className='lg:block max-sm:hidden absolute right-[-64px] text-[95px] text-[#F0F0F0] z-[1]' />
                            <BsChevronCompactRight className='lg:hidden max-sm:block absolute right-[-30px] text-[75px] text-[#F0F0F0] z-[1]'/>
                        </div>
                        <div className='relative flex justify-center items-center lg:gap-[15px] lg:w-[33.33333333333333%] max-sm:w-[50%] lg:py-[20px] max-sm:py-[5px] bg-[#384450]
                                    max-sm:px-[15px]'>
                            <PiNumberCircleThreeFill className='text-[25px] text-[#fff]' />
                            <span className='text-[#fff] max-sm:text-center '>ORDER SUCCESS</span>
                        </div>
                    </div>
                    <div className='py-[50px] max-sm:px-[12px]'>
                        <div className='flex gap-[30px] lg:w-[1140px] lg:mx-auto bg-[#fff] border shadow-[0_1px_2px_0_rgba(48,56,64,0.16)] lg:p-[40px]
                            max-sm:flex-col max-sm:p-[12px_12px_40px_12px]'>
                            <div className='flex flex-col items-center gap-[20px] w-full max-sm:text-center'>
                                <h1 className='text-[50px] font-bold pb-[10px] '>Thank you for ordering</h1>
                                <p className='text-[#999AA9]'>Your order has been placed and is being processed.</p>
                                <Link to={'/'}>
                                    <div className='border-b-[2px] border-[#ED7F7B]'>
                                        <p className='text-[#ED7F7B]'>Back to homepage</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default OrderComplete