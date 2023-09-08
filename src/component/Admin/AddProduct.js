import React, { useEffect, useState } from 'react';
import NavAdmin from './navAdmin';
import HeaderAdmin from './headerAdmin';
import { BiSolidCartAdd } from 'react-icons/bi';
import { MdAddPhotoAlternate } from 'react-icons/md';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { storage } from '../../firebase/firebaseConfig';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

function AddProduct() {
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);
  const [nameProduct, setNameProduct] = useState('');
  const [typeModel, setTypeModel] = useState('');
  const [price, setPrice] = useState('');
  const navigate = useNavigate('');

  const metadata = {
    contentType: 'image/jpeg',
  };

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    const storageRef = ref(storage, `images/${image.name}`);
    const uploadTask = uploadBytesResumable(storageRef, image, metadata);
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(progress);
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
        }
      },
      (error) => {

      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          alert(
            'Upload image successfully, download URL: ' +
            downloadURL
          );
          onUpload(downloadURL);
          setImage(null);
          setProgress(0);
          console.log('File available at', downloadURL);
        });
      }
    );
  };

  const onUpload = async (UrlImage) => {
    try {
      const response = await axios.post(
        'http://localhost:8000/product', {
        imgs: UrlImage,
        nameProduct: nameProduct,
        typeModel: typeModel,
        price: price,
        unit: "US$",
      },
      );
  
      if (response.status === 201) {
        navigate('/admin/home/listproduct');
      } else {
        alert('Add Product Failed') 
      }
    } catch (error) {
      console.log(error);
    }
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
            <form>
              <div className=''>
                <div className='flex w-[100%] p-[40px_20px] bg-[#c8dadf] outline-offset-[-10px] outline-2 outline-dashed outline-[#92b0b3]'>
                  <div className='flex flex-col justify-center items-center gap-[20px] w-[50%]'>
                    <MdAddPhotoAlternate className='text-[100px] text-[#92B0B3]' />
                    <input type='file' className='w-[50%] h-[50%]' onChange={handleChange}></input>
                  </div>
                  <div className='flex justify-center w-[50%]'>
                    {
                      image && (
                        <img src={URL.createObjectURL(image)} className='w-[27%]'></img>
                      )
                    }
                    
                  </div>
                </div>
                <div className='flex flex-col gap-[20px] p-[30px_0_20px_0]'>
                  <div className='flex justify-center items-center gap-[20px] w-full'>
                    <label className='font-bold text-[18px] w-[15%]'>Name Product:</label>
                    <input
                      name='nameProduct'
                      onChange={(e) => setNameProduct(e.target.value)}
                      className='px-[20px] py-[10px] w-[40%] border rounded-[10px]' placeholder=''></input>
                  </div>
                  <div className='flex justify-center items-center gap-[20px] w-full'>
                    <label className='font-bold text-[18px] w-[15%]' for='typeModel'>Type Model:</label>
                    <select
                      name='typeModel'
                      onChange={(e) => setTypeModel(e.target.value)}
                      className='px-[20px] py-[10px] w-[40%] border rounded-[10px] font-bold'
                      id='typeModel'>
                      <option>Type Model</option>
                      <option value='Gundam' className='font-bold'>Gundam</option>
                      <option value='Naruto' className='font-bold'>Naruto</option>
                      <option value='Dragon Ball' className='font-bold'>Dragon Ball</option>
                      <option value='Marvel' className='font-bold'>Marvel</option>
                      <option value='Transformers' className='font-bold'>Transformers</option>
                      <option value='OnePiece' className='font-bold'>One Piece</option>
                    </select>
                  </div>
                  <div className='relative flex justify-center items-center gap-[20px] w-full'>
                    <label className='font-bold text-[18px] w-[15%]'>Price:</label>
                    <input
                      name='price'
                      onChange={(e) => setPrice(e.target.value)}
                      className='px-[20px] py-[10px] w-[40%] border rounded-[10px]' type='number' placeholder=''>
                    </input>
                    <div className='absolute left-[390px]'>
                      <span>US $</span>
                    </div>
                  </div>
                  <div className='w-full flex justify-end gap-[20px] p-[10px_250px_0_0]'>
                    <button
                      type='button'
                      className='p-[10px_50px] bg-[#1877F2] text-[#fff] font-bold rounded-[10px]'
                      onClick={handleUpload}
                      >Add</button>
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