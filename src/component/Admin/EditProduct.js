import React, { useEffect, useState } from 'react';
import NavAdmin from './NavAdmin';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { storage } from '../../firebase/firebaseConfig';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

function EditProduct() {
    const { id} = useParams();
    const Navigate = useNavigate();
    const [ product, setProduct] = useState({});
    const [image, setImage] = useState(null);
    const [progress, setProgress] = useState(0);
    const [editNameProduct, setEditNameProduct] = useState('');
    const [editTypeModel, setEditTypeModel] = useState('');
    const [editPrice, setEditPrice] = useState('');
    const [editInventory, setEditInventory] = useState('');

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
                'Upload Product Successful'
              );
              editProduct(downloadURL);
              setImage(null);
              setProgress(0);
              console.log('File available at', downloadURL);
            });
          }
        );
      };

    const getData = async () => {
        const response = await axios.get(
            'http://localhost:8000/product/' + id,
        );

        if (response.status === 200) {
            setProduct(response.data);
        };
    };

    const editProduct = async (UrlImage) => {
        const response = await axios.patch(
            'http://localhost:8000/product/' + id,
            {
                imgs: UrlImage,
                nameProduct: editNameProduct,
                typeModel: editTypeModel,
                price: +editPrice,
                inventory: +editInventory,
                unit: "US$",
            }
        );

        if (response.status === 200) {
            Navigate('/admin/home/listproduct');
        };
        await getData();
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <div className='bg-[#F8F8F8]'>
            <NavAdmin />
            <div className='mt-[120px]'>
                <div className='w-full h-full pt-[20px]'>
                    {product && (
                        <div className='flex w-full'>
                            <div className='flex flex-col gap-[20px] w-[50%]'>
                                <div className='flex justify-center w-full'>
                                    <img className='w-[35%]' src={product.imgs}></img>
                                </div>
                                <div className='flex justify-center'>
                                    <div className='border w-[45%] text-center px-[20px] py-[10px] border rounded-[10px] bg-[#fff]'>
                                        <p>{product.nameProduct}</p>
                                    </div>
                                </div>
                                <div className='flex justify-center'>
                                    <div className='border w-[45%] text-center px-[20px] py-[10px] border rounded-[10px] bg-[#fff]'>
                                        <p>{product.typeModel}</p>
                                    </div>
                                </div>
                                <div className='flex justify-center gap-[10px]'>
                                    <div className='flex justify-center gap-[10px] w-[45%] px-[20px] py-[10px] border rounded-[10px] bg-[#fff]'>
                                        <span>{product.unit}</span>
                                        <p>{product.price}</p>
                                    </div>
                                </div>
                                <div className='flex justify-center gap-[10px]'>
                                    <div className='flex justify-center gap-[10px] w-[45%] px-[20px] py-[10px] border rounded-[10px] bg-[#fff]'>
                                        <p>{product.inventory}</p>
                                    </div>
                                </div>
                            </div>

                            <div className='w-[50%]'>
                                <form 
                                    className='flex flex-col gap-[20px]'>
                                    <div className='flex w-full h-[262px]'>
                                        <div className='flex items-center'>
                                            <input type='file' onChange={handleChange}></input>
                                        </div>
                                        <div className='flex justify-center w-full '>
                                            {
                                                image && (
                                                    <img className='w-[57.5%]' src={URL.createObjectURL(image)}></img>
                                                )
                                            }
                                        </div>
                                    </div>
                                    <div className='flex flex-col gap-[20px] w-full'>
                                        <div className='flex items-center justify-center gap-[30px] w-full'>
                                            <label className='font-bold'>Edit Name Product:</label>
                                            <input 
                                                name='nameProduct'
                                                onChange={(e) => setEditNameProduct(e.target.value)}
                                                className='px-[20px] py-[10px] w-[40%] border rounded-[10px]' placeholder=''>
                                            </input>
                                        </div>
                                        <div className='flex items-center justify-center gap-[40px] w-full'>
                                            <label className='font-bold'>Edit Type Product:</label>
                                            <select
                                                name='typeModel'
                                                onChange={(e) => setEditTypeModel(e.target.value)}
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
                                        <div className='relative flex items-center justify-center gap-[100px] w-full'>
                                            <label className='font-bold'>Edit Price:</label>
                                            <input 
                                                name='price'
                                                onChange={(e) => setEditPrice(e.target.value)}
                                                className='px-[20px] py-[10px] w-[40%] border rounded-[10px]'></input>
                                            <div className='absolute left-[220px]'>
                                                <span>US $</span>
                                            </div>
                                        </div>
                                        <div className='flex items-center justify-center gap-[65px] w-full'>
                                            <label className='font-bold'>Edit Inventory:</label>
                                            <input 
                                                name='inventory'
                                                onChange={(e) => setEditInventory(e.target.value)}
                                                className='px-[20px] py-[10px] w-[40%] border rounded-[10px]' placeholder=''>
                                                    
                                            </input>
                                        </div>
                                        <div className='w-full flex justify-end p-[10px_100px_0_0]'>
                                            <button 
                                                type='button'
                                                onClick={handleUpload}
                                                className='p-[10px_50px] bg-[#1877F2] text-[#fff] font-bold rounded-[10px]'>
                                                Save Change
                                            </button>
                                        </div>
                                    </div>
                                </form>
                               
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default EditProduct