import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";


const AddReview = () => {
    const { register, handleSubmit } = useForm();
    const params = useParams();
    const [singleProduct, setSingleProduct] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:7000/product/${params.id}`)
          .then((res) => res.json())
          .then((data) => setSingleProduct(data));
      }, []);
    const onSubmit = data => {
        const order = {
            name: data.name,
            description: data.description,
            ratting: data.ratting,
        }
        fetch("http://localhost:7000/review", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res =>res.json())
        .then(data =>{
            console.log(data)
        })
    }
    return (
        <div>
            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                <div className="card-body bg-base-100 shadow-xl border-blue-900 border-2">
                <form onSubmit={handleSubmit( onSubmit)}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Your Address"
              className="input border-blue-900 border-2"
              {...register("name", {
              })}
            />
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <input
              type="text"
              placeholder="Your Name"
              className="input border-blue-900 border-2"
              {...register("description", {
              })}
            />
            <label className="label">
              <span className="label-text">Ratting</span>
            </label>
            <input
              type="text"
              placeholder="Your Name"
              className="input border-blue-900 border-2"
              {...register("ratting", {
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
    );
};

export default AddReview;