import React, { useEffect, useState } from 'react';
import NavAdmin from './navAdmin';
import HeaderAdmin from './headerAdmin';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function EditProduct() {
    const { id} = useParams();
    const Navigate = useNavigate();
    const [ product, setProduct] = useState({});
    const [baseImage, setBaseImage] = useState('');

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
    };

    const getData = async () => {
        const response = await axios.get(
            'http://localhost:8000/product/' + id,
        );

        if (response.status === 200) {
            setProduct(response.data);
        };
    };

    const onSubmit = (event) => {
        event.preventDefault();
        const data = {
            imgs: baseImage,
            nameProduct: event.target.nameProduct.value,
            typeModel: event.target.typeModel.value,
            price: event.target.price.value,
            unit: "US$",
        };
        editProduct(data);
    }

    const editProduct = async (data) => {
        const response = await axios.patch(
            'http://localhost:8000/product/' + id,
            {
                imgs: data.imgs,
                nameProduct: data.nameProduct,
                typeModel: data.typeModel,
                price: data.price,
                unit: data.unit,
            }
        );

        if (response.status === 200) {
            alert("Edit product successfull");
            Navigate('/admin/home/listproduct');
        };
        await getData();
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <div className='flex w-full'>
            <div className='w-1/5'>
                <NavAdmin />
            </div>
            <div className='flex flex-col w-4/5 bg-[#F8F8F8]'>
                <HeaderAdmin />
                <div className='w-full h-full'>
                    {product && (
                        <div className='flex w-full'>
                            <div className='flex flex-col gap-[20px] w-[50%]'>
                                <div className='flex justify-center w-full'>
                                    <img className='w-[45%]' src={product.imgs}></img>
                                </div>
                                <div className='flex justify-center'>
                                    <p>{product.nameProduct}</p>
                                </div>
                                <div className='flex justify-center'>
                                    <p>{product.typeModel}</p>
                                </div>
                                <div className='flex justify-center gap-[10px]'>
                                    <span>{product.unit}</span>
                                    <p>{product.price}</p>
                                </div>
                            </div>

                            <div className='w-[50%]'>
                                <form 
                                    onSubmit={onSubmit}
                                    className='flex flex-col gap-[20px]'>
                                    <div className='flex w-full h-[266px]'>
                                        <div className='flex items-center'>
                                            <input type='file' onChange={(e) => { uploadImage(e) }}></input>
                                        </div>
                                        <div className='flex justify-center w-full '>
                                            <img className='w-[88%]' src={baseImage}></img>
                                        </div>
                                    </div>
                                    <div className='flex flex-col gap-[20px] w-full'>
                                        <div className='flex items-center justify-center gap-[30px] w-full'>
                                            <label className='font-bold'>Edit Name Product:</label>
                                            <input 
                                                name='nameProduct'
                                                className='px-[20px] py-[10px] w-[40%] border rounded-[10px]' placeholder=''></input>
                                        </div>
                                        <div className='flex items-center justify-center gap-[40px] w-full'>
                                            <label className='font-bold'>Edit Type Product:</label>
                                            <select
                                                name='typeModel'
                                                className='px-[20px] py-[10px] w-[40%] border rounded-[10px]'
                                                id='typeModel'>
                                                <option value='Gundam'>Gundam</option>
                                                <option value='Naruto'>Naruto</option>
                                                <option value='Dragon Ball'>Dragon Ball</option>
                                                <option value='Marvel'>Marvel</option>
                                                <option value='Transformers'>Transformers</option>
                                                <option value='OnePiece'>One Piece</option>
                                            </select>
                                        </div>
                                        <div className='relative flex items-center justify-center gap-[100px] w-full'>
                                            <label className='font-bold'>Edit Price:</label>
                                            <input 
                                                name='price'
                                                className='px-[20px] py-[10px] w-[40%] border rounded-[10px]'></input>
                                            <div className='absolute left-[220px]'>
                                                <span>US $</span>
                                            </div>
                                        </div>
                                        <div className='w-full flex justify-end p-[10px_100px_0_0]'>
                                            <button 
                                                type='submit'
                                                className='p-[10px_50px] bg-[#1877F2] text-[#fff] font-bold rounded-[10px]'>
                                                Edit
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