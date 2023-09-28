import React, { useEffect, useState } from 'react';
import NavAdmin from '../Admin/NavAdmin';
import axios from 'axios';

function adninHome() {
  const [dataUser, setDataUser] = useState([]);
  const [dataProduct, setDataProduct] = useState([]);
  const [dataBill, setDataBill] = useState([]);
  
  const getDataUser = async () => {
    const response = await axios.get(
      'http://localhost:8000/user'
    );

    if (response.status === 200) {
      setDataUser(response.data);
    };
  };

  const getDataProduct = async () => {
    const response = await axios.get(
      'http://localhost:8000/product/'
    );
    

    if (response.status === 200) {
      setDataProduct(response.data);
    };
  };

  const getDataBill = async () => {
    const response = await axios.get(
      'http://localhost:8000/bill/'
    );

    if (response.status === 200) {
      setDataBill(response.data);
    };
  }

  useEffect(() => {
    getDataUser();
    getDataProduct();
    getDataBill();
  }, []);

  return (
    <div className=''>
        <NavAdmin />
        <div className='mt-[120px] h-[625px] py-[55px] bg-[#f8f8f8]'>
          <div className='flex justify-evenly'>
            <div className='text-center p-[15px_60px_15px_60px] border bg-[#408FF7] text-[#fff] font-bold rounded-[15px]'>
              <p>User</p>
              {dataUser.length}
            </div>
            <div className='text-center p-[15px_60px_15px_60px] border bg-[#B4DD22] text-[#fff] font-bold rounded-[15px]'>
              <p>Product</p>
              {dataProduct.length}
            </div>
            <div className='text-center p-[15px_60px_15px_60px] border bg-[#F7570A] text-[#fff] font-bold rounded-[15px]'>
              <p>Bill</p>
              {dataBill.length}
            </div>
          </div>
        </div>
    </div>
  )
}

export default adninHome