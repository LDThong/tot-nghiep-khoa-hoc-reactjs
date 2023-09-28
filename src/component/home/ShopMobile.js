import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import {AiOutlineRight} from 'react-icons/ai';

function ShopMobile() {
  return (
    <div className='bg-[#F0F0F0]'>
        <Header />
        <div className='mt-[70px] pb-[35px]'>
              <div className='flex items-center gap-[10px] w-full bg-[#f8f8f8] py-[10px] px-[12px]'>
                  <Link to={'/'} className=''>
                      <h1 className='text-[#262626] text-[10px]'>HOME</h1>
                  </Link>
                  <AiOutlineRight className='text-[#CDCDCD] text-[12px]' />
                  <p className='font-bold text-[10px]'>SHOPS</p>
              </div>
              <div className='px-[12px] w-full flex justify-center py-[50px] py-[35px]'>
                  <h1 className='text-[30px] text-[#303840] font-bold'>SHOPS</h1>
              </div>
              <div className='px-[12px]'>
                  <div className=' border bg-[#fff] shadow-[0_1px_2px_0_rgba(48,56,64,0.16)]'>
                        <Link to={'/shopnaruto'}>
                            <div className='flex flex-col items-center gap-[15px] justify-center p-[10px_20px_10px_20px] border-b'>
                                <img className='h-[120px]' src='/images/logoNaruto.png'></img>
                                <p className='font-bold text-[#383838]'>Naruto</p>
                            </div>
                        </Link>
                        <Link to={'/shopgundam'}>
                            <div className='flex flex-col items-center gap-[15px] justify-center p-[10px_20px_10px_20px] border-b '>
                                <img className='h-[120px]' src='/images/logoGundam.png'></img>
                                <p className='font-bold text-[#383838]'>Gundam</p>
                            </div>
                        </Link>
                        <Link to={'/shopdragonball'}>
                            <div className='flex flex-col items-center gap-[15px] justify-center p-[10px_20px_10px_20px] border-b'>
                                <img className='h-[120px]' src='/images/logoDragonball.png'></img>
                                <p className='font-bold text-[#383838]'>Dragon Ball</p>
                            </div>
                        </Link>
                        <Link to={'/shopmarvel'}>
                            <div className='flex flex-col items-center gap-[15px] justify-center p-[10px_20px_10px_20px] border-b'>
                                <img className='h-[120px]' src='/images/logoMavel.png'></img>
                                <p className='font-bold text-[#383838]'>Marvel</p>
                            </div>
                        </Link>
                        <Link to={'/shoptransformers'}>
                            <div className='flex flex-col items-center gap-[15px] justify-center p-[10px_20px_10px_20px] border-b'>
                                <img className='h-[120px]' src='/images/logoTransformers.png'></img>
                                <p className='font-bold text-[#383838]'>Transformers</p>
                            </div>
                        </Link>
                        <Link to={'/shoponepiece'}>
                            <div className='flex flex-col items-center gap-[15px] justify-center p-[10px_20px_10px_20px] border-b'>
                                <img className='h-[120px]' src='/images/logoOnepice.png'></img>
                                <p className='font-bold text-[#383838]'>One Piece</p>
                            </div>
                        </Link>
                  </div>
              </div>
              
        </div>
        <Footer />
    </div>
  )
}

export default ShopMobile