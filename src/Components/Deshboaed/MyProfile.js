import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../firebase.init";
import Loadding from "../Loadding/Loadding";

const MyProfile = () => {
  const [user, loading] = useAuthState(auth);
  const [info,setInfo]=useState({})
  const { register, handleSubmit } = useForm();
  useEffect(() => {
    fetch(`http://localhost:7000/info/${user.email}`)
      .then((res) => res.json())
      .then((data) => setInfo(data));
  }, [user]);
  console.log(info)
  if (loading) {
    return <Loadding></Loadding>;
  }

  const onSubmit = data => {
    const info = {
        name: user.displayName,
        email: user.email,
        qualification: data.qualification,
        img: data.img,
        github: data.github,
    }
    fetch("http://localhost:7000/info", {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(info)
    })
    .then(res =>res.json())
    .then(data =>{
        console.log(data)
    })
}

  return (
    <div>
      <h1>My profile</h1>
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row">
          <img
            src={user.photoURL}
            class="max-w-sm rounded-lg shadow-2xl"
            alt=""
          />
          <div>
            <h1 class="text-5xl font-bold">{user.displayName}</h1>
            <p class="py-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              tempora laborum praesentium. Voluptas, sapiente? Cumque
              consectetur neque tenetur. Laboriosam mollitia rem earum totam
              autem unde natus, vero nemo animi officiis?
            </p>
          </div>
        </div>
      </div>

      <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                <div className="card-body bg-base-100 shadow-xl border-blue-900 border-2">
                <form onSubmit={handleSubmit( onSubmit)}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text" disabled defaultValue={user.displayName}
              placeholder="Enter Your Name"
              className="input border-blue-900 border-2"
              {...register("name", {
              })}
            />
            <label className="label">
              <span className="label-text">email</span>
            </label>
            <input
              type="text" disabled defaultValue={user.email}
              placeholder="Enter Your Name"
              className="input border-blue-900 border-2"
              {...register("email", {
              })}
            />
            <label className="label">
              <span className="label-text">Image</span>
            </label>
            <input
              type="text"
              placeholder="Url"
              className="input border-blue-900 border-2"
              {...register("img", {
              })}
            />
            <label className="label">
              <span className="label-text">Qualification</span>
            </label>
            <input
              type="text"
              placeholder="Type Your Review"
              className="input border-blue-900 border-2"
              {...register("qualification", {
              })}
            />
            <label className="label">
              <span className="label-text">Git-Hub</span>
            </label>
            <input
              type="text"
              placeholder="Select Your Ratting"
              className="input border-blue-900 border-2"
              {...register("github", {
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

export default MyProfile;
