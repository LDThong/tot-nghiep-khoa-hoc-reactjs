import React, { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { HomeContext } from '../../context/HomeContext';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Shops() {
    const { list, setList } = useContext(HomeContext);
    const [listNaruto, setListNaruto] = useState([]);
    const [listGundam, setListGundam] = useState([]);
    const [listDragonBall, setListDragonBall] = useState([]);
    const [listMavel, setListMarvel] = useState([]);
    const [listTransformers, setListTransformers] = useState([]);
    const [listOnePiece, setListOnePiece] = useState([]);

    const getData = async () => {
        const response = await axios.get(
            'http://localhost:8000/product',
        );

        if (response.status === 200) {
            setList(response.data);
            const naruto = [...response.data].filter((item) => item.typeModel === 'Naruto');
            const sortNaruto = [...naruto].sort((a, b) => b.id - a.id);
            const fiveProductNaruto = sortNaruto.slice(0, 5);
            setListNaruto(fiveProductNaruto);

            const gundam = [...response.data].filter((item) => item.typeModel === 'Gundam');
            const sortGundam = [...gundam].sort((a, b) => b.id - a.id);
            const fiveProductGundam = sortGundam.slice(0, 5);
            setListGundam(fiveProductGundam);

            const dragonball = [...response.data].filter((item) => item.typeModel === 'Dragon Ball');
            const sortDragonball = [...dragonball].sort((a, b) => b.id - a.id);
            const fiveProductDragonball = sortDragonball.slice(0, 5);
            setListDragonBall(fiveProductDragonball);

            const marvel = [...response.data].filter((item) => item.typeModel === 'Marvel');
            const sortMarvel = [...marvel].sort((a, b) => b.id - a.id);
            const fiveProductMarvel = sortMarvel.slice(0, 5);
            setListMarvel(fiveProductMarvel);

            const transformers = [...response.data].filter((item) => item.typeModel === 'Transformers');
            const sortTransformers = [...transformers].sort((a, b) => b.id - a.id);
            const fiveProductTransformers = sortTransformers.slice(0, 5);
            setListTransformers(fiveProductTransformers);

            const onepiece = [...response.data].filter((item) => item.typeModel === 'OnePiece');
            const sortOnepiece = [...onepiece].sort((a, b) => b.id - a.id);
            const fiveProductOnepiece = sortOnepiece.slice(0, 5);
            setListOnePiece(fiveProductOnepiece);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div>
            <section className='lg:mt-[40px] max-sm:mt-[20px] lg:p-[24px_0_24px_0] max-sm:p-[10px_0_10px_0] max-sm:px-[12px]'>
                <div className='relative mb-[28px] max-sm:text-center text-[#303840]'>
                    <div className='lg:absolute lg:top-[-1px] lg:left-0 lg:bottom-0 text-[32px]'>
                        <FontAwesomeIcon icon={faBell} />
                    </div>
                    <h3 className='lg:pl-[46px]'>
                        <span className='block font-bold text-[30px]'>SHOP NARUTO</span>
                    </h3>
                </div>
                <div className='lg:grid lg:grid-cols-5 max-sm:grid max-sm:grid-cols-2 shadow-[0_1px_2px_0_rgba(48,56,64,0.16)] bg-[#fff]'>
                    {listNaruto.map((item) => (
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
                            <div className='lg:hidden max-sm:block item relative border-r border-red border-solid border-b lg:p-[37px_36px_24px_36px] max-sm:p-[20px]'>
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

            <section className='p-[24px_0_24px_0] max-sm:p-[10px_0_10px_0] max-sm:px-[12px]'>
                <div className='relative mb-[28px] text-[#303840] max-sm:text-center'>
                    <div className='lg:absolute lg:top-[-1px] lg:left-0 lg: bottom-0 text-[32px]'>
                        <FontAwesomeIcon icon={faBell} />
                    </div>
                    <h3 className='lg:pl-[46px]'>
                        <span className='block font-bold text-[30px]'>SHOP GUNDAM</span>
                    </h3>
                </div>
                <div className='lg:grid lg:grid-cols-5 max-sm:grid max-sm:grid-cols-2 shadow-[0_1px_2px_0_rgba(48,56,64,0.16)] bg-[#fff]'>
                    {listGundam.map((item) => (
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
                            <div className='lg:hidden max-sm:block item relative border-r border-red border-solid border-b lg:p-[37px_36px_24px_36px] max-sm:p-[20px]'>
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

            <section className='p-[24px_0_24px_0] max-sm:p-[10px_0_10px_0] max-sm:px-[12px]'>
                <div className='relative mb-[28px] text-[#303840] max-sm:text-center'>
                    <div className='lg:absolute lg:top-[-1px] lg:left-0 lg:bottom-0 text-[32px]'>
                        <FontAwesomeIcon icon={faBell} />
                    </div>
                    <h3 className='lg:pl-[46px]'>
                        <span className='block font-bold text-[30px]'>SHOP DRAGON BALL</span>
                    </h3>
                </div>
                <div className='lg:grid lg:grid-cols-5 max-sm:grid max-sm:grid-cols-2 shadow-[0_1px_2px_0_rgba(48,56,64,0.16)] bg-[#fff]'>
                    {listDragonBall.map((item) => (
                        <div
                            key={item}>
                            <div className='lg:block max-sm:hidden item relative border-r border-red border-solid border-b lg:p-[37px_36px_24px_36px] max-sm:p-[20px]'>
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
                            <div className='lg:hidden max-sm:block item relative border-r border-red border-solid border-b lg:p-[37px_36px_24px_36px] max-sm:p-[20px]'>
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

            <section className='p-[24px_0_24px_0] max-sm:p-[10px_0_10px_0] max-sm:px-[12px]'>
                <div className='relative mb-[28px] text-[#303840] max-sm:text-center'>
                    <div className='lg:absolute lg:top-[-1px] lg:left-0 lg:bottom-0 text-[32px]'>
                        <FontAwesomeIcon icon={faBell} />
                    </div>
                    <h3 className='lg:pl-[46px]'>
                        <span className='block font-bold text-[30px]'>SHOP MARVEL</span>
                    </h3>
                </div>
                <div className='lg:grid lg:grid-cols-5 max-sm:grid max-sm:grid-cols-2 shadow-[0_1px_2px_0_rgba(48,56,64,0.16)] bg-[#fff]'>
                    {listMavel.map((item) => (
                        <div
                            key={item}>
                            <div className='lg:block max-sm:hidden item relative border-r border-red border-solid border-b lg:p-[37px_36px_24px_36px] max-sm:p-[20px]'>
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
                            <div className='lg:hidden max-sm:block item relative border-r border-red border-solid border-b lg:p-[37px_36px_24px_36px] max-sm:p-[20px]'>
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

            <section className='p-[24px_0_24px_0] max-sm:p-[10px_0_10px_0] max-sm:px-[12px]'>
                <div className='relative mb-[28px] text-[#303840] max-sm:text-center'>
                    <div className='lg:absolute lg:top-[-1px] lg:left-0 lg:bottom-0 text-[32px]'>
                        <FontAwesomeIcon icon={faBell} />
                    </div>
                    <h3 className='lg:pl-[46px]'>
                        <span className='block font-bold text-[30px]'>SHOP TRANSFORMERS</span>
                    </h3>
                </div>
                <div className='lg:grid lg:grid-cols-5 max-sm:grid max-sm:grid-cols-2 shadow-[0_1px_2px_0_rgba(48,56,64,0.16)] bg-[#fff]'>
                    {listTransformers.map((item) => (
                        <div
                            key={item}>
                            <div className='lg:block max-sm:hidden item relative border-r border-red border-solid border-b lg:p-[37px_36px_24px_36px] max-sm:p-[20px]'>
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
                            <div className='lg:hidden max-sm:block item relative border-r border-red border-solid border-b lg:p-[37px_36px_24px_36px] max-sm:p-[20px]'>
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

            <section className='p-[24px_0_24px_0] max-sm:p-[10px_0_10px_0] max-sm:px-[12px]'>
                <div className='relative mb-[28px] text-[#303840] max-sm:text-center'>
                    <div className='lg:absolute lg:top-[-1px] lg:left-0 lg:bottom-0 text-[32px]'>
                        <FontAwesomeIcon icon={faBell} />
                    </div>
                    <h3 className='lg:pl-[46px]'>
                        <span className='block font-bold text-[30px]'>SHOP ONE PIECE</span>
                    </h3>
                </div>
                <div className='lg:grid lg:grid-cols-5 max-sm:grid max-sm:grid-cols-2 shadow-[0_1px_2px_0_rgba(48,56,64,0.16)] bg-[#fff]'>
                    {listOnePiece.map((item) => (
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
                            <div className='lg:hidden max-sm:block item relative border-r border-red border-solid border-b lg:p-[37px_36px_24px_36px] max-sm:p-[20px]'>
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
        </div>
    )
}

export default Shops  