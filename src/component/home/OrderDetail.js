import React, { useContext, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineRight, AiOutlineDoubleRight } from 'react-icons/ai';
import { PiNumberCircleOneFill, PiNumberCircleTwoFill, PiNumberCircleThreeFill } from 'react-icons/pi';
import {IoNewspaper} from 'react-icons/io5';
import { OrderContext } from '../../context/OrderContext';
import {RxTriangleRight} from 'react-icons/rx';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { removeProductToCart, deleteProductToCart } from '../../store/CartSlice';
import { AuthContext } from '../../context/authContext';
import {CgDanger} from 'react-icons/cg';
import {FaCaretRight} from 'react-icons/fa6';

function OrderDetail() {
    const {order} = useContext(OrderContext);
    const {total} = useContext(OrderContext);
    const {state} = useContext(AuthContext);
    const [fullName, setFullName] = useState(state.fullName);
    const [phoneNumber, setPhoneNumber] = useState(state.phoneNumber);
    const [email, setEmail] = useState(state.email);
    const [address, setAddress] = useState('');
    const [notes, setNotes] = useState('');
    const userName = window.localStorage.getItem('username');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [notification, setNotification] = useState("hidden");
    const [notificationFailed, setNotificationFailed] = useState("hidden");
    
    const addBill = async (product) => {
        if (fullName === '' || phoneNumber === '') {
            setNotification("block");
        } else {
            if (address === '') {
                setNotificationFailed("block")
            } else {
                setEmail(state.email);
                    const res = await axios.post(
                        'http://localhost:8000/bill', {
                            idUser: +state.id,
                            username: userName,
                            fullName: fullName,
                            address: address,
                            phoneNumber: +phoneNumber,
                            email: email,
                            orderNotes: notes,
                            products: order,
                            total: +total,
                            paymentMethods: "Pay cash upon delivery",
                            state: "Pending"
                        }
                    );

                    if (res.status === 201) {
                        dispatch(deleteProductToCart(product));
                        window.localStorage.removeItem("cartItem");
                        navigate('/ordercomplete/');
                    }
            }
        }
    };

    const classNotificationFailed = ` ${notificationFailed} max-sm:px-[12px] flex items-center justify-center fixed z-55 top-0 bottom-0 bg-[#0000004d] right-0 left-0`;
    const classNotification = ` ${notification} max-sm:px-[12px] flex items-center justify-center fixed z-55 top-0 bottom-0 bg-[#0000004d] right-0 left-0`;

    const handleClose = () => {
        setNotificationFailed("hidden");
    };

    const handleConfirm = () => {
        setNotification("hidden");
        navigate('/user/' + state.id);
    }

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
                        <p className='font-bold max-sm:text-[10px]'>ORDER DETAILS</p>
                        
                    </div>
                </div>
                <div className='bg-[#f0f0f0] max-sm:px-[12px]'>
                    <div className='w-full flex justify-center lg:py-[50px] max-sm:py-[35px]'>
                        <h1 className='lg:text-[40px] max-sm:text-[30px] text-[#303840] font-bold'>SHOPPING CART</h1>
                    </div>
                    <div className='flex lg:w-[1140px] lg:mx-auto bg-[#f8f8f8] lg:items-center'>
                        <div className='relative flex justify-center items-center gap-[15px] lg:w-[33.33333333333333%] max-sm:w-[25%] lg:py-[20px] max-sm:py-[15px]'>
                            <PiNumberCircleOneFill className='text-[25px] text-[#C8C8C8]' />
                            <span className='text-[#303851] lg:block max-sm:hidden'>SHOPPING CART</span>
                            <RxTriangleRight className='lg:block max-sm:hidden absolute right-[-80px] text-[135px] text-[#F8F8F8] z-[1]' />
                        </div>
                        <div className='relative flex justify-center items-center lg:gap-[15px] lg:w-[33.33333333333333%] max-sm:w-[50%] lg:py-[20px] max-sm:py-[5px] bg-[#384450]
                                    max-sm:px-[15px]'>
                            <PiNumberCircleTwoFill className='text-[25px] text-[#fff]' />
                            <span className='text-[#fff] max-sm:text-center '>ORDER DETAILS</span>
                            <RxTriangleRight className='max-sm:hidden lg:block absolute right-[-99px] text-[190px] text-[#384450]' />
                            <FaCaretRight className='max-sm:block lg:hidden absolute text-[#384450] text-[105px] right-[-52.5px]'/>
                        </div>
                        <div className='relative flex justify-center items-center gap-[15px] lg:w-[33.33333333333333%] max-sm:w-[25%] lg:py-[20px] max-sm:py-[15px]'>
                            <PiNumberCircleThreeFill className='text-[25px] text-[#C8C8C8]' />
                            <span className='text-[#303851] lg:block max-sm:hidden'>ORDER COMPLETE</span>
                        </div>
                    </div>
                </div>
                <div className='py-[50px] max-sm:px-[12px]'>
                    <div className='flex gap-[30px] lg:w-[1140px] lg:mx-auto bg-[#fff] border shadow-[0_1px_2px_0_rgba(48,56,64,0.16)] lg:p-[40px]
                        max-sm:flex-col max-sm:p-[12px_12px_40px_12px]'>
                        <div className='lg:w-[60%] max-sm:w-full'>
                            <div className='flex items-center gap-[10px] py-[20px]'>
                                <IoNewspaper className='text-[#C8C8C8] text-[30px]'/>
                                <h3 className='font-bold text-[25px] text-[#303840] max-sm:text-[20px]'>BILLING INFORMATION</h3>
                            </div>
                            <div className='flex flex-col gap-[10px] '>
                                <div className='flex flex-col gap-[5px]'>
                                    <label className='font-bold'>Full Name</label>
                                    <input 
                                        value={state.fullName}
                                        type='text' 
                                        className='border p-[7px_15px] shadow-[0_1px_2px_0_rgba(0,0,0,0.1)]'
                                        disabled
                                    ></input>
                                </div>
                                <div className='flex flex-col gap-[5px]'>
                                    <label className='font-bold'>Email</label>
                                    <input 
                                        value={state.email}
                                        type='text' 
                                        className='border p-[7px_15px] shadow-[0_1px_2px_0_rgba(0,0,0,0.1)]'
                                        disabled    
                                    ></input>
                                </div>
                                <div className='flex flex-col'>
                                    <label className='font-bold'>Phone number</label>
                                    <input
                                        value={state.phoneNumber}
                                        type="number"
                                        className='border p-[7px_15px] shadow-[0_1px_2px_0_rgba(0,0,0,0.1)]'
                                        disabled
                                    />
                                </div>
                                <div className='flex flex-col gap-[5px]'>
                                    <label className='font-bold'>Delivery address</label>
                                    <input 
                                        onChange={(e) => setAddress(e.target.value)}
                                        type='text' 
                                        className='border p-[7px_15px] shadow-[0_1px_2px_0_rgba(0,0,0,0.1)]'></input>
                                </div>
                                <div className='flex flex-col gap-[5px]'>
                                    <label className='font-bold'>Order notes (optional)</label>
                                    <textarea 
                                        onChange={(e) => setNotes(e.target.value)}
                                        className='border p-[7px_15px] min-h-[120px] shadow-[0_1px_2px_0_rgba(0,0,0,0.1)]'></textarea>
                                </div>
                            </div>
                        </div>
                        <div className='lg:w-[40%] max-sm:w-full max-sm:pb-[25px] border-[2px] border-solid border-[#303840]'>
                            <div className='p-[20px]'>
                                <div className='pb-[10px]'>
                                    <h3 className='font-bold text-[25px] text-[#303840]'>YOUR ORDER</h3>
                                </div>
                                <div className='w-full'>
                                    <div className='flex pb-[5px] border-b-[3px]'>
                                        <div className='w-[70%]'>
                                            <p className='font-bold'>PRODUCT</p>
                                        </div>
                                        <div className='text-right w-[30%]'>
                                            <p className='font-bold'>PRICE</p>
                                        </div>
                                    </div>
                                    {order.map((item) => (
                                        <div key={item}>
                                            <div className='flex justify-between items-end py-[10px] border-b'>
                                                <div className='flex justify-between items-end gap-[10px] w-[75%]'>
                                                    <p>{item.nameProduct}</p>
                                                    <span>x{item.quantity}</span>
                                                </div>
                                                <div className='flex gap-[5px] items-center justify-end w-[25%]'>
                                                    <span>{item.unit}</span>
                                                    <p>{item.price}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                    {total && 
                                        (<div className='flex items-center py-[10px] border-b-[3px]'>
                                            <div className='w-[70%]'>
                                                <p className='font-bold'>Total</p>
                                            </div>
                                            <div className='flex gap-[5px] items-center justify-end w-[30%] font-semibold'>
                                                <span>US$</span>
                                                <p>{total}</p>
                                            </div>
                                        </div>)
                                    }
                                    <div>
                                        <div className='flex gap-[20px] pt-[10px]'>
                                            <input type='radio' checked="1"></input>
                                            <p className='font-semibold'>Pay cash upon delivery</p>
                                        </div>
                                    </div>
                                    <div className='pt-[30px]'>
                                        <button 
                                            type='button'
                                            onClick={addBill}
                                            className='bg-[#DD3333] p-[5px_30px] text-[#fff] font-bold'>
                                            ORDER
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classNotification}>
                    <div className='flex flex-col justify-center gap-[25px] bg-[#fff] lg:p-[26px_122px_26px_122px] max-sm:p-[30px_75px_30px_75px]'>
                        <div className='flex flex-col items-center gap-[15px]'>
                            <CgDanger className='text-[100px] text-[#CC1914]' />
                            <p className='max-sm:text-center max-sm:text-[20px] lg:text-[25px] font-bold text-[#000] max-sm:w-[100%]'>Please update your personal information!</p>
                        </div>
                        <div className='flex justify-center gap-[10px]'>
                            <button
                                type='button'
                                onClick={handleConfirm}
                                className='max-sm:p-[5px_20px_5px_20px] bg-[#F7EA00] lg:p-[5px_15px_5px_15px] font-medium text-[#000] rounded-[5px]'>
                                <p className='font-bold'>Confirm</p>
                            </button>
                        </div>
                    </div>
                </div>
                <div className={classNotificationFailed}>
                    <div className='flex flex-col justify-center gap-[25px] bg-[#fff] lg:p-[26px_122px_26px_122px] max-sm:p-[30px_75px_30px_75px]'>
                        <div className='flex flex-col items-center gap-[15px]'>
                            <CgDanger className='text-[100px] text-[#CC1914]' />
                            <p className='max-sm:text-center max-sm:text-[20px] lg:text-[25px] font-bold text-[#000] max-sm:w-[100%]'>Please enter your delivery address!</p>
                        </div>
                        <div className='flex justify-center gap-[10px]'>
                            <button
                                type='button'
                                onClick={handleClose}
                                className='max-sm:p-[5px_20px_5px_20px] bg-[#F7EA00] lg:p-[5px_15px_5px_15px] font-medium text-[#000] rounded-[5px]'>
                                <p className='font-bold'>Close</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default OrderDetail    