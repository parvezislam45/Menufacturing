import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

const Parcease = () => {
  const params = useParams();
  const [singleProduct, setSingleProduct] = useState([]);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  useEffect(() => {
    fetch(`http://localhost:7000/product/${params.id}`)
      .then((res) => res.json())
      .then((data) => setSingleProduct(data));
  }, []);

  return (
    
      <div className="container my-12 mx-auto px-4 md:px-12">
          <div className='flex  justify-between  flex-wrap mx-1 lg:mx-4'>
            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <div class="card-body bg-base-100 shadow-xl">
          <img className="w-96" src={singleProduct.img} alt="Shoes" />
          <h2 class="card-title">Name : {singleProduct.name}</h2>
          {/* <p>Discription :{singleProduct.description}</p> */}
          <h3 className="text-xl">Quantity : {singleProduct.stock}</h3>
          <h2 className="text-xl">Price : ${singleProduct.price}</h2>
        </div>
            </div>

            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                <div className="card-body bg-base-100 shadow-xl border-blue-900 border-2">
                <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Your Name"
              className="input border-blue-900 border-2"
              {...register("name", {
              })}
            />
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="Your email"
              className="input border-blue-900 border-2"
              {...register("email", {
              })}
            />
            <label className="label">
              <span className="label-text">Address</span>
            </label>
            <input
              type="text"
              placeholder="Your Address"
              className="input border-blue-900 border-2"
              {...register("Address", {
              })}
            />
            <label className="label">
              <span className="label-text">Phone</span>
            </label>
            <input
              type="text"
              placeholder="Your Name"
              className="input border-blue-900 border-2"
              {...register("phone", {
              })}
            />
            <label className="label">
              <span className="label-text">Quantity</span>
            </label>
            <input
              type="text"
              placeholder="Your Name"
              className="input border-blue-900 border-2"
              {...register("quantity", {
              })}
            />
            <div className="mt-3 text-center">
            <input type="submit" className="btn btn-outline btn-secondary h-2 w-32" />
            </div>
          </div>
             </form>
                </div>
            </div>
          </div>
          
      </div>
  );
};

export default Parcease;
