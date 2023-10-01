import React from 'react';
import { Link } from 'react-router-dom';
import './App.css'

function Footer() {
    return (
        <div>
            <footer className=' bg-[#2a343d]'>
                <div className='bg-[#02021E]'>
                    <div className='flex items-center max-w-[1244px] mx-auto h-[48px] max-sm:px-[15px]'>
                        <a href='#' className=' backpagetop tracking-[.16em] font-bold w-full text-center text-[#fff] hover:text-[#c8c8c8]'>BACK TO SHOP</a>
                    </div>
                </div>

                <div className='footer'>
                    <div className='max-w-[1244px] mx-auto '>
                        <div className='flex lg:flex-row max-sm:flex-col gap-[43px] w-full lg:p-[55px_0_80px_0] max-sm:p-[35px_30px_50px_30px]'>
                            <div className='lg:hidden max-sm:block text-center w-full border-b border-solid border-[#384450] pb-[20px]'>
                                <p className='mb-[26px] text-[1.3rem] text-yellow-400 h-auto'>SOCIAL MEDIA</p>
                                <ul className='flex justify-center gap-[25px] '>
                                    <li className=''>
                                        <a className=''>
                                            <img className='h-[48px]' src='https://p-bandai.com/_ui/responsive/common/images/icon-instagram-fill.svg'></img>
                                        </a>
                                    </li>
                                    <li>
                                        <a className=''>
                                            <img className='h-[48px]' src='https://p-bandai.com/_ui/responsive/common/images/icon-facebook-fill.svg'></img>
                                        </a>
                                    </li>
                                    <li>
                                        <a className=''>
                                            <img className='h-[48px]' src='https://p-bandai.com/_ui/responsive/common/images/icon-twitter-fill.svg'></img>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className='w-1/4 lg:block max-sm:hidden'>
                                <a className='mb-[26px] block'>
                                    <Link to={'/'}>
                                        <img className='w-3/4 h-[75px] rounded-[15px]' src='/images/logoFooter.png'></img>
                                    </Link>
                                </a>
                                <p className='tracking-[.04em] text-[#c8c8c8] text-[14px] font-medium'>ĐT's OFFICIAL ONLINE STORE</p>
                            </div>
                            <div className='lg:w-1/4 max-sm:w-full lg:pt-[18px]'>
                                <p className='mb-[32px] text-[1.6rem] text-yellow-400'>Information</p>
                                <ul>
                                    <li className='information'>
                                        <a target='_blank'>About ĐT Toy Model</a>
                                    </li>
                                    <Link to={'/login'}>
                                        <li className='information'>
                                            <a target='_blank'>Login</a>
                                        </li>
                                    </Link>
                                    <Link to={'/register'}>
                                        <li className='information'>
                                            <a target='_blank'>Register</a>
                                        </li>
                                    </Link>
                                    <Link to={'/viewcart'}>
                                        <li className='information'>
                                            <a target='_blank'>Cart</a>
                                        </li>
                                    </Link>
                                </ul>
                            </div>
                            <div className='lg:w-1/4 max-sm:w-full lg:pt-[18px]'>
                                <p className='mb-[32px] text-[1.6rem] text-yellow-400'>Contact</p>
                                <ul>
                                    <li className='information'>
                                        <span className='text-rose-600 font-bold'>Phone: </span>
                                        <a href="tel:0902461457">0902 461 457</a>
                                    </li>
                                    <li className='information'>
                                        <span className='text-rose-600 font-bold'>Email: </span>
                                        <a href='mailto:leducthong2603@gmail.com' >leducthong2603@gmail.com</a>
                                    </li>
                                </ul>
                            </div>
                            <div className='lg:block max-sm:hidden flex flex-col w-1/4 p-[18px_0_0_40px] border-l border-solid border-[#384450]'>
                                <p className='mb-[32px] text-[1.6rem] text-yellow-400 h-auto'>SOCIAL MEDIA</p>
                                <ul className='flex justify-between m-[4px_0_0_1px]'>
                                    <li className=''>
                                        <a className=''>
                                            <img className='h-[48px]' src='https://p-bandai.com/_ui/responsive/common/images/icon-instagram-fill.svg'></img>
                                        </a>
                                    </li>
                                    <li>
                                        <a className=''>
                                            <img className='h-[48px]' src='https://p-bandai.com/_ui/responsive/common/images/icon-facebook-fill.svg'></img>
                                        </a>
                                    </li>
                                    <li>
                                        <a className=''>
                                            <img className='h-[48px]' src='https://p-bandai.com/_ui/responsive/common/images/icon-twitter-fill.svg'></img>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div className='flex max-sm:flex-col justify-center items-center gap-[5px] py-[10px] text-[#00000080]'>
                <p className='max-sm:flex max-sm:text-[15px]'>Copyright belongs to DTToyModel 2023 © <span className='lg:hidden max-sm:block'>Designed</span></p>
                <span className='font-bold lg:flex'><span className='lg:block max-sm:hidden'>Designed by</span> DTToyModel.com</span>
            </div>
        </div>
    )
}

export default Footer 