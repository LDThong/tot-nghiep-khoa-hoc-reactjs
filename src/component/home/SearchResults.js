import React, { useContext } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { AiOutlineRight } from 'react-icons/ai';
import { SearchContext } from '../../context/SearchContext';

function NoSearchResults() {
  const { product } = useContext(SearchContext);
  const { search} = useContext(SearchContext);

  return (
    <div className='bg-[#F8F8F8]'>
      <Header />
      <div className='mt-[70px] lg:w-[1140px] lg:mx-auto h-full pb-[100px] max-sm:px-[12px]'>
        <div className='flex items-center gap-[10px] w-full pt-[10px]'>
          <Link to={'/'}>
            <h1 className='max-sm:text-[10px]'>Home</h1>
          </Link>
          <AiOutlineRight className='text-[#CDCDCD] max-sm:text-[12px]' />
          <p className='font-medium max-sm:text-[10px]'>SEARCH RESULT</p>
        </div>
        <div className='flex items-center lg:gap-[20px]'>
          <div className='flex items-center py-[20px] w-[15%]'>
            <h1 className='font-bold text-[35px] text-[#303840]'>Store</h1>
          </div>
          <div className='flg:block max-sm:hidden flex items-baseline gap-[10px] w-[85%]'>
            <p className='font-medium text-[#303840] text-[20px]'>{search}</p>
            <p className='font-bold text-[20px]'>{product.length}</p>
            <span className='text-[15px]'>Products</span>
          </div>
        </div>
        <div className='flex w-full lg:gap-[20px] max-sm:flex-col'>
          <div className='lg:w-[15%] max-sm:w-full'>
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
          {product.length ? (
            <div className='lg:block max-sm:hidden lg:grid lg:grid-cols-4 lg:w-[85%]'>
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
          ) : (
              <div className='lg:block max-sm:hidden lg:flex lg:flex-col lg:justify-center border w-full bg-[#fff] px-[35px] h-[164px]'>
                <div className='bg-[#F8F8F8] p-[15px_25px_15px_25px] text-center'>
                  <p className='text-[#383838] font-medium'>No item matching your search criteria.</p>
                </div>
              </div>
          )}
          

          <div className='lg:hidden max-sm:block'>
            <div className='flex items-center gap-[10px] w-full p-[15px]'>
              <p className='font-medium text-[#303840] text-[20px]'>{search}</p>
              <div className='flex items-baseline gap-[10px]'>
                <p className='font-bold text-[20px]'>{product.length}</p>
                <span className='text-[15px]'>Products</span>
              </div>
            </div>

              {product.length ? (
                <div className='max-sm:flex max-sm:flex-col max-sm:grid max-sm:grid-cols-2 max-sm:w-full'>
                  {product.map((item) => (
                    <div key={item} className='item relative border border-solid bg-[#fff] p-[20px]'>
                      <Link to={'/productdetail/' + item.id} state={item}>
                        <img
                          className='w-[120px] h-[120px]'
                          src={item.imgs} alt=''>
                        </img>
                        <div className='h-[50px] overflow-hidden mt-[14px]'>
                          <p className='nameP'>{item.nameProduct}</p>
                        </div>
                        <span className='font-light'>{item.unit} {item.price}</span>
                      </Link>
                    </div>
                  ))}
                </div>
              ) : (
                <div className='border w-full bg-[#fff] p-[15px]'>
                  <div className='bg-[#F8F8F8] p-[15px_25px_15px_25px] text-center'>
                    <p className='text-[#383838] font-medium'>No item matching your search criteria.</p>
                  </div>
                </div>
              )}
              
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default NoSearchResults