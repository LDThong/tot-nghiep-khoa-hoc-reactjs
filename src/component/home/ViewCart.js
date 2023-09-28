import React, { useContext, useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineRight, AiFillCaretRight, AiOutlineDoubleRight, AiOutlineCaretDown, AiOutlineCaretUp } from 'react-icons/ai';
import { PiNumberCircleOneFill, PiNumberCircleTwoFill, PiNumberCircleThreeFill } from 'react-icons/pi';
import {FaCaretRight} from 'react-icons/fa6';
import { BsBoxSeam, BsChevronCompactRight } from 'react-icons/bs';
import { ImBin } from 'react-icons/im';
import './App.css';
import { deleteProduct, removeProductToCart } from '../../store/CartSlice';
import { OrderContext } from '../../context/OrderContext';
import {RxTriangleRight} from 'react-icons/rx';
import { HomeContext } from '../../context/HomeContext';

function ViewCart() {
    const carts = useSelector((state) => state.cart.carts);
    const {list} = useContext(HomeContext);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [cartItem, setCartItem] = useState(carts);
    const {order, setOrder} = useContext(OrderContext);
    const {total, setTotal} = useContext(OrderContext);

    const cartProduct = localStorage.getItem("cartItem") ? JSON.parse(localStorage.getItem("cartItem")) : [];

    const resluts = cartProduct.map((item) => {
        const listP = list?.find((idItem) => {
            return idItem.id === item.id;
        });
        return listP;
    })

    console.log(resluts);

    const increasingProduct = (itemId) => {
        const updateCart = cartItem.map((item)=>{
            if (item.id === itemId) {
                const quantitys = item.quantity + 1;
                return {...item, quantity: quantitys,  subTotal: quantitys * (+item.price)}
            }
            return item;
        });
        setCartItem(updateCart);
    };

    const reduceProduct = (itemId) => {
        const updateCart = cartItem.map((item)=>{
            if (item.id === itemId) {
                return {...item, quantity: item.quantity - 1}
            }
            return item;
        })
        setCartItem(updateCart);
    };

    const removeToCart = async (product) => {
        const newCartArr = cartProduct.filter((item) => {
            return item.id !== product.id;
        });

        await localStorage.setItem("cartItem", JSON.stringify(newCartArr));

        dispatch(removeProductToCart(product));
    }

    const totalPrice = cartItem.reduce((total, item) => total + (item.price * item.quantity), 0);

    const orderDetail = () => {
        const user = window.localStorage.getItem('username');
        if (user === null) {
            navigate('/login')
        } else {
            let flag = true;
            const filteredItems = [...cartItem].filter((item) => {
                const remaining = item.inventory - item.quantity;
                if (remaining < 0) {
                   flag = false;
                   alert('Product quantity is not enough! Please re-enter quantity.');
                };
                return true;
            });
            
            if (flag) {
                let quantityzero = true;
                const newQuantity = [...cartItem].filter((item) => {
                    if (item.quantity === 0) {
                        quantityzero = false;
                        alert('Product quantity cannot be 0 !!');
                    };
                    return true;
                });

                if (quantityzero) {
                    setOrder(cartItem);
                    setTotal(totalPrice);
                    navigate('/orderdetail')
                }
            }
        }
    }


    return (
        <div>
            <Header />
            <div className='h-full mt-[70px] w-full'>
                <div className='w-full'>
                    <div className='bg-[#f8f8f8]'>
                        <div className='lg:w-[1140px] lg:mx-auto'>
                            <div className='flex items-center gap-[10px] lg:p-[10px_0_15px_0] w-full
                                max-sm:p-[7px_12px_7px_12px]'>
                                <Link to={'/'} className=''>
                                    <h1 className='text-[#262626] max-sm:text-[10px]'>HOME</h1>
                                </Link>
                                <AiOutlineRight className='text-[#CDCDCD] max-sm:text-[12px]' />
                                <p className='font-bold max-sm:text-[10px]'>SHOPPING CART</p>
                            </div>
                        </div>
                        <div className='bg-[#F0F0F0] max-sm:px-[12px]'>
                            <div className='lg:w-[1140px] lg:mx-auto'>
                                <div className='w-full flex justify-center lg:py-[50px] max-sm:py-[35px]'>
                                    <h1 className='lg:text-[40px] max-sm:text-[30px] text-[#303840] font-bold'>SHOPPING CART</h1>
                                </div>
                            </div>
                            <div className='flex lg:w-[1140px] lg:mx-auto bg-[#f8f8f8] lg:items-center'>
                                <div className='relative flex justify-center items-center lg:gap-[15px] lg:w-[33.33333333333333%] max-sm:w-[50%] lg:py-[20px] max-sm:py-[5px] bg-[#384450]
                                    max-sm:px-[15px]'>
                                    <PiNumberCircleOneFill className='text-[25px] text-[#fff]' />
                                    <span className='text-[#fff] max-sm:text-center '>SHOPPING CART</span>
                                    <RxTriangleRight className='max-sm:hidden lg:block absolute right-[-99px] text-[190px] text-[#384450]' />
                                    <FaCaretRight className='max-sm:block lg:hidden absolute text-[#384450] text-[105px] right-[-52.5px]'/>
                                </div>
                                <div className='relative flex justify-center items-center gap-[15px] lg:w-[33.33333333333333%] max-sm:w-[25%] lg:py-[20px] max-sm:py-[15px]'>
                                    <PiNumberCircleTwoFill className='text-[25px] text-[#C8C8C8]' />
                                    <span className='text-[#303851] lg:block max-sm:hidden'>ORDER DETAILS</span>
                                    <AiOutlineDoubleRight className='lg:block max-sm:hidden absolute right-[-64px] text-[95px] text-[#F0F0F0]' />
                                    <BsChevronCompactRight className='lg:hidden max-sm:block absolute right-[-44px] text-[71px] text-[#F0F0F0]'/>
                                </div>
                                <div className='relative flex justify-center items-center gap-[15px] lg:w-[33.33333333333333%] max-sm:w-[25%] lg:py-[20px] max-sm:py-[15px]'>
                                    <PiNumberCircleThreeFill className='text-[25px] text-[#C8C8C8]' />
                                    <span className='text-[#303851] lg:block max-sm:hidden'>ORDER COMPLETE</span>
                                </div>
                            </div>
                        </div>
                        {carts.length ? (
                            <div className='w-full py-[50px] max-sm:px-[12px]'>
                                <div className='lg:w-[1140px] lg:mx-auto bg-[#fff] shadow-[0_1px_2px_0_rgba(48,56,64,0.16)] lg:p-[40px]
                                    max-sm:p-[10px_20px_10px_20px]'>
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
                                    <div className='border-b lg:p-[40px_0_11px_0]'>
                                        <div className='flex items-center'>
                                            <div className='w-[100%] max-sm:py-[15px]'>
                                                <span className='lg:text-[24px] max-sm:text-[18px] font-bold'>PRODUCT NAME</span>
                                            </div>
                                            <div className='lg:block max-sm:hidden flex-[0_0_100px] w-[100px] text-center font-semibold'>PRICE</div>
                                            <div className='lg:block max-sm:hidden flex-[0_0_100px] w-[100px] text-center font-semibold'>QUANTITY</div>
                                            <div className='lg:block max-sm:hidden flex-[0_0_160px] w-[160px] ml-[32px] text-center font-semibold'>SUBTOTAL</div>
                                            <div className='lg:block max-sm:hidden flex-[0_0_32px] w-[32px]'></div>
                                        </div>
                                    </div>
                                    <div className='lg:border-b'>
                                        {cartItem.map((item) => {
                                            return(
                                            <div key={item.id}>
                                                <div className='flex lg:items-center py-[16px] 
                                                    max-sm:flex-col'>
                                                    <div className='lg:hidden max-sm:block max-sm:flex max-sm:items-center max-sm:gap-[5px] 
                                                        max-sm:border-b max-sm:pb-[15px] max-sm:w-full'>
                                                        <div className='w-[25%] h-[70px]'>
                                                            <Link to={'/productdetail/' + item.id} state={item}>
                                                                <img className='w-full h-full' src={item.imgs}></img>
                                                            </Link>
                                                        </div>
                                                        <div className='w-[75%]'>
                                                            <Link to={'/productdetail/' + item.id} state={item}>
                                                            <p className='text-[#303840] text-[14px]'>{item.nameProduct}</p>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <div className='lg:block max-sm:hidden flex-[0_0_88px] w-[88px] h-[88px] mr-[24px]'>
                                                        <Link to={'/productdetail/' + item.id} state={item}>
                                                            <img className='h-full w-full' src={item.imgs}></img>
                                                        </Link>
                                                    </div>
                                                    <div className='lg:block max-sm:hidden w-[100%]'>
                                                        <Link to={'/productdetail/' + item.id} state={item}>
                                                           <p className='text-[#303840]'  >{item.nameProduct}</p>
                                                        </Link>
                                                    </div>
                                                    <div className='flex items-baseline lg:justify-center text-[#303840] lg:flex-[0_0_100px] lg:w-[100px] font-semibold
                                                        max-sm:justify-between max-sm:border-b max-sm:pb-[5px]'>
                                                        <p className='lg:hidden max-sm:block max-sm:text-[13px] max-sm:font-bold'>PRICE</p>
                                                        <p className='flex lg:gap-[5px] items-baseline max-sm:gap-[5px]'><span className='text-[12px]'>{item.unit}</span>{item.price}</p>
                                                    </div>
                                                    <div className='lg:flex-[0_0_100px] lg:w-[100px] font-semibold max-sm:py-[5px] max-sm:border-b'>
                                                        <div className='flex lg:justify-center max-sm:justify-between items-center '>
                                                            <p className='lg:hidden max-sm:block max-sm:text-[13px] max-sm:font-bold'>QUANTITY</p>
                                                            <div className='flex items-center gap-[10px] max-sm:border max-sm:px-[25px] max-sm:rounded-[25px]'>
                                                                <p>{item.quantity}</p>
                                                                <div className='flex flex-col lg:gap-[5px]'>
                                                                    <button type='button' onClick={() => increasingProduct(item.id)}>
                                                                        <AiOutlineCaretUp className='text-[15px]'/>
                                                                    </button>
                                                                    <button type='button' onClick={() => reduceProduct(item.id)}>
                                                                        <AiOutlineCaretDown />
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='flex lg:justify-center text-[#303840] lg:flex-[0_0_160px] lg:w-[160px] lg:ml-[32px] font-semibold
                                                        max-sm:justify-between max-sm:py-[5px] max-sm:border-b'>
                                                        <p className='lg:hidden max-sm:block max-sm:text-[13px] max-sm:font-bold'>SUBTOTAL</p>
                                                        <p className='flex items-baseline gap-[5px]'><span className='text-[12px]'>{item.unit}</span>{item.price * item.quantity}</p>
                                                    </div>
                                                    <div className='lg:flex-[0_0_32px] lg:w-[32px] max-sm:py-[25px] max-sm:border-b text-center'>
                                                        <button
                                                            type='button'
                                                            onClick={() => removeToCart(item)}
                                                            className=' max-sm:border max-sm:p-[10px_70px_10px_70px] max-sm:rounded-[25px] max-sm:bg-[#F8F8F8]'>
                                                            <ImBin className='text-[#C8C8C8] text-[18px] max-sm:hover:text-gray-500' />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                        )}
                                    </div>
                                    <div className='flex justify-end lg:mt-[50px] w-full'>
                                        <div className='lg:w-[40%] max-sm:w-full'>
                                            <div className='flex justify-between items-baseline pb-[10px] border-b w-full text-[#303840]'>
                                                <h1 className='font-bold lg:text-[18px] max-sm:text-[14px]'>ITEM TOTAL (EXCL. TAX)</h1>
                                                <div className='flex items-baseline gap-[5px]'>
                                                    <span className='lg:text-[20px] max-sm:text-[15px]'>US$</span>
                                                    <p className='lg:text-[30px] max-sm:text-[25px] font-medium' >{totalPrice}</p>
                                                </div>
                                            </div>
                                            <div className='flex lg:justify-end max-sm:justify-center w-full pt-[20px] max-sm:pb-[35px]'>
                                                <button 
                                                    onClick={orderDetail}
                                                    className='relative flex items-center lg:p-[10px_45px_10px_45px] bg-[#F82888] font-medium text-[#fff] rounded-[20px]
                                                        max-sm:w-full max-sm:justify-center max-sm:py-[10px]'>
                                                    PROCEED TO CHECKOUT
                                                    <AiFillCaretRight className='absolute right-[12px]' />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        ) : (
                            <div className='p-[40px_0_80px_0] h-auto bg-[#f8f8f8] max-sm:px-[12px]'>
                                <div className='lg:w-[1140px] lg:mx-auto bg-[#fff] p-[40px_40px_20px_40px] shadow-[0_1px_2px_0_rgba(48,56,64,0.16)]'>
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