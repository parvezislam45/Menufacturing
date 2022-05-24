import React from "react";
import img from "../../Image/5bb47bb19cc3d3c790f42291212f7f0a.gif";
import CardSection from "../CardSection/CardSection";
import useProduct from "../../Hook/useProduct";
import PertsDetails from "../PertsDetails/PertsDetails";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [products] = useProduct();
  const navigate = useNavigate();
  // const handleAdd = id =>{
  //   // navigate(`tools/${id}`)
  //   const booking ={
  //     productsId:_id,

  //   }
  // }

  return (
    <div>
      <div
        class="hero min-h-screen"
        style={{ background: `url(${img})`, backgroundSize: "cover" }}
      >
        <div class="hero-overlay bg-opacity-60"></div>
        <div class="hero-content text-center text-neutral-content">
          <div class="max-w-md">
            <h1 class="mb-5 text-5xl font-bold">Hello there</h1>
            <p class="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button class="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      <CardSection></CardSection>

      <div className=" container mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 mt-14 gap-y-10">
        {products.slice(0, 6).map((product) => (
          <PertsDetails
            key={product._id}
            product={product}
            // handleAdd={handleAdd}
          ></PertsDetails>
        ))}
      </div>
{/* -------------------------Section---------------------- */}
      <div className=" container mx-auto grid grid-cols-2 md:grid-cols-4 gap-5 gap-y-5">
        <div class="card w-60 shadow-xl">
          <div class="w-24 mask mask-squircle">
            <img src="https://api.lorem.space/image/face?hash=47449" />
          </div>
          <div class="card-body">
            <h2 class="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="rating">
              <input
                type="radio"
                name="rating-2"
                class="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                class="mask mask-star-2 bg-orange-400"
                checked
              />
              <input
                type="radio"
                name="rating-2"
                class="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                class="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                class="mask mask-star-2 bg-orange-400"
              />
            </div>
          </div>
        </div>
        {/* ------------------------------------- */}

        <div class="card w-60 shadow-xl">
          <div class="w-24 mask mask-squircle">
            <img src="https://api.lorem.space/image/face?hash=47449" />
          </div>
          <div class="card-body">
            <h2 class="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="rating">
              <input
                type="radio"
                name="rating-2"
                class="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                class="mask mask-star-2 bg-orange-400"
                checked
              />
              <input
                type="radio"
                name="rating-2"
                class="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                class="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                class="mask mask-star-2 bg-orange-400"
              />
            </div>
          </div>
        </div>

        {/* -------------------------------- */}
        <div class="card w-60 shadow-xl">
          <div class="w-24 mask mask-squircle">
            <img src="https://api.lorem.space/image/face?hash=47449" />
          </div>
          <div class="card-body">
            <h2 class="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="rating">
              <input
                type="radio"
                name="rating-2"
                class="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                class="mask mask-star-2 bg-orange-400"
                checked
              />
              <input
                type="radio"
                name="rating-2"
                class="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                class="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                class="mask mask-star-2 bg-orange-400"
              />
            </div>
          </div>
        </div>

        {/* ----------------------------------- */}
        <div class="card w-60 shadow-xl">
          <div class="w-24 mask mask-squircle">
            <img src="https://api.lorem.space/image/face?hash=47449" />
          </div>
          <div class="card-body">
            <h2 class="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="rating">
              <input
                type="radio"
                name="rating-2"
                class="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                class="mask mask-star-2 bg-orange-400"
                checked
              />
              <input
                type="radio"
                name="rating-2"
                class="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                class="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                class="mask mask-star-2 bg-orange-400"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
