import React, { useContext } from 'react';
import Header from './Header';
import Footer from './Footer';
import { ProductContext } from '../../context/ProductContext';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { AiOutlineRight } from 'react-icons/ai';
import { SearchContext } from '../../context/SearchContext';
import { HomeContext } from '../../context/HomeContext';

function NoSearchResults() {
  const { product, setProduct } = useContext(ProductContext);
  const { search, setSearch} = useContext(SearchContext);

  return (
    <div>
      <Header />
      <div className='mt-[70px] w-[1140px] mx-auto h-full pb-[100px]'>
        <div className='flex items-center gap-[10px] w-full pt-[10px]'>
          <Link to={'/'}>
            <h1>Home</h1>
          </Link>
          <AiOutlineRight className='text-[#CDCDCD]' />
          <p className='font-medium'>SEARCH RESULT</p>
        </div>
        <div className='flex items-center gap-[20px]'>
          <div className='flex items-center py-[20px] w-[15%]'>
            <h1 className='font-bold text-[35px] text-[#303840]'>Store</h1>
          </div>
          <div className='flex items-end gap-[10px] w-[85%]'>
            <p className='font-medium text-[#303840] text-[20px]'>{search}</p>
            <p className='font-bold text-[20px]'>{product.length}</p>
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
              <Link to={'/shopgundam'}>
                <div className='flex items-center gap-[10px] p-[10px_0_10px_15px] border-b hover:text-[#00a8e8] hover:bg-[#fafafa]'>
                  <img className='w-[25px]' src='/images/icon-gundam.png'></img>
                  <p className='font-medium'>Gundam</p>
                </div>
              </Link>
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
          <div className='grid grid-cols-4 bg-[#fff] w-[85%]'>
            {product.map((item) => (
              <div key={item} className='item relative border border-solid p-[37px_36px_24px_36px]'>
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

export default NoSearchResults