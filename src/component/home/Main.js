import React, { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { HomeContext } from '../../context/HomeContext';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Main() {
    const { list, setList } = useContext(HomeContext);
    const [listP, setListP] = useState([]);

    const getData = async () => {
        const response = await axios.get(
            'http://localhost:8000/product',
        );

        if (response.status === 200) {
            setList(response.data)
            const sortL = [...response.data].sort((a, b) => b.id - a.id);
            const fiveItems = sortL.slice(0,5)
            setListP(fiveItems);
        }
    };

    console.log(listP);
    useEffect(() => {
        getData();
    }, []);


  return (
    <div className='pt-[70px]'>
        <div>
            <img className='w-full' src='/images/banner.png'></img>
        </div>
        <div className='max-w-[1244px] mx-auto my-0'>
            <main>
                <section>
                    <section className='my-[48px]'>
                        <div>
                            <h3>
                                <span className='block font-bold text-[30px] m-[42px_0_22px_0]'>SHOPS</span>
                            </h3>
                        </div>
                        <div className='grid grid-cols-6 gap-[2px] shadow-[0_1px_2px_0_rgba(48,56,64,0.16)] bg-[#fff]'>
                              <a className='border-r border-red border-solid border-b'>
                                  <img className='aspect-[250/180] w-full p-[20px]' src='/images/logoNaruto.png'></img>
                              </a>
                              <a className='border-r border-red border-solid border-b'>
                                  <img className='aspect-[250/180] w-full p-[20px]' src='/images/logoGundam.png'></img>
                              </a>
                              <a className='border-r border-red border-solid border-b'>
                                  <img className='aspect-[250/180] w-full p-[20px]' src='/images/logoDragonball.png'></img>
                              </a>
                              <a className='border-r border-red border-solid border-b'>
                                <Link to={'/shopmavel'}>  
                                  <img className='aspect-[250/180] w-full p-[20px]' src='/images/logoMavel.png'></img>
                                </Link>
                              </a>
                              <a className='border-r border-red border-solid border-b'>
                                  <img className='aspect-[250/180] w-full p-[20px]' src='/images/logoTransformers.png'></img>
                              </a>
                              <a className='border-r border-red border-solid border-b'>
                                  <img className='aspect-[250/180] w-full p-[20px]' src='/images/logoOnepice.png'></img>
                              </a>
                        </div>
                    </section>

                    <section className='mt-[49px]'>
                        <div className='relative mb-[28px]'>
                            <div className='absolute top-[-1px] left-0 bottom-0 text-[32px]'>
                                <FontAwesomeIcon icon={faBell} />
                            </div>
                            <h3 className='pl-[46px]'>
                                <span className='block font-bold text-[30px]'>NEW PRODUCTS</span>
                            </h3>
                            <p className='mt-[6px] text-[#707070]'>THE LAST FORM ĐT MODEL</p>
                        </div>
                        <div className='grid grid-cols-5 shadow-[0_1px_2px_0_rgba(48,56,64,0.16)] bg-[#fff]'>
                            {listP.map((item) => (
                                <div key={item} className='item relative border-r border-red border-solid border-b p-[37px_36px_24px_36px]'>
                                    <a className=''>
                                        <img
                                            className='w-[176px] h-[176px]'
                                            src={item.imgs} alt=''>
                                        </img>
                                        <div className='h-[50px] overflow-hidden mt-[14px]'>
                                            <p className='nameP'>{item.nameProduct}</p>
                                        </div>
                                        <span className='font-light'>{item.unit} {item.price}</span>
                                    </a>
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
                            ))}
                        </div>
                    </section>

                    <section className='mt-[80px] p-[48px_0_64px_0]'>

                    </section>
                </section>
            </main>

        </div>
    </div>
  )
}

export default Main