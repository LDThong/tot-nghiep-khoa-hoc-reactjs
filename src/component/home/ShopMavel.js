import React, { useContext, useEffect, useState } from 'react'
import { HomeContext } from '../../context/HomeContext';
import axios from 'axios';

function TypeShop() {
    const { list, setList } = useContext(HomeContext);
    const [ listTypeModel, setListTypeModel] = useState([])

    const getData = async() => {
        const response = await axios.get(
            'http://localhost:8000/product'
        );

        if (response.status === 200) {
            const mavel = [...response.data].filter((item) => item.typeModel === 'Marvel');
            setList(mavel);
        };
    };
    console.log(list);
    

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className='h-screen bg-red-300'>
            {list.map((item) => (
                <div key={item}>
                    <img src={item.imgs}></img>
                    <h1 className='bg-[#fff]'>{item.nameProduct}</h1>
                </div>
            ))}
        </div>
    )
}

export default TypeShop