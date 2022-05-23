import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useService from '../../Hook/UseService'

const Parcease = () => {
    const {id} =useParams();
    console.log(id)
    const [product,setProduct] = useService(id)
    const [isReload,setIsreload] =useState(false)
    useEffect(()=>{
        const url = `http://localhost:7000/tools/${id}`
        fetch(url)
        .then(res => res.json())
        .then(data => setProduct(data))
    },[isReload])
    const handleAdd = e => {
        e.preventDefault()
        const quantity = e.target.quantity.value
        const newQuantity = parseInt(quantity)+parseInt(product?.quantity)
        console.log(newQuantity)
        const updateItem = {newQuantity}
        if(!quantity){
            alert('Quantity Added SuccessFully')
        }
        else{
            const url = `http://localhost:7000/user/${id}`;
        fetch(url,{
            method : 'PUT',
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(updateItem)
        })
        .then(res => res.json())
        .then (result =>{
            setIsreload(!isReload)
            e.target.reset()
            // setItems(result);
        })
        }
        
    };
   
    return (
        <div>
            <h1 className=' text-center name text-2xl'>Update Quantity {product.name}</h1>

            <div className='max-w-sm text-center'>
                <img className='rounded-lg border-solid border-2 border-sky-500' src={product.img} alt="" />
                <div className="p-5">
                    <h5 className="mb-2 name  text-2xl font-medium tracking-tight">Name : {product.name}</h5>
                    <p className=" details text-justify mb-3 font-normal  dark:text-gray-400">Description : {product.description}</p>
                    <div className='item'>
                    <h5 className='text-xl'>Seller : {product.seller}</h5>
                    <h3 className='text-xl'>Quantity : {product.quantity}</h3>
                    <h2 className='text-xl'>Price : ${product.price}</h2>
                    </div>
                    {/* <div className='mt-2'>
                    <button onClick={()=>delevary(product._id)} type="button" class="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-1.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">Deleverd</button>
                    </div> */}
                    <div className="mt-2">
                    <form onSubmit={handleAdd}>
                        <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text"placeholder=''name ='quantity'/>
                        <input class="mt-4 text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-1.5 text-center dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900" className='text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-1.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800 mt-2' type="submit" value="update" />
                    </form>
                   
                    </div>
                   
                   
                </div>
            </div>
        </div>
    );
};

export default Parcease;