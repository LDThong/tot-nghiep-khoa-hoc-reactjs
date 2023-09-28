import React, { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { HomeContext } from '../../context/HomeContext';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {MdNotificationsActive} from 'react-icons/md';
import Shops from './Shops';

function Main() {
    const { list, setList } = useContext(HomeContext);
    const [listP, setListP] = useState([]);

    const getData = async () => {
        const response = await axios.get(
            'http://localhost:8000/product',
        );

        if (response.status === 200) {
            setList(response.data);
            const sortL = [...response.data].sort((a, b) => b.id - a.id);
            const fiveItems = sortL.slice(0, 5)
            setListP(fiveItems);
        }
    };

    useEffect(() => {
        getData();
    }, []);


    return (
        <div className='pt-[70px]'>
            <div className=''>
                <img className='w-full h-auto lg:block max-sm:hidden' src='/images/bannertext2.png'></img>
                <img className='w-full h-auto lg:hidden max-sm:block' src='/images/logoLogin.png'></img>
            </div>
            <div className='max-w-[1244px] mx-auto pb-[60px]'>
                <main>
                    <section>
                        <section className='my-[48px] max-sm:px-[12px]'>
                            <div>
                                <h3>
                                    <span className='block font-bold text-[30px] m-[42px_0_22px_0] max-sm:text-center'>SHOPS</span>
                                </h3>
                            </div>
                            <div className='
                                lg:grid lg:grid-cols-6 lg:gap-[2px] 
                                max-sm:grid max-sm:grid-cols-3 
                                shadow-[0_1px_2px_0_rgba(48,56,64,0.16)] bg-[#fff]'>
                                <a className='border-r border-red border-solid border-b'>
                                    <Link to={'/shopnaruto'}>
                                        <img className='aspect-[250/180] w-full p-[20px]' src='/images/logoNaruto.png'></img>
                                    </Link>
                                </a>
                                <a className='border-r border-red border-solid border-b'>
                                    <Link to={'/shopgundam'}>
                                        <img className='aspect-[250/180] w-full p-[20px]' src='/images/logoGundam.png'></img>
                                    </Link>
                                </a>
                                <a className='border-r border-red border-solid border-b'>
                                    <Link to={'/shopdragonball'}>
                                        <img className='aspect-[250/180] w-full p-[20px]' src='/images/logoDragonball.png'></img>
                                    </Link>
                                </a>
                                <a className='border-r border-red border-solid border-b'>
                                    <Link to={'/shopmarvel'}>
                                        <img className='aspect-[250/180] w-full p-[20px]' src='/images/logoMavel.png'></img>
                                    </Link>
                                </a>
                                <a className='border-r border-red border-solid border-b'>
                                    <Link to={'/shoptransformers'}>
                                        <img className='aspect-[250/180] w-full p-[20px]' src='/images/logoTransformers.png'></img>
                                    </Link>
                                </a>
                                <a className='border-r border-red border-solid border-b'>
                                    <Link to={'/shoponepiece'}>
                                        <img className='aspect-[250/180] w-full p-[20px]' src='/images/logoOnepice.png'></img>
                                    </Link>
                                </a>
                            </div>
                        </section>

                        <section className='lg:mt-[80px] max-sm:mt-[60px] max-sm:px-[12px]'>
                            <div className='lg:relative mb-[28px] lg:text-left
                                max-sm:flex max-sm:flex-col max-sm:justify-center max-sm:items-center'>
                                <div className='text-[#303840]
                                    lg:absolute lg:top-[3px] lg:left-0 lg:bottom-0 lg:text-[38px]
                                    max-sm:text-[40px] 
                                '>
                                    <MdNotificationsActive />
                                </div>
                                <h3 className='lg:pl-[46px]'>
                                    <span className='block font-bold text-[30px] text-[#303840]'>NEW PRODUCTS</span>
                                </h3>
                                <p className='mt-[6px] text-[#707070]'>THE LAST FORM ĐT MODEL</p>
                            </div>
                            <div className='lg:grid lg:grid-cols-5 max-sm:grid max-sm:grid-cols-2 shadow-[0_1px_2px_0_rgba(48,56,64,0.16)] bg-[#fff]'>
                                {listP.map((item) => (
                                    <div 
                                        key={item}>
                                        <div className='lg:block max-sm:hidden item relative border-r border-red border-solid border-b p-[37px_36px_24px_36px]'>
                                            <div className=''>
                                                <img
                                                    className='lg:w-[176px] lg:h-[176px] max-sm:w-[120px] max-sm:h-[120px]'
                                                    src={item.imgs} alt=''>
                                                </img>
                                                <div className='h-[50px] overflow-hidden mt-[14px]'>
                                                    <p className='nameP'>{item.nameProduct}</p>
                                                </div>
                                                <span className='font-light'>{item.unit} {item.price}</span>
                                            </div>
                                            <div className='item-hidden absolute top-0 left-0 right-0 bottom-0 p-[176px_36px_24px_36px]'>
                                                <Link to={'/productdetail/' + item.id} state={item}>
                                                    <div className='detail relative flex justify-center items-center p-[10px_24px_9px_24px] leading-none bg-[#f0f0f0] text-[#303840] rounded-[24px] w-full'>
                                                        <span>VIEW DETAIL</span>
                                                        <FontAwesomeIcon className='icon-detail' icon={faCaretRight} />
                                                    </div>
                                                </Link>
                                                <div className='item-name'>
                                                    <div className='h-[50px] overflow-hidden mt-[14px]'>
                                                        <p className='nameP'>{item.nameProduct}</p>
                                                    </div>
                                                    <span className='font-light'>{item.unit} {item.price}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='lg:hidden max-sm:block item relative border-r border-red border-solid border-b lg:p-[37px_36px_24px_36px]
                                            max-sm:p-[20px]'>
                                            <Link to={'/productdetail/' + item.id} state={item}>
                                                <img
                                                    className='lg:w-[176px] lg:h-[176px] max-sm:w-[120px] max-sm:h-[120px]'
                                                    src={item.imgs} alt=''>
                                                </img>
                                                <div className='h-[50px] overflow-hidden mt-[14px]'>
                                                    <p className='nameP'>{item.nameProduct}</p>
                                                </div>
                                                <span className='font-light'>{item.unit} {item.price}</span>
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <Shops />
                    </section>
                </main>

            </div>
        </div>
    )
}

export default Main