import React, { useEffect, useState } from 'react';
import NavAdmin from './navAdmin';
import HeaderAdmin from './headerAdmin';
import { BiSolidCartAdd } from 'react-icons/bi';
import { MdAddPhotoAlternate } from 'react-icons/md';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddProduct() {
  const [baseImage, setBaseImage] = useState('');
  const navigate = useNavigate('');

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    console.log(base64);
    setBaseImage(base64);
  }

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      }
    })
  }

  const onUpload = async (data) => {
    const response = await axios.post(
      'http://localhost:8000/product', {
      imgs: baseImage,
      nameProduct: data.nameProduct,
      typeModel: data.typeModel,
      price: data.price,
      unit: "US$",
    },
    );
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const data = {
      nameProduct: event.target.nameProduct.value,
      typeModel: event.target.typeModel.value,
      price: event.target.price.value,
    };

    console.log(data.nameProduct);
    console.log(data.typeModel);
    console.log(data.price);
    onUpload(data);
    navigate('/admin/home/listproduct')
  };

  useEffect(() => {
  })

  return (
    <div className='flex h-screen w-full'>
      <div className='w-1/5'>
        <NavAdmin />
      </div>
      <div className='h-full w-4/5 bg-[#F8F8F8]'>
        <HeaderAdmin />
        <div className='w-full px-[40px]'>
          <div className='w-full'>
            <div className='flex justify-center items-center gap-[30px] p-[10px_0_20px_0]'>
              <BiSolidCartAdd className='text-[60px]' />
              <h1 className='text-[40px] font-bold'>ADD PRODUCT</h1>
            </div>
          </div>
          <div>
            <form onSubmit={onSubmit}>
              <div className=''>
                <div className='flex w-[100%] p-[40px_20px] bg-[#c8dadf] outline-offset-[-10px] outline-2 outline-dashed outline-[#92b0b3]'>
                  <div className='flex flex-col justify-center items-center gap-[20px] w-[50%]'>
                    <MdAddPhotoAlternate className='text-[100px] text-[#92B0B3]' />
                    <input type='file' className='w-[50%] h-[50%]' onChange={(e) => { uploadImage(e); }}></input>
                  </div>
                  <div className='flex justify-center w-[50%]'>
                    <img src={baseImage} className='w-[27%]'></img>
                  </div>
                </div>
                <div className='flex flex-col gap-[20px] p-[30px_0_20px_0]'>
                  <div className='flex justify-center items-center gap-[20px] w-full'>
                    <label className='font-bold text-[18px] w-[15%]'>Name Product:</label>
                    <input
                      name='nameProduct'
                      className='px-[20px] py-[10px] w-[40%] border rounded-[10px]' placeholder=''></input>
                  </div>
                  <div className='flex justify-center items-center gap-[20px] w-full'>
                    <label className='font-bold text-[18px] w-[15%]' for='typeModel'>Type Model:</label>
                    <select
                      name='typeModel'
                      className='px-[20px] py-[10px] w-[40%] border rounded-[10px]'
                      id='typeModel'>
                      <option value='Gundam'>Gundam</option>
                      <option value='Naruto'>Naruto</option>
                      <option value='Dragon Ball'>Dragon Ball</option>
                      <option value='Marvel'>Marvel</option>
                      <option value='Transformers'>Transformers</option>
                      <option value='OnePice'>One Pice</option>
                    </select>
                  </div>
                  <div className='relative flex justify-center items-center gap-[20px] w-full'>
                    <label className='font-bold text-[18px] w-[15%]'>Price:</label>
                    <input
                      name='price'
                      className='px-[20px] py-[10px] w-[40%] border rounded-[10px]' type='number' placeholder=''></input>
                    <div className='absolute left-[390px]'>
                      <span>US $</span>
                    </div>
                  </div>
                  <div className='w-full flex justify-end gap-[20px] p-[10px_250px_0_0]'>
                    <button 
                      type='submit' 
                      className='p-[10px_50px] bg-[#1877F2] text-[#fff] font-bold rounded-[10px]'>Add</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddProduct