import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init'

const PertsDetails = ({product}) => {
    const{_id,name,img,description,price,quantity,stock}=product;
    const [user]=useAuthState(auth)
    // const handleAdd= e =>{
    //     const booking={
    //         orderId:_id,
    //         name:name,
    //         price:price,
    //         quantity:quantity,
    //         description:description,
    //         orderName: user.displayName,
    //         email:user.email
    //     }
    //     fetch('http://localhost:7000/order',{
    //         method: 'POST',
    //         headers: {'Content-Type': 'application/json'},
    //         body: JSON.stringify(booking)
    //     })
    //     .then(res => res.json())
    //     .then(data =>{
    //         console.log(data)
    //     })
    // }
    
    return (
        <div className='drop-shadow-2xl '>
            <div className='max-w-sm text-center'>
                <img className='rounded-lg border-solid border-2 border-sky-500' src={img} alt="" />
                <div className="p-5">
                    <h5 className="mb-2  text-2xl font-medium tracking-tight">Name : {name}</h5>
                    <p className=" details text-justify mb-3 font-normal  dark:text-gray-400">Description : {description}</p>
                    <div className='item'>
                        <h3 className='text-xl'>Quantity : {stock}</h3>
                        <h2 className='text-xl'>Price : ${price}</h2>
                    </div>
                    <Link to = {`/parcease/${_id}`}><button type="button"  class="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-1.5 text-center  dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800">Parcease</button></Link>
                    
                </div>
                
            </div>
            
        </div>
    );
};

export default PertsDetails;