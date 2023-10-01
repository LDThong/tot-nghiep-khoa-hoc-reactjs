import React, { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import axios from 'axios';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { AiOutlineRight} from 'react-icons/ai';
import { Link, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addProductToCart } from '../../store/CartSlice';

function ProductDetail() {
	let { id } = useParams();
    const [ detail, setDetail] = useState({});
    const dispatch = useDispatch();

    const cartItem = JSON.parse(localStorage.getItem("cartItem")) || [];
    const productAdd = {id: detail.id, quantity: detail.quantity, inventory: detail.inventory};
    
    const getData = async () => {
        const response = await axios.get(
            'http://localhost:8000/product/' + id
        );

        if (response.status === 200) {
            setDetail(response.data);
        };
    };

    useEffect(() => {
        getData();
    }, []);

    const onAdd = (newProduct) => {
        const productExists = cartItem.includes(productAdd)
        if (!productExists) {
            cartItem.push(productAdd);
            localStorage.setItem("cartItem", JSON.stringify(cartItem));
            dispatch(addProductToCart(newProduct));
        }
    };


  return (
    <div>
        <Header />
        <div className='lg:mt-[30px] max-sm:mt-[20px] h-full bg-[#F8F8F8] p-[50px_0_50px_0]'>
            <div className='flex items-center lg:gap-[10px] max-sm:gap-[5px] lg:p-[10px_0px_15px_190px] w-full
                max-sm:p-[7px_12px_7px_12px]'>
                <Link to={'/'}> 
                    <h1 className='max-sm:text-[12px]'>HOME</h1>
                </Link>
                <AiOutlineRight className='text-[#CDCDCD] max-sm:text-[15px]'/>
                    <p className='max-sm:text-[12px] uppercase'>{detail.typeModel}</p>
                <AiOutlineRight className='text-[#CDCDCD] max-sm:text-[15px]'/>
                <p className='font-bold max-sm:text-[12px]'>{detail.nameProduct}</p>
            </div>
            {detail && (
                <div 
                    className='lg:w-[1140px] lg:mx-auto max-sm:mx-[12px] bg-[#fff] h-full'>
                    <div className='flex w-full h-full
                        lg:flex-row lg:gap-[64px] lg:p-[48px]
                        max-sm:flex-col max-sm:pb-[25px] max-sm:shadow-[0_1px_2px_0_rgba(48,56,64,0.16)]'>
                        <div className='lg:w-[56%] lg:h-full max-sm:w-full'>
                            <div className='w-full'>
                                <img src={detail.imgs} className='w-full'></img>
                            </div>
                        </div>
                        <div className='lg:w-[44%] lg:relative'>
                            <div className='w-full max-sm:px-[12px]'>
                                <h1 className='font-medium lg:m-[-9px_0_23px_0] lg:leading-[1.3125] lg:text-[32px] text-black
                                    max-sm:text-[25px] max-sm:p-[15px_0_0px_0]'
                                >{detail.nameProduct}</h1>
                                <p className='lg:mb-[20px] max-sm:mb-[7px] max-sm:flex max-sm:gap-[5px] max-sm:items-baseline'>
                                    <span className='text-[#f82888] lg:text-[24px] lg:leading-[1]
                                        max-sm:text-[18px]'
                                    >{detail.unit}</span>
                                    <span className='text-[#f82888] lg:m-[0_2px_0_6px] lg:text-[35px] lg:leading-[1] lg:tracking-[0.04em] font-semibold
                                        max-sm:text-[28px]'
                                    >{detail.price}</span>
                                </p>
                                <div className='flex items-center gap-[30px] max-sm:mb-[15px]'>
                                    <span className='font-bold text-[20px]'>SHOP :</span>
                                    <span className='text-[20px] text-[#00a8e8]'>{detail.typeModel}</span>
                                </div>
                                <div className='lg:absolute bottom-0 w-full'>
                                    <button
                                        type='button'
                                        onClick={() => onAdd(detail)}
                                        className='flex justify-center items-center w-full p-[14px_24px] rounded-[24px] bg-[#F82888] font-bold text-[#fff]'
                                        disabled={detail.inventory === 0}>
                                        <span>Add To Cart</span>
                                        <FontAwesomeIcon icon={faCaretRight} className='absolute lg:right-[19px] max-sm:right-[45px] text-[20px]' />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
        <Footer />
    </div>
  )
}

export default ProductDetail   