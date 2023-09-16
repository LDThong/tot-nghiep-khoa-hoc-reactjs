import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import { PiNumberCircleOneFill, PiNumberCircleTwoFill, PiNumberCircleThreeFill } from 'react-icons/pi';
import { AiOutlineRight, AiOutlineDoubleRight } from 'react-icons/ai';


function OrderComplete() {
    return (
        <div>
            <Header />
            <div className='mt-[70px] h-full w-full bg-[#f8f8f8]'>
                <div className='w-[1140px] mx-auto'>
                    <div className='flex items-center gap-[10px] p-[10px_0_15px_0] w-full'>
                        <Link to={'/'} className=''>
                            <h1 className='text-[#262626]'>HOME</h1>
                        </Link>
                        <AiOutlineRight className='text-[#CDCDCD]' />
                        <Link to={'/viewcart/'}>
                            <p >SHOPPING CART</p>
                        </Link>
                        <AiOutlineRight className='text-[#CDCDCD]' />
                        <p className=''>ORDER DETAILS</p>
                        <AiOutlineRight className='text-[#CDCDCD]' />
                        <p className='font-bold'>ORDER COMPLETE</p>
                    </div>
                </div>
                <div className='bg-[#f0f0f0]'>
                    <div className='w-full flex justify-center py-[50px]'>
                        <h1 className='text-[40px] text-[#303840] font-bold'>SHOPPING CART</h1>
                    </div>
                    <div className='flex w-[1140px] mx-auto bg-[#f8f8f8] items-center'>
                        <div className='relative flex justify-center items-center gap-[15px] w-[33.33333333333333%] py-[20px] bg-[#384450]'>
                            <PiNumberCircleOneFill className='text-[25px] text-[#C8C8C8]' />
                            <span className='text-[#C8C8C8]'>SHOPPING CART</span>
                            <AiOutlineDoubleRight className='absolute right-[-64px] text-[95px] text-[#F0F0F0] z-[1]' />
                        </div>
                        <div className='relative flex justify-center items-center w-[33.33333333333333%] gap-[15px] py-[20px] bg-[#384450]'>
                            <PiNumberCircleTwoFill className='text-[25px] text-[#C8C8C8]' />
                            <span className='text-[#C8C8C8]'>ORDER DETAILS</span>
                            <AiOutlineDoubleRight className='absolute right-[-64px] text-[95px] text-[#F0F0F0] z-[1]' />
                        </div>
                        <div className='relative flex justify-center items-center w-[33.33333333333333%] gap-[15px] py-[20px] bg-[#384450]'>
                            <PiNumberCircleThreeFill className='text-[25px] text-[#fff]' />
                            <span className='text-[#fff]'>ORDER COMPLETE</span>
                        </div>
                    </div>
                    <div className='py-[50px]'>
                        <div className='flex gap-[30px] w-[1140px] mx-auto bg-[#fff] border shadow-[0_1px_2px_0_rgba(48,56,64,0.16)] p-[40px]'>
                            <div className='flex flex-col items-center gap-[20px] w-full'>
                                <h1 className='text-[50px] font-bold pb-[10px]'>Thank you for your order</h1>
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