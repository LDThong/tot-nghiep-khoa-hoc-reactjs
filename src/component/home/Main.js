import React, { useContext, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { HomeContext } from '../../context/HomeContext';
import axios from 'axios';

function Main() {
    const { list, setList} = useContext(HomeContext);

    const getData = async () => {
        const response = await axios.get(
            'http://localhost:8000/product',
        );

        if(response.status === 200) {
            setList(response.data)
            console.log(list);
        }
    };

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
                            {/* {[1, 2, 3, 4, 5, 6].map((item) => (
                                <div key={item}>
                                    <a className='border-r border-red border-solid border-b'>
                                        <img className='aspect-[250/180] w-full p-[20px]' src={`'/images/post${item}.png'`} alt=''></img>
                                    </a>
                                </div>
                            ))} */}
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
                                <img className='aspect-[250/180] w-full p-[20px]' src='/images/logoMavel.png'></img>
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
                        <div className='grid grid-cols-5 gap-[2px] shadow-[0_1px_2px_0_rgba(48,56,64,0.16)] bg-[#fff]'>
                            {list.map((item) => (
                                <div key={item} className='border-r border-red border-solid border-b p-[37px_36px_24px_36px]'>
                                    <a className=''>
                                        <img
                                            className='w-full h-auto'
                                            src='/images/MG-tallgeese-II.png' alt=''>
                                        </img>
                                        <div className='mt-[14px]'>
                                            <p className='overflow-hidden'>{item.name}</p>
                                            <span className='font-light'>{item.price} {item.unit}</span>
                                        </div>
                                    </a>
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