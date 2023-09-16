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

function OrderDetail() {
    const {order} = useContext(OrderContext);
    const {total} = useContext(OrderContext);
    const {idUser} = useContext(AuthContext);
    const [productRemaining, setProductRemaining] = useState([]);
    const [idProduct, setIdProduct] = useState([]);
    const [fullName, setFullName] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [notes, setNotes] = useState('');
    const userName = window.localStorage.getItem('username');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const inputHandler = (e) => {
        const { value, maxLength } = e.target;
        if (String(value).length >= maxLength) {
          e.preventDefault();
          return;
        }
      };
    
    const addBill = async (product) => {
        const idProductInOrder = order.map((item) => item.id);
        setIdProduct(idProductInOrder);

        const remaining = order.map((item) => item.inventory - item.quantity);
        setProductRemaining(remaining);
        
        if (fullName === '' && address === '' && phoneNumber === '') {
            alert('Please fill in the payment information!!')
        } else {
            setEmail(idUser.email);
            const res = await axios.post(
                'http://localhost:8000/bill', {
                    username: userName,
                    fullName: fullName,
                    address: address,
                    phoneNumber: +phoneNumber,
                    email: email,
                    orderNotes: notes,
                    products: order,
                    total: +total,
                    paymentMethods: "Pay cash upon delivery"
                }
            );
            if (res.status === 201) {
            
                const editInventory = async () => {
                    for (let i = 0; i < idProduct.length; i++) {
                        const id = idProduct[i];
                        const remainingQuantity = productRemaining[i];
                        const editInventoryProduct = await axios.patch(
                            'http://localhost:8000/product/' + id,
                            {
                                inventory: remainingQuantity,
                            }
                        );
        
                        if (editInventoryProduct.status === 200) {
                            dispatch(deleteProductToCart(product));
                            navigate('/ordercomplete/');
                        };
                        
                    }
                    
                }
                await editInventory();
            }
        }
    }

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
                        <p className='font-bold'>ORDER DETAILS</p>
                        
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
                            <PiNumberCircleTwoFill className='text-[25px] text-[#fff]' />
                            <span className='text-[#fff]'>ORDER DETAILS</span>
                            <RxTriangleRight className='absolute right-[-99px] text-[190px] text-[#384450]' />
                        </div>
                        <div className='relative flex justify-center items-center w-[33.33333333333333%] gap-[15px] py-[20px]'>
                            <PiNumberCircleThreeFill className='text-[25px] text-[#C8C8C8]' />
                            <span className='text-[#303851]'>ORDER COMPLETE</span>
                        </div>
                    </div>
                </div>
                <div className='py-[50px]'>
                    <div className='flex gap-[30px] w-[1140px] mx-auto bg-[#fff] border shadow-[0_1px_2px_0_rgba(48,56,64,0.16)] p-[40px]'>
                        <div className='w-[60%]'>
                            <div className='flex items-center gap-[10px] py-[20px]'>
                                <IoNewspaper className='text-[#C8C8C8] text-[30px]'/>
                                <h3 className='font-bold text-[25px] text-[#303840]'>BILLING INFORMATION</h3>
                            </div>
                            <div className='flex flex-col gap-[10px] '>
                                <div className='flex flex-col gap-[5px]'>
                                    <label className='font-bold'>Full Name</label>
                                    <input 
                                        onChange={(e) => setFullName(e.target.value)}
                                        type='text' 
                                        className='border p-[7px_15px] shadow-[0_1px_2px_0_rgba(0,0,0,0.1)]'></input>
                                </div>
                                <div className='flex flex-col gap-[5px]'>
                                    <label className='font-bold'>Address</label>
                                    <input 
                                        onChange={(e) => setAddress(e.target.value)}
                                        type='text' 
                                        className='border p-[7px_15px] shadow-[0_1px_2px_0_rgba(0,0,0,0.1)]'></input>
                                </div>
                                <div className='flex flex-col'>
                                    <label className='font-bold'>Phone number</label>
                                    <input
                                        onChange={(e) => setPhoneNumber(e.target.value)}
                                        type="number"
                                        maxlength="10"
                                        onKeyPress={inputHandler}
                                        className='border p-[7px_15px] shadow-[0_1px_2px_0_rgba(0,0,0,0.1)]'
                                    />
                                </div>
                                <div className='flex flex-col gap-[5px]'>
                                    <label className='font-bold'>Email</label>
                                    <input 
                                        value={idUser.email}
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
                        <div className='w-[40%] border-[2px] border-solid border-[#303840]'>
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
            </div>
            <Footer />
        </div>
    )
}

export default OrderDetail 