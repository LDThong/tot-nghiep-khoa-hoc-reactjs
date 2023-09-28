import React, { useEffect, useState } from 'react';
import NavAdmin from './NavAdmin';
import axios from 'axios';
import {FaTruckFast} from 'react-icons/fa6';
import {MdCancel, MdEmail, MdSpeakerNotes, MdPayments} from 'react-icons/md';
import {FaUserAlt} from 'react-icons/fa';
import {IoPhonePortrait, IoLocation} from 'react-icons/io5';
import {AiOutlineExclamationCircle} from 'react-icons/ai';
import {BsCheckCircle} from 'react-icons/bs';

function ListOrder() {
    const [listOrder, setListOrder] = useState([]);
    const [cancelSuccessfull, setCancelSuccessfull] = useState("hidden");

    const getDataOrder = async () => {
        const response = await axios.get(
            'http://localhost:8000/bill'
        );

        if (response.status === 200) {
            setListOrder((response.data).sort((a, b) => b.id - a.id))
        };
    };
    
    const handleStatus = async (idUser, id) => {
        const idProductInOrder = listOrder.filter((item) => item.idUser === idUser);

        const productOrder = idProductInOrder.map((item) => item.products);

        const flattenedArray = productOrder.flat();

        const idProduct = flattenedArray.map((item) => item.id);

        const remaining = flattenedArray.map((item) => item.inventory - item.quantity);

        const res = await axios.patch(
            'http://localhost:8000/bill/' + id, {
                state: "Delivering"
            }
        );

        for (let i = 0; i < idProduct.length; i++) {
            const id = idProduct[i];
            const remainingQuantity = remaining[i];
            const response = await axios.patch(
                'http://localhost:8000/product/' + id, {
                    inventory: remainingQuantity,
                }
            );
        };

        if (res.status === 200) {
            alert("Update State Order Successfull")
        };
    };

    const classCancelSuccessfull = ` ${cancelSuccessfull} flex items-center justify-center fixed z-55 top-0 bottom-0 bg-[#0000004d] right-0 left-0`;

    const handleCanceled = async (id) => {
        const response = await axios.patch(
                'http://localhost:8000/bill/' + id, {
                    state: "Canceled"
                }
            )
    
            if (response.status === 200) {
                setCancelSuccessfull("block");
            }
    };

    const handleClose = () => {
        setCancelSuccessfull("hidden");
    }

    useEffect(() => {
        getDataOrder();
    }, []);

  return (
    <div className='bg-[#F8F8F8]'>
        <NavAdmin />
        <div className='mt-[160px]'>
            <div className='relative flex flex-col w-full h-[82%] px-[40px]'>
                <div className='border mb-[15px]'>
                    <div className='flex flex-row w-full border-b'>
                        <div className='w-[25%] bg-[#fff] text-center py-[15px] font-bold text-[20px] bg-yellow-400'>
                            <h1>Order Information</h1>
                        </div>
                        <div className='w-[60%] bg-[#fff] text-center py-[15px] font-bold text-[20px] bg-yellow-400'>
                            <h1>Order Product</h1>
                        </div>
                        <div className='w-[15%] bg-[#fff] text-center py-[15px] font-bold text-[20px] bg-yellow-400'>
                            <h1>Order Status</h1>
                        </div>
                    </div>
                </div>
                <div className=''>
                    {listOrder.map((item) => (
                        <div key={item} className='flex bg-[#fff] shadow-[0_1px_2px_0_rgba(48,56,64,0.16)] mb-[15px]'>
                            <div className='p-[5px_0_5px_10px] w-[25%]'>
                                <div className='flex items-center gap-[5px]'>
                                    <MdEmail />
                                    <p>{item.email}</p>
                                </div>
                                <div className='flex items-center gap-[5px]'>
                                    <FaUserAlt />
                                    <p>{item.fullName}</p>
                                </div>
                                <div className='flex items-center gap-[5px]'>
                                    <IoPhonePortrait />
                                    <p>(+84) {item.phoneNumber}</p>
                                </div>
                                <div className='flex items-center gap-[5px]'>
                                    <IoLocation />
                                    <p>{item.address}</p>
                                </div>
                                <div className='flex items-center gap-[5px]'>
                                    <MdSpeakerNotes />
                                    <p>{item.orderNotes}</p>
                                </div>
                                <div className='flex items-center gap-[5px]'>
                                    <MdPayments />
                                    <p>{item.paymentMethods}</p>
                                </div>
                            </div>
                            <div className='flex flex-col justify-between  w-[60%] '>
                                {(item.products).map((item) => (
                                    <div key={item} className='flex w-full border-b py-[5px]'>
                                        <div className='flex flex-col justify-center w-[13%]'>
                                            <img className='w-[100%]' src={item.imgs}></img>
                                        </div>
                                        <div className='w-[67%] pl-[5px]'>
                                            <p>{item.nameProduct}</p>
                                            <p>{item.typeModel}</p>
                                            <p>x{item.quantity}</p>
                                        </div>
                                        <div className='flex flex-col justify-center items-end w-[20%] pr-[20px]'>
                                            <p>{item.unit} {item.price}</p>
                                            <p>{item.unit} {item.subTotal}</p>
                                        </div>
                                    </div>
                                ))}
                                <div className='flex justify-end gap-[5px] p-[5px_20px_5px_0] '>
                                    <span className='font-semibold'>Total:</span>
                                    <p className='text-[#DC2626] font-bold'>US$ {item.total}</p>
                                </div>
                            </div>
                            <div className='flex flex-col items-center justify-center gap-[15px] p-[15px_5px_0_10px]'>
                                <div className='bg-yellow-400 rounded-[5px] p-[5px_15px_5px_15px]'>
                                    <p className='font-bold text-[16px]'>{item.state}</p>
                                </div>
                                <div className='flex gap-[2px]'>
                                    <button 
                                        onClick={() => handleStatus(item.idUser, item.id)}
                                        className='flex items-center gap-[3px] bg-green-400 rounded-[5px] p-[5px] text-[#fff]'>
                                        <FaTruckFast />
                                        Delivering
                                    </button>
                                    <button 
                                        type='button'
                                        onClick={() => handleCanceled(item.id)}
                                        className='flex items-center gap-[3px] bg-red-500 rounded-[5px] p-[5px] text-[#fff]'>
                                        <MdCancel />
                                        Canceled
                                    </button>
                                </div>
                                <div className={classCancelSuccessfull}>
                                    <div className='flex flex-col justify-center gap-[25px] bg-[#fff] p-[26px_122px_26px_122px]'>
                                        <div className='flex flex-col items-center gap-[15px]'>
                                            <BsCheckCircle className='text-[100px] text-[#349E81]' />
                                            <p>Your Order is successfully canceled.</p>
                                        </div>
                                        <div className='flex justify-center gap-[10px]'>
                                            <button
                                                type='button'
                                                onClick={handleClose}
                                                className='bg-[#A99A2D] p-[5px_15px_5px_15px] font-medium text-[#fff] rounded-[5px]'>
                                                OK
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default ListOrder         