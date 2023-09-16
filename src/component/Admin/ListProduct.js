import React, { useContext, useEffect, useState } from 'react';
import NavAdmin from './navAdmin';
import HeaderAdmin from './headerAdmin';
import { HomeContext } from '../../context/HomeContext';
import axios from 'axios';
import {AiFillDelete, AiTwotoneEdit, AiFillLeftCircle, AiFillRightCircle} from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

function ListProduct() {
  const { list, setList } = useContext(HomeContext);
  const [pageNumber, setPageNumber] = useState(1);
  const Navigate = useNavigate();
  const [pages, setPages] = useState('');

  const handlePageNumber = () =>{
    setPageNumber(pageNumber+1);
  }

  const handlePageNumberBack = () => {
    setPageNumber(pageNumber-1);
  }

  // const getQuantityProduct = async () => {
  //   const res = await axios.get(
  //     `http://localhost:8000/product/`
  //   );

  //   if (res.status === 201) {
  //     setTotalProduct(res.data);
  //     const calculatePages = totalProduct / 3;
  //     const calculatePagesContinue = calculatePages + 0.4;
  //     const resultCalculatePage = calculatePagesContinue.toFixed();
  //     setPages(resultCalculatePage);
  //   };
  // };

  const getData = async () => {
    const response = await axios.get(
      `http://localhost:8000/product?_page=${pageNumber}&_limit=3`,
    );

    if (response.status === 200) {
      setList(response.data);
    }
  };

  useEffect(()=>{
    getData();
  },[pageNumber])
  
  const onDelete = async (id) => {
    let text = ('Are you sure you want to delete');

    if (window.confirm(text) === true) {
      const res = await axios.delete(
        'http://localhost:8000/product/' + id
      );

       if (res.status === 200) {
        alert('Delete item successful')
       };
       await getData();
    };
  };

  const onEdit = (id) => {
    Navigate('/editproduct/' + id)
  }
  
  
  return (

    <div className='flex h-full w-full'>
      <div className='w-1/5'>
        <NavAdmin />
      </div>
      <div className='flex flex-col w-4/5 bg-[#F8F8F8]'>
        <HeaderAdmin />
        <div className='relative flex flex-col w-full h-[82%] px-[40px]'>
          <div className=''>
            <div className='border'>
              <div className='flex flex-row w-full border-b '>
                <div className='w-[18%] bg-[#fff] text-center py-[15px] font-bold text-[20px] bg-yellow-400'>
                  <h1>Image</h1>
                </div>
                <div className='w-[36%] bg-[#fff] text-center py-[15px] font-bold text-[20px] bg-yellow-400'>
                  <p>Name Product</p>
                </div>
                <div className='w-[14%] bg-[#fff] text-center py-[15px] font-bold text-[20px] bg-yellow-400'>
                  <p>Type Model</p>
                </div>
                <div className='w-[14%] bg-[#fff] text-center py-[15px] font-bold text-[20px] bg-yellow-400'>
                  <p>Price</p>
                </div>
                <div className='w-[18%] bg-[#fff] text-center py-[15px] font-bold text-[20px] bg-yellow-400'>
                  <p>Edit Product</p>
                </div>
              </div>
              {list.map((item) => (
                <div key={item} className='flex flex-row bg-[#fff] w-full'>
                  <div className='flex justify-center items-center p-[20px] w-[18%] border-r border-b'>
                    <img className='w-[70%] h-[116px]' src={item.imgs}></img>
                  </div>
                  <div className='flex items-center px-[15px] w-[36%] border-r border-b'>
                    <p className=''>{item.nameProduct}</p>
                  </div>
                  <div className='flex items-center px-[15px] w-[14%] border-r border-b'>
                    <p>{item.typeModel}</p>
                  </div>
                  <div className='flex items-center px-[15px] w-[14%] border-r border-b'>
                    <p>{item.unit} {item.price}</p>
                  </div>

                  <div className='flex items-center gap-[5px] px-[20px] w-[18%] border-b'>
                    <div className='bg-red-500 p-[5px_10px] rounded-[20px]'>
                      <button 
                        onClick={() => onDelete(item.id)}
                        className='flex items-center gap-[5px] text-[#fff]'>
                        <AiFillDelete className='text-[20px] text-[#fff]'/>
                        Delete
                      </button>
                    </div>
                    <div className='p-[5px_10px] rounded-[20px] bg-green-500'>
                      <button 
                        onClick={() => onEdit(item.id)}
                        className='flex items-center gap-[5px] text-[#fff]'>
                        <AiTwotoneEdit className='text-[20px] text-[#fff]'/>
                        Edit
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className='absolute bottom-[30px] right-[40px] flex items-center gap-[20px]'>
              <button 
                onClick={handlePageNumberBack} 
                disabled={pageNumber === 1 ? true : false}
                className='text-[25px]'
              >
                <AiFillLeftCircle />
              </button>
              <p className='font-bold text-[20px]'>{pageNumber}</p>
              <button 
                onClick={handlePageNumber} 
                disabled={pageNumber === 2 ? true : false}
                className='text-[25px]'
              >
                <AiFillRightCircle />
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default ListProduct