import React, { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import { HomeContext } from '../../context/HomeContext';
import { AuthContext } from '../../context/authContext';
import { ProductContext } from '../../context/ProductContext';
import { SearchContext } from '../../context/SearchContext';
import { useShopContext } from '../../context/ShopContext';
import { useDispatch, useSelector } from 'react-redux';
import { removeProductToCart, deleteProductToCart } from '../../store/CartSlice';

function Header() {
    const { state, setState } = useContext(AuthContext);
    const { list, setList} = useContext(HomeContext);
    const { product, setProduct} = useContext(ProductContext);
    const { search, setSearch} = useContext(SearchContext);
    // const { carts} = useShopContext();
    const carts = useSelector((state) => state.cart.carts);
    const dispatch = useDispatch();
    const Navigate = useNavigate();
    console.log(carts);

    // const removeToCart = (product) => {
    //     dispatch(removeProductToCart(product))
    // }

    const handleLogout = (product) => {
        setState({ email: '', password: '', username: '' });
        window.localStorage.removeItem('email');
        dispatch(deleteProductToCart(product));
        Navigate('/');
    };

    const PageHandling = () => {
        // if (carts.length === 0) {
        //     Navigate('/login')
        // } else {
            Navigate('/viewcart')
        // }
    }

    const getData = async () => {
        const response = await axios.get(
            'http://localhost:8000/product'
        );

        if (response.status === 200) {
            setList(response.data)
        }
    };

    const handleSreach = (event) => {
        event.preventDefault();
        const data = {
            search: event.target.search.value
        }
        const foundProduct = [...list].filter(item => item.nameProduct.toLowerCase().includes(data.search.toLowerCase()));
        const sortfD = [...foundProduct].sort((a, b) => b.id - a.id);
        setSearch(data.search);
        setProduct(sortfD);
        Navigate('/searchresult');

    }

    useEffect(() => {
        getData();
    }, [])


    return (
        <div>
            <div className='flex flex-row justify-center items-center w-full fixed top-0 left-0 right-0 z-50' id='pagetop'>
                <div className='flex  container justify-between bg-[#02021E] h-[70px] px-[24px]'>
                    <div className='flex flex-row  gap-[20px] items-center w-full h-full'>
                        <div className='h-full'>
                            <Link to={'/'}>
                                <img src='/images/logoFooter.png' className='h-full'></img>

                            </Link>
                        </div>
                        <div className='relative w-2/5'>
                            <form
                                onSubmit={handleSreach}
                                className='flex flex-row items-center w-full'>
                                <input 
                                    name='search' 
                                    className='w-full p-[8px_16px_8px_40px] border rounded-[18px] text-[12.2px] border-gray bg-[#f8f8f8]' type='search' placeholder='SEARCH'></input>
                                <button 
                                    type='submit'
                                    className='flex items-center absolute top-0 left-[10px] text-black cursor-pointer w-[36px] h-full'>
                                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                                </button>
                            </form>
                        </div>
                    </div>

                    <div className='flex flex-row items-center gap-[30px] h-full'>
                        <div className='flex flex-row items-center gap-[30px] h-full'>
                            <div className='flex items-center h-full'>
                                <a className='flex items-center border-b-4 border-transparent border-solid font-bold h-full text-[#fff] hover:border-[#454c53] cursor-pointer'>FRANCHISES</a>
                            </div>
                            <div className='flex items-center h-full'>
                                <a className='flex items-center border-b-4 border-transparent border-solid font-bold h-full text-[#fff] hover:border-[#454c53] cursor-pointer'>SHOPS</a>
                            </div>
                        </div>
                        <button 
                            type='button'
                            onClick={PageHandling}
                            className='relative border-l border-[#e8e8e8] pl-[24px] py-[8px] cursor-pointer'>
                            <FontAwesomeIcon icon={faCartShopping} className='text-[#fff] text-[18px]' />
                            <p className='absolute top-[-2px] left-[35px] bg-[#F82888] rounded-[20px] min-w-[30px] max-h-[25px] text-center text-[15px] text-[#fff]'>
                                {carts.length}
                            </p>
                        </button>

                        {state?.email ? (
                            <div className='relative logout'>
                                <p className='px-[24px] py-[8px] font-bold cursor-pointer text-[#fff]'>{state.email}</p>
                                <div className="a-tooltip--type-1">
                                    <button
                                        onClick={handleLogout}
                                        className=''>
                                        LOGOUT
                                    </button>

                                </div>
                            </div>
                        ) : (
                            <Link to="/login">
                                <div className='relative login'>
                                    <a className='px-[24px] py-[8px] cursor-pointer'>
                                        <FontAwesomeIcon icon={faUser} className='text-[#fff] text-[20px]' />
                                    </a>
                                    <div className="a-tooltip--type-2">SIGN IN</div>
                                </div>
                            </Link>
                        )}

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Header