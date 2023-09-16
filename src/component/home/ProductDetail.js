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
    // const { addProductToCart} = useShopContext();
    const dispatch = useDispatch();
    const onAdd = (newProduct) => {
        dispatch(addProductToCart(newProduct));
    };

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

  return (
    <div>
        <Header />
        <div className='mt-[30px] h-full bg-[#F8F8F8] p-[50px_0_50px_0]'>
            <div className='flex items-center gap-[10px] w-[1140px] mx-auto p-[10px_0_15px_0]'>
                <Link to={'/'}>
                    <h1>Home</h1>
                </Link>
                <AiOutlineRight className='text-[#CDCDCD]'/>
                    <p>{detail.typeModel}</p>
                <AiOutlineRight className='text-[#CDCDCD]'/>
                <p className='font-bold'>{detail.nameProduct}</p>
            </div>
            {detail && (
                <div 
                    onClick={() => onAdd(detail)}
                    className='w-[1140px] mx-auto bg-[#fff] h-full'>
                    <div className='flex flex-row gap-[64px] p-[48px] w-full h-full'>
                        <div className='w-[56%] h-full'>
                            <div className='w-full'>
                                <img src={detail.imgs} className='w-full'></img>
                            </div>
                        </div>
                        <div className='w-[44%] relative'>
                            <div className='w-full'>
                                <h1 className='font-medium m-[-9px_0_23px_0] leading-[1.3125] tracking-[0em] text-[32px] text-black'>{detail.nameProduct}</h1>
                                <p className='mb-[20px]'>
                                    <span className='text-[#f82888] text-[24px] leading-[1]'>{detail.unit}</span>
                                    <span className='text-[#f82888] m-[0_2px_0_6px] text-[35px] leading-[1] tracking-[0.04em] font-semibold'>{detail.price}</span>
                                </p>
                                <div className='flex items-center gap-[30px]'>
                                    <span className='font-bold text-[20px]'>SHOP :</span>
                                    <span className='text-[20px] text-[#00a8e8]'>{detail.typeModel}</span>
                                </div>
                                <form>
                                    <div className='absolute bottom-0 w-full'>
                                        <button 
                                            type='button'
                                            className='flex justify-center items-center w-full p-[14px_24px] rounded-[24px] bg-[#F82888] font-bold text-[#fff]'>
                                            <span>Add To Cart</span>
                                            <FontAwesomeIcon icon={faCaretRight} className='absolute right-[19px] text-[20px]'/>
                                        </button>
                                    </div>
                                </form>
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