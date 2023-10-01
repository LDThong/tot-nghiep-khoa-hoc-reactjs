import React, { useEffect, useState, useContext } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import {BiSolidUser} from 'react-icons/bi';
import {HiOutlineUserCircle} from 'react-icons/hi2';
import {AiOutlineExclamationCircle} from 'react-icons/ai';
import {BsCheckCircle} from 'react-icons/bs';
import { AuthContext } from '../../context/authContext';
import { useDispatch } from 'react-redux';
import { deleteProductToCart } from '../../store/CartSlice';
import { HomeContext } from '../../context/HomeContext';
import { OrderContext } from '../../context/OrderContext';
import {HiOutlineLogout} from 'react-icons/hi';

function YourOrder() {
    const { id } = useParams();
    const { state, setState } = useContext(AuthContext);
    const [yourBill, setYourBill] = useState([]);
    const dispatch = useDispatch();
    const Navigate = useNavigate();
    const [styled, setStyled] = useState("hidden");
    const [cancelSuccessfull, setCancelSuccessfull] = useState("hidden");

    const handleLogout = (product) => {
        setState({ email: '', password: '', username: '', id: '', fullName: '', phoneNumber: '' });
        window.localStorage.removeItem('username');
        window.localStorage.removeItem('id');
        window.localStorage.removeItem('email');
        window.localStorage.removeItem('fullName');
        window.localStorage.removeItem('phoneNumber');
        dispatch(deleteProductToCart(product));
        Navigate('/');
    };

    const getDataOrder = async () => {
        const res = await axios.get(
            'http://localhost:8000/bill/'
        );

        if (res.status === 200) {
            const yourOrder = [...res.data].filter((item) => item.idUser === state.id);
            setYourBill(yourOrder);
        };
    };

    const buttonClassCancel = ` ${styled} max-sm:px-[12px] flex items-center justify-center fixed z-55 top-0 bottom-0 bg-[#0000004d] right-0 left-0`;
    const classCancelSuccessfull = ` ${cancelSuccessfull} max-sm:px-[12px] flex items-center justify-center fixed z-55 top-0 bottom-0 bg-[#0000004d] right-0 left-0`

    const handleCanceled = () => {
        setStyled("block");
    }

    const handleClose = () => {
        setStyled("hidden");
        setCancelSuccessfull("hidden");
    }

    const handleAcceptCancel = async (id) => {
        const response = await axios.patch(
            'http://localhost:8000/bill/' + id, {
                state: "Canceled"
            }
        )

        if (response.status === 200) {
            setStyled("hidden");
            setCancelSuccessfull("block");
        }
    }

    useEffect(() => {
        getDataOrder();
    }, [styled]);

    return (
        <div>
            <Header />
            <div className='mt-[70px] h-full w-full'>
                <div className='mb-[30px] border-b shadow-[0_1px_2px_0_rgba(48,56,64,0.16)]'>
                    <div className='flex items-center justify-center gap-[20px] py-[40px] w-full bg-[#F7F7F7]'>
                        <h1 className='text-[30px] font-bold'>USER PROFILE</h1>
                        <BiSolidUser className='text-[35px]' />
                    </div>
                </div>
                <div className='lg:w-[1140px] lg:mx-auto lg:pb-[50px] flex max-sm:flex-col'>
                    <div className='lg:w-[30%] max-sm:w-full max-sm:p-[12px_12px_35px_12px]'>
                        {state && (
                            <div>
                                <div className='flex flex-col'>
                                    <div className='flex items-center gap-[15px] pb-[10px]'>
                                        <HiOutlineUserCircle className='text-[70px] text-[#C5C5C5]'/>
                                        <p className='text-[20px]'>{state.username}</p>
                                    </div>
                                    <div className='border-b py-[10px] hover:border-r-[5px] hover:border-r-[#FA6E4F]'>
                                        <Link to={'/user/' + id}>
                                            <p className='font-medium text-[#897D7D] hover:text-[#343434]'>ACCOUNT</p>
                                        </Link>
                                    </div>
                                    <div className='border-b py-[10px] border-r-[5px] border-r-[#02021E]'>
                                        <Link to={'/user/' + id + '/orders'}>
                                            <p className='font-medium text-[#343434]'>ORDER</p>
                                        </Link>
                                    </div>
                                    <div className='w-full hover:border-r-[5px] hover:border-r-[#FA6E4F]'>
                                        <button
                                            onClick={handleLogout}
                                            className='flex items-center gap-[15px] text-[#897D7D] font-medium py-[10px] hover:text-[#343434]'
                                        >
                                            LOGOUT
                                            <HiOutlineLogout className='lg:text-[25px] max-sm:text-[18px]'/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className='lg:w-[70%] lg:border-l lg:p-[0_30px_30px_30px] max-sm:w-full max-sm:p-[12px]'>
                        {yourBill.length ? (
                            <div className=''>
                                {yourBill.map((item) => (
                                    <div key={item} className='bg-[#f8f8f8] border-[2px] p-[10px_20px_10px_20px] mb-[20px]'>
                                        <div className='border-b-[2px] border-gray-300 pb-[10px]'>
                                            <div className='flex gap-[5px]'>
                                                <p className='font-medium'>Username:</p>
                                                <p>{item.username}</p>
                                            </div>
                                            <div className='flex gap-[5px]'>
                                                <p className='font-medium'>Full Name:</p>
                                                <p>{item.fullName}</p>
                                            </div>
                                            <div className='flex gap-[5px]'>
                                                <p className='font-medium'>Email:</p>
                                                <p>{item.email}</p>
                                            </div>
                                            <div className='flex gap-[5px]'>
                                                <p className='font-medium'>Phone number:</p>
                                                <p>(+84) {item.phoneNumber}</p>
                                            </div>
                                            <div className='flex gap-[5px]'>
                                                <p className='font-medium'>Delivery address:</p>
                                                <p>{item.address}</p>
                                            </div>
                                            <div className='flex gap-[5px]'>
                                                <p className='font-medium'>Pay Method:</p>
                                                <p >{item.paymentMethods}</p>
                                            </div>
                                        </div>
                                        {(item.products).map((item) => (
                                            <div key={item} className='py-[10px] border-b-[2px] border-gray-300'>
                                                <div className='flex w-full max-sm:flex-col'>
                                                    <div className='lg:w-[13%] max-sm:w-[25%] max-sm:h-[70px]'>
                                                        <img className='w-[100%] h-full' src={item.imgs}></img>
                                                    </div>
                                                    <div className='flex flex-col justify-start lg:w-[67%] lg:px-[15px] max-sm:w-full max-sm:py-[10px]'>
                                                        <p className='font-medium text-[15px]'>{item.nameProduct}</p>
                                                        <div className='flex lg:gap-[5px] max-sm:justify-between text-gray-500'>
                                                            <span>Type Model:</span>
                                                            <p>{item.typeModel}</p>
                                                        </div>
                                                        <p className='lg:block max-sm:hidden'>x{item.quantity}</p>
                                                    </div>
                                                    <div className='lg:hidden max-sm:block max-sm:flex max-sm:justify-between max-sm:pb-[5px]'>
                                                        <p className='font-medium'>Quantity</p>
                                                        <p>x{item.quantity}</p>
                                                    </div>
                                                    <div className='flex flex-col lg:justify-center lg:items-end lg:w-[20%] max-sm:gap-[5px]'>
                                                        <div className='flex items-baseline lg:gap-[5px] max-sm:justify-between'>
                                                            <span className='max-sm:font-medium'>Price:</span>
                                                            <p className='font-medium text-red-600 text-[15px]'>{item.unit} {item.price}</p>
                                                        </div>
                                                        <div className='flex items-baseline gap-[5px] max-sm:justify-between'>
                                                            <span className='max-sm:font-medium'>Subtotal:</span>
                                                            <p className='font-medium text-red-600 text-[15px]'>{item.unit} {item.subTotal}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                        <div className='lg:flex lg:justify-end lg:gap-[10px] my-[10px]'>
                                            <div className='flex lg:items-center lg:gap-[10px] max-sm:justify-between max-sm:items-baseline'>
                                                <span className='font-semibold'>Total:</span>
                                                <p className='font-bold text-red-600 text-[20px]'>US$ {item.total}</p>
                                            </div>
                                        </div>
                                        {item.state === 'Canceled' ? (
                                            <div className='flex justify-between items-center'>
                                                <p className='max-sm:text-[13px]'>Order Has Been Canceled</p>
                                                <Link to={'/'}>
                                                    <button
                                                        type='button'
                                                        className='max-sm:text-[13px] max-sm:p-[5px] bg-[#F82888] text-[#fff] lg:p-[5px_15px_5px_15px] rounded-[5px]'
                                                    >
                                                        Order new products
                                                    </button>
                                                </Link>
                                            </div>
                                        ) : (
                                            <div className='flex justify-between items-center' >
                                                <p className='max-sm:text-[13px] max-sm:font-semibold text-green-400 lg:font-bold'>
                                                    {item.state}
                                                </p>
                                                <button
                                                    type='button'
                                                    onClick={handleCanceled}
                                                    disabled={item.state === "Delivering"}
                                                    className='max-sm:text-[13px] bg-[#DC3545] text-[#fff] p-[5px_15px_5px_15px] rounded-[5px]'
                                                >
                                                    Cancel
                                                </button>
                                            </div>
                                        )}
                                        <div className={buttonClassCancel}>
                                            <div className='flex flex-col justify-center gap-[25px] bg-[#fff] p-[20px_50px_20px_50px]'>
                                                <div className='flex flex-col items-center gap-[15px]'>
                                                    <AiOutlineExclamationCircle className='text-[100px] text-[#F8BB86]' />
                                                    <p className='max-sm:text-center text-[25px] font-bold text-[#595959]'>Do you want to cancel this order?</p>
                                                </div>
                                                <div className='flex justify-center gap-[10px]'>
                                                    <button
                                                        type='button'
                                                        onClick={() => handleAcceptCancel(item.id)}
                                                        className='bg-[#DC3545] p-[5px_15px_5px_15px] font-medium text-[#fff] rounded-[5px]'>
                                                        Yes, Cancel It!
                                                    </button>
                                                    <button
                                                        type='button'
                                                        onClick={handleClose}
                                                        className='bg-[#868E96] p-[5px_15px_5px_15px] font-medium text-[#fff] rounded-[5px]'>
                                                        Close
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={classCancelSuccessfull}>
                                            <div className='flex flex-col justify-center gap-[25px] bg-[#fff] lg:p-[26px_122px_26px_122px] max-sm:p-[26px_25px_26px_25px]'>
                                                <div className='flex flex-col items-center gap-[15px]'>
                                                    <BsCheckCircle className='text-[100px] text-[#349E81]'/>
                                                    <p className='max-sm:text-center max-sm:text-[20px] lg:text-[25px] font-bold text-[#595959]'>Your Order is successfully canceled.</p>
                                                </div>
                                                <div className='flex justify-center gap-[10px]'>
                                                    <button
                                                        type='button'
                                                        onClick={handleClose}
                                                        className='max-sm:p-[5px_20px_5px_20px] bg-[#A99A2D] lg:p-[5px_15px_5px_15px] font-medium text-[#fff] rounded-[5px]'>
                                                        OK
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className='flex items-center gap-[10px] max-sm:flex-col max-sm:pb-[35px]'>
                                <p className='text-[20px]'>You don't have any orders yet.</p>
                                <button className='p-[5px_20px_5px_20px] bg-[#F82888] max-sm:rounded-[10px]'>
                                    <Link to={'/'}>
                                        <span className='text-[20px] text-[#fff] font-medium'>CONTINUE BUYING PRODUCTS</span>
                                    </Link>
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default YourOrder         