import React from 'react';
import { Link } from 'react-router-dom';

const PertsDetails = ({product}) => {
    const{_id,name,img,description,price,quantity,seller}=product
    return (
        <div className='drop-shadow-2xl '>
            <div className='max-w-sm text-center'>
                <img className='rounded-lg border-solid border-2 border-sky-500' src={img} alt="" />
                <div className="p-5">
                    <h5 className="mb-2  text-2xl font-medium tracking-tight dark:text-white">Name : {name}</h5>
                    <p className=" details text-justify mb-3 font-normal  dark:text-gray-400">Description : {description}</p>
                    <div className='item'>
                        <h5 className='text-xl'>Seller : {seller}</h5>
                        <h3 className='text-xl'>Quantity : {quantity}</h3>
                        <h2 className='text-xl'>Price : ${price}</h2>
                    </div>
                    <div className="mb-3">


                        <button type="button" class="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-1.5 text-center  dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800">delete</button>


                    </div>
                    <Link to={`/parcease/${_id}`}><button type="button" class="text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900">Parcease</button></Link>
                </div>
                
            </div>
            
        </div>
    );
};

export default PertsDetails;