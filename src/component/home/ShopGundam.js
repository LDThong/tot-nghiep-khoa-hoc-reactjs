import React, { useContext, useEffect} from 'react'
import { HomeContext } from '../../context/HomeContext';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
import { AiOutlineRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

function ShopNaruto() {
    const { list, setList } = useContext(HomeContext);

    const getData = async () => {
        const response = await axios.get(
            'http://localhost:8000/product'
        );

        if (response.status === 200) {
            const gundam = [...response.data].filter((item) => item.typeModel === 'Gundam');
            const sortProductGundam = [...gundam].sort((a, b) => b.id - a.id);
            setList(sortProductGundam);
        };
    };
    console.log(list);


    useEffect(() => {
        getData();
    }, []);

  return (
    <div className='bg-[#F8F8F8]'>
        <Header />
        <div className='mt-[70px] w-[1140px] mx-auto h-full pb-[100px]'>
                <div className='flex items-center gap-[10px] w-full pt-[10px]'>
                    <Link to={'/'}>
                        <h1>Home</h1>
                    </Link>
                    <AiOutlineRight className='text-[#CDCDCD]' />
                    <p className='font-medium'>Gundam</p>
                </div>
                <div className='flex items-center gap-[20px]'>
                    <div className='py-[20px] w-[15%]'>
                        <h1 className='font-bold text-[35px] text-[#303840]'>Store</h1>
                    </div>
                    <div className='flex items-end gap-[10px] w-[85%]'>
                        <p className='font-bold text-[20px]'>{list.length}</p>
                        <span className='text-[15px]'>Products</span>
                    </div>
                </div>
                <div className='flex w-full gap-[20px]'>
                    <div className='w-[15%]'>
                        <div className='flex flex-col border bg-[#fff]'>
                            <Link to={'/shopnaruto'}>
                                <div className='flex items-center gap-[10px] p-[10px_0_10px_15px] border-b hover:text-[#00a8e8] hover:bg-[#fafafa]'>
                                    <img className='w-[25px]' src='/images/icon-naruto.png'></img>
                                    <p className='font-medium'>Naruto</p>
                                </div>
                            </Link>
                            <div className='flex items-center gap-[10px] p-[10px_0_10px_15px] border-b bg-[#266EDA]'>
                                <img className='w-[25px]' src='/images/icon-gundam.png'></img>
                                <p className='font-medium text-[#fff]'>Gundam</p>
                            </div>
                            <Link to={'/shopdragonball'}>
                                <div className='flex items-center gap-[10px] p-[10px_0_10px_15px] border-b hover:text-[#00a8e8] hover:bg-[#fafafa]'>
                                    <img className='w-[25px]' src='/images/icon-dragon-ball.png'></img>
                                    <p className='font-medium'>Dragon Ball</p>
                                </div>
                            </Link>
                            <Link to={'/shopmarvel'}>
                                <div className='flex items-center gap-[10px] p-[10px_0_10px_15px] border-b hover:text-[#00a8e8] hover:bg-[#fafafa]'>
                                    <img className='w-[25px]' src='/images/icon-marvel.png'></img>
                                    <p className='font-medium'>Marvel</p>
                                </div>
                            </Link>
                            <Link to={'/shoptransformers'}>
                                <div className='flex items-center gap-[10px] p-[10px_0_10px_15px] border-b hover:text-[#00a8e8] hover:bg-[#fafafa]'>
                                    <img className='w-[25px]' src='/images/icon-transformers.png'></img>
                                    <p className='font-medium'>Transformers</p>
                                </div>
                            </Link>
                            <Link to={'/shoponepiece'}>
                                <div className='flex items-center gap-[10px] p-[10px_0_10px_15px] border-b hover:text-[#00a8e8] hover:bg-[#fafafa]'>
                                    <img className='w-[25px]' src='/images/icon-one-piece.png'></img>
                                    <p className='font-medium'>One Piece</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className='grid grid-cols-4 w-[85%]'>
                        {list.map((item) => (
                            <div key={item} className='item relative border border-solid bg-[#fff] p-[37px_36px_24px_36px]'>
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
                </div>
            </div>
        <Footer />
    </div>
  )
}

export default ShopNaruto