import React, { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import { HomeContext } from '../../context/HomeContext';
import { AuthContext } from '../../context/authContext';
import { SearchContext } from '../../context/SearchContext';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProductToCart } from '../../store/CartSlice';
import {IoTriangleSharp} from 'react-icons/io5';
import {LiaBarsSolid} from 'react-icons/lia';
import {HiMiniXMark} from 'react-icons/hi2';
import {RxTriangleRight} from 'react-icons/rx';
import {CiSearch} from 'react-icons/ci';
import {HiOutlineLogout} from 'react-icons/hi';

function Header() {
    const { state, setState } = useContext(AuthContext);
    const { list, setList} = useContext(HomeContext);
    const { product, setProduct} = useContext(SearchContext);
    const { search, setSearch} = useContext(SearchContext);
    const carts = useSelector((state) => state.cart.carts);
    const [dataSearch, setDataSearch] = useState('');
    const [style, setStyle] = useState("hidden");
    const [nav, setNav] = useState("block");
    const [xMark, setXMark] = useState("hidden");
    const [iconXMark, setIconXMark] = useState("hidden");
    const [searchF, setSearchF] = useState("hidden");
    const [iconCancelSearch, setIconCancelSearch] = useState("hidden");
    const [iconS, setIconS] = useState("block");
    const dispatch = useDispatch();
    const Navigate = useNavigate();

    const handleLogout = (product) => {
        setState({ email: '', password: '', username: '', id: '', fullName: '', phoneNumber: '' });
        window.localStorage.removeItem('username');
        window.localStorage.removeItem('id');
        window.localStorage.removeItem('email');
        window.localStorage.removeItem('fullName');
        window.localStorage.removeItem('phoneNumber');
        window.localStorage.removeItem('cartItem');
        dispatch(deleteProductToCart(product));
        Navigate('/');
    };

    const PageHandling = () => {
        Navigate('/viewcart')
    }

    const getData = async () => {
        const response = await axios.get(
            'http://localhost:8000/product'
        );

        if (response.status === 200) {
            setList(response.data)
        }
    };

    const handleSreach = () => {
        const foundProduct = [...list].filter(item => item.nameProduct.toLowerCase().includes(dataSearch.toLowerCase()));
        const sortfD = [...foundProduct].sort((a, b) => b.id - a.id);
        setSearch(dataSearch);
        setProduct(sortfD);
        setSearchF("hidden");
        setIconCancelSearch("hidden");
        setIconS("block");
        Navigate('/searchresult');

    }

    const handleNavBars = () => {
        setIconCancelSearch("hidden");
        setIconS("block");
        setStyle("block");
        setXMark("block");
        setIconXMark("block");
        setNav("hidden");
    };

    const handleCancelNav = () => {
        setIconCancelSearch("hidden");
        setStyle("hidden");
        setIconXMark("hidden");
        setSearchF("hidden");
        setIconS("block");
        setNav("block");
    };

    const buttonSearch = () => {
        setSearchF("block");
        setIconS("hidden");
        setIconCancelSearch("block");
        setIconXMark("hidden");
        setNav("block");
        setStyle("hidden");
    }

    const handleCanceleSearch = () => {
        setIconCancelSearch("hidden");
        setSearchF("hidden");
        setIconS("block");
    }

    useEffect(() => {
        getData();
    }, [])

    const navBars = ` ${style} absolute left-0 right-0 h-screen bg-[#fff] z-1`;
    const navB = ` ${nav} flex flex-col justify-center h-full`;
    const cancelNav = ` ${xMark} flex flex-col justify-center h-full `;
    const miniXMark = ` ${iconXMark} text-[#000] text-[40px]`;
    const searchFrame = ` ${searchF} absolute left-0 right-0 bottom-[-57px] py-[10px] bg-[#303840]`;
    const buttonCancelSearch = ` ${iconCancelSearch} bg-[#303840] h-full px-[5px]`;
    const iconSearch = ` ${iconS} flex items-center px-[5px]`;

    return (
        <div>
            <div className='lg:flex lg:flex-row lg:justify-center lg:items-center lg:w-full 
                fixed top-0 left-0 right-0 z-50' id='pagetop'>
                <div className='flex lg:container lg:justify-between lg:bg-[#02021E] max-sm:bg-[#fff] h-[70px] lg:px-[24px] max-sm:p-[5px_12px_5px_12px]
                    max-sm:shadow-[0px_1px_2px_rgba(48,56,64,.16)] max-sm:border-b '>
                    <div className='lg:hidden max-sm:block'>
                        <div 
                            onClick={handleNavBars}
                            className={navB}>
                            <LiaBarsSolid className='text-[#000] text-[40px]' />
                        </div>
                        <div
                            onClick={handleCancelNav}
                            className={cancelNav}>
                            <HiMiniXMark className={miniXMark} />
                        </div>
                    </div>
                    <div className='flex flex-row items-center w-full h-full 
                        lg:gap-[20px] max-sm:justify-center max-sm:relative'>
                        <div className='h-full '>
                            <Link to={'/'} className=''>
                                <img src='/images/logoFooter.png' className='h-full max-sm:rounded-[15px]'></img>
                            </Link>
                        </div>

                        <div className='lg:relative lg:w-2/5 lg:block max-sm:hidden'>
                            <form
                                className='flex flex-row items-center w-full'>
                                <input 
                                    name='search'
                                    onChange={(e) => setDataSearch(e.target.value)}
                                    className='w-full p-[8px_16px_8px_40px] border rounded-[18px] text-[12.2px] border-gray bg-[#f8f8f8]' type='search' placeholder='SEARCH'></input>
                                <button 
                                    type='button'
                                    onClick={handleSreach}
                                    className='flex items-center absolute top-0 left-[10px] text-black cursor-pointer w-[36px] h-full'>
                                    <CiSearch className='text-[20px]'/>
                                </button>
                            </form>
                        </div>

                        <div className='
                            lg:hidden 
                            max-sm:block max-sm:absolute max-sm:top-[-5px] max-sm:right-0 max-sm:h-[119%] max-sm:flex max-sm:flex-col max-sm:justify-center'>
                            <button 
                                onClick={buttonSearch}
                                className={iconSearch}>
                                <CiSearch className='text-[25px]'/>
                            </button>
                            <button 
                                onClick={handleCanceleSearch}
                                className={buttonCancelSearch}>
                                <HiMiniXMark className='text-[30px] text-[#fff]' />
                            </button>
                        </div>
                    </div>
                        
                    <div className={searchFrame}>
                        <input
                            name='search'
                            onChange={(e) => setDataSearch(e.target.value)}
                            className='border-[2px] p-[5px_12px_5px_12px] w-full'
                            placeholder='SEARCH'
                        ></input>
                        <button 
                            type='button'
                            onClick={handleSreach}
                            className='absolute right-[15px] top-[15px]'>
                            <CiSearch className='text-[25px]'/>
                        </button>
                    </div>

                    <div className='flex flex-row items-center gap-[30px] h-full 
                        lg:w-[25%]'>
                        <div className='ld:block max-sm:hidden flex flex-row items-center gap-[30px] h-full shops'>
                            <div className='flex items-center h-full '>
                                <a className='flex items-center border-b-4 border-transparent border-solid font-bold h-full text-[#fff] hover:border-[#454c53] cursor-pointer'>
                                    SHOPS
                                </a>
                            </div>
                            <div className='listshops lg:absolute lg:bg-[#fff] lg:bottom-[-64px] lg:right-0 lg:left-0 lg:shadow-[15px_15px_15px_rgba(0,0,0,.15)]'>
                                <div className='lg:w-[1140px] lg:mx-auto lg:py-[20px] lg:flex lg:justify-between'>
                                    <Link to={'/shopnaruto/'} className='text-[#303840] hover:text-[#00BBF1]'>
                                        NARUTO
                                    </Link>
                                    <Link to={'/shopgundam/'} className='text-[#303840] hover:text-[#00BBF1]'>
                                        GUNDAM
                                    </Link>
                                    <Link to={'/shopdragonball/'} className='text-[#303840] hover:text-[#00BBF1]'>
                                        DRAGON BALL
                                    </Link>
                                    <Link to={'/shopmarvel/'} className='text-[#303840] hover:text-[#00BBF1]'>
                                        MARVEL
                                    </Link>
                                    <Link to={'/shoptransformers/'} className='text-[#303840] hover:text-[#00BBF1]'>
                                        TRANSFORMERS
                                    </Link>
                                    <Link to={'/shoponepiece/'} className='text-[#303840] hover:text-[#00BBF1]'>
                                        ONE PIECE
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <button 
                            type='button'
                            onClick={PageHandling}
                            className='relative lg:border-l border-[#e8e8e8] lg:pl-[24px] max-sm:pl-[20px] py-[8px] cursor-pointer'>
                            <FontAwesomeIcon icon={faCartShopping} className='lg:text-[#fff] text-[18px] max-sm:pr-[20px] max-sm:text-[#000]' />
                            <p className='absolute top-[-2px] left-[35px] bg-[#F82888] rounded-[20px] min-w-[30px] max-h-[25px] text-center text-[15px] text-[#fff]'>
                                {carts.length}
                            </p>
                        </button>

                        {state?.username ? (
                            <div className='lg:block max-sm:hidden relative logout w-full text-center'>
                                <p className='px-[12px] py-[8px] font-bold cursor-pointer text-[#fff]'>{state.username}</p>
                                <div className="a-tooltip--type-1 shadow-[1px_1px_15px_rgba(0,0,0,.15)]">
                                    <IoTriangleSharp className='absolute top-[-11px] right-[45px] shadow-[1px_1px_15px_rgba(0,0,0,.15)] text-[#303840]'/>
                                    <div className='flex flex-col '>
                                        <Link to={'/user/' + state.id}>
                                            <button className='font-bold border-b border-[#ddd]'>
                                                User Infor
                                            </button>
                                        </Link>
                                        <button
                                            onClick={handleLogout}
                                            className=''>
                                            Logout
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <Link to="/login" className='lg:block max-sm:hidden w-full'>
                                <div className='relative login text-center'>
                                    <a className='px-[24px] py-[8px] cursor-pointer'>
                                        <FontAwesomeIcon icon={faUser} className='text-[#fff] text-[20px]' />
                                    </a>
                                    <div className="a-tooltip--type-2">
                                        <IoTriangleSharp className='absolute top-[-11px] right-[33px] shadow-[1px_1px_15px_rgba(0,0,0,.15)] text-[#303840]'/>
                                        SIGN IN
                                    </div>
                                </div>
                            </Link>
                        )}

                    </div>

                </div>
                <div className={navBars}>
                    <Link to={'/shops/'}>
                        <div className='flex items-center justify-between border-b p-[12px]'>
                            <p className='font-bold text-[20px]'>SHOPS</p>
                            <RxTriangleRight className='text-[22px] text-[#C8C8C8]'/>
                        </div>
                    </Link>
                    {state?.username? (
                        <div className=''>
                            <div className='flex justify-between items-center p-[12px] border-b'>
                                <p>{state.username}</p>
                                <Link to={'/user/' + state.id}>
                                    <button className='font-bold border-[#ddd] bg-gray-300 px-[15px] rounded-[25px]'>
                                        User Infor
                                    </button>
                                </Link>
                            </div>
                            <div className='p-[12px]'>
                                <button
                                    onClick={handleLogout}
                                    className='flex items-center gap-[15px] text-[#c8c8c8]'>
                                    Logout
                                    <HiOutlineLogout className='text-[18px]'/>
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <Link to={'/login'}>
                                <div className='flex items-center gap-[5px] p-[12px_12px_12px_5px] text-[#008CD2]'>
                                    <RxTriangleRight className='text-[25px]'/>
                                    <p>SIGN IN</p>
                                </div>
                            </Link>
                            <Link to={'/register'}>
                                <div className='flex items-center gap-[5px] p-[0px_12px_12px_5px] text-[#008CD2]'>
                                    <RxTriangleRight className='text-[25px]'/>
                                    <p>REGISTER</p>
                                </div>
                            </Link>
                        </div>
                        
                    )}
                </div>
            </div>
            
        </div>
    )
}

export default Header    