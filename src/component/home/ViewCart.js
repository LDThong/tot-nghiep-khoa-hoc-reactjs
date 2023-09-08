import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineRight, AiFillCaretRight } from 'react-icons/ai';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PiNumberCircleOneFill, PiNumberCircleTwoFill, PiNumberCircleThreeFill, PiNumberCircleFourFill } from 'react-icons/pi';
import { BsBoxSeam } from 'react-icons/bs';
import { ImBin } from 'react-icons/im';
import './App.css';
import { deleteProduct } from '../../store/CartSlice';

function ViewCart() {
    const carts = useSelector((state) => state.cart.carts);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [newQuantity, setNewQuantity] = useState(1);

    const [total, setTotal] = useState(0);

    const increasingProduct = () => {
        setNewQuantity(newQuantity + 1);
    };

    const reduceProduct = () => {
        setNewQuantity(newQuantity - 1);
        if (newQuantity === 0) {
           navigator('/viewcart')
        }
    };

    const deleteProduct = () => {
        window.location.reload();
    }

    const countTotal = (e) => {
        const currentValue = total;
        const newValue = currentValue + e;
        setTotal(newValue)
    }

    return (
        <div>
            <Header />
            <div className='h-full mt-[70px] w-full'>
                <div className='w-full'>
                    <div className='bg-[#f8f8f8]'>
                        <div className='w-[1140px] mx-auto'>
                            <div className='flex items-center gap-[10px] p-[10px_0_15px_0] w-full'>
                                <Link to={'/'} className=''>
                                    <h1 className='text-[#262626]'>HOME</h1>
                                </Link>
                                <AiOutlineRight className='text-[#CDCDCD]' />
                                <p className='font-bold'>SHOPPING CART</p>
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
                                    <PiNumberCircleOneFill className='text-[25px] text-[#fff]' />
                                    <span className='text-[#fff]'>SHOPPING CART</span>
                                    {/* <AiFillCaretRight className='absolute right-[-64px] text-[93px] text-[#384450]'/> */}
                                </div>
                                <div className='flex justify-center items-center w-[25%] gap-[15px] py-[20px]'>
                                    <PiNumberCircleTwoFill className='text-[25px] text-[#C8C8C8]' />
                                    <span className='text-[#303851]'>ORDER DETAILS</span>
                                </div>
                                <div className='flex justify-center items-center w-[25%] gap-[15px] py-[20px]'>
                                    <PiNumberCircleThreeFill className='text-[25px] text-[#C8C8C8]' />
                                    <span className='text-[#303851]'>CONFIRMATION</span>
                                </div>
                                <div className='flex justify-center items-center w-[25%] gap-[15px] py-[20px]'>
                                    <PiNumberCircleFourFill className='text-[25px] text-[#C8C8C8]' />
                                    <span className='text-[#303851]'>ORDER COMPLETE</span>
                                </div>
                            </div>
                        </div>
                        {carts.length ? (
                            <div className='w-full py-[50px]'>
                                <div className='w-[1140px] mx-auto bg-[#fff] shadow-[0_1px_2px_0_rgba(48,56,64,0.16)] p-[40px]'>
                                    <div className='border-b pb-[11px]'>
                                        <h3>
                                            <span className='relative block text-[#303840] text-[25px] pl-[18px] font-bold title-1'>
                                                ĐT Toy Model
                                            </span>
                                        </h3>
                                        <div className='flex items-center gap-[10px] p-[10px_0_6px_0]'>
                                            <BsBoxSeam className='text-[20px] text-[#C8C8C8]' />
                                            <p className='font-bold text-[#303840] text-[20px]'>EXPECTED DELIVERY within the next 7 days.</p>
                                        </div>
                                    </div>
                                    <div className='border-b p-[40px_0_11px_0]'>
                                        <div className='flex items-center'>
                                            <div className='w-[100%]'>
                                                <span className='text-[24px] font-bold'>PRODUCT NAME</span>
                                            </div>
                                            <div className='flex-[0_0_100px] w-[100px] text-center font-semibold'>PRICE</div>
                                            <div className='flex-[0_0_100px] w-[100px] text-center font-semibold'>QUANTITY</div>
                                            <div className='flex-[0_0_160px] w-[160px] ml-[32px] text-center font-semibold'>SUBTOTAIL</div>
                                            <div className='flex-[0_0_32px] w-[32px]'></div>
                                        </div>
                                    </div>
                                    <div className='border-b'>
                                        {carts.map((item) =>  (
                                                <div key={item.id}>
                                                    <div className='flex items-center py-[16px] '>
                                                        <div className='flex-[0_0_88px] w-[88px] h-[88px] mr-[24px]'>
                                                            <Link to={'/productdetail/' + item.id} state={item}>
                                                                <img className='h-full w-full' src={item.imgs}></img>
                                                            </Link>
                                                        </div>
                                                        <div className='w-[100%]'>
                                                            <Link to={'/productdetail/' + item.id} state={item}>
                                                                <p className='text-[#303840]'>{item.nameProduct}</p>
                                                            </Link>
                                                        </div>
                                                        <div className='flex items-baseline justify-center gap-[5px] text-[#303840] flex-[0_0_100px] w-[100px] font-semibold'>
                                                            <span className='text-[12px]'>{item.unit}</span>
                                                            <p className=''>{item.price}</p>
                                                        </div>
                                                        <div className='flex-[0_0_100px] w-[100px] text-center font-semibold'>
                                                            <div className='flex gap-[10px]'>
                                                                <p>{newQuantity}</p>
                                                                <button type='button' onClick={increasingProduct}>+</button>
                                                                <button type='button' onClick={reduceProduct}>-</button>
                                                            </div>
                                                        </div>
                                                        <div className='flex items-baseline justify-center gap-[5px] text-[#303840] flex-[0_0_160px] w-[160px] ml-[32px] font-semibold'>
                                                            <span className='text-[12px]'>{item.unit}</span>
                                                            <p onChange={e => countTotal(e.target.value)}>{item.price * newQuantity}</p>
                                                        </div>
                                                        <div className='flex-[0_0_32px] w-[32px] text-center'>
                                                            <button 
                                                                type='button'
                                                                onClick={deleteProduct}>
                                                                <ImBin className='text-[#C8C8C8] text-[18px]' />
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        )}
                                    </div>
                                    <div className='flex justify-end mt-[50px] w-full'>
                                        <div className=' w-[40%]'>
                                            <div className='flex justify-between items-baseline pb-[10px] border-b w-full text-[#303840]'>
                                                <h1 className='font-bold text-[18px]'>ITEM TOTAL (EXCL. TAX)</h1>
                                                <div className='flex items-baseline gap-[5px]'>
                                                    <span className='text-[20px]'>US$</span>
                                                    <p className='text-[30px] font-medium'>{total}</p>
                                                </div>
                                            </div>
                                            <div className='flex justify-end w-full pt-[20px]'>
                                                <button className='relative flex items-center p-[10px_45px_10px_45px] bg-[#F82888] font-medium text-[#fff] rounded-[20px]'>
                                                    PROCEED TO CHECKOUT
                                                    <AiFillCaretRight className='absolute right-[12px]' />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        ) : (
                            <div className='pb-[80px] h-auto bg-[#f8f8f8]'>
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
            </div>
            <Footer />
        </div>

    )
}

export default ViewCart