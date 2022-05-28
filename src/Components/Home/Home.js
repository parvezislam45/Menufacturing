import React, { useEffect, useState } from "react";
import img from "../../Image/storefront.webp.png";
import useProduct from "../../Hook/useProduct";
import PertsDetails from "../PertsDetails/PertsDetails";
import Section from "./Section";
import Section2 from "./Section2";
import Riview from "../Home/Riview";


const Home = () => {
  const [products] = useProduct();
  const [reviews,setReviews]=useState([])
  useEffect(() => {
      fetch('https://obscure-gorge-73986.herokuapp.com/review')
        .then((res) => res.json())
        .then((data) => setReviews(data));
    }, []);

  return (
    <div>
      <div
        class="hero min-h-screen"
        style={{ background: `url(${img})`, backgroundSize: "cover" }}
      >
        <div class="hero-overlay bg-opacity-60"></div>
        <div class="hero-content text-center text-neutral-content">
          <div class="max-w-md">
            <h1 class="mb-5 text-5xl font-bold">David Bike Manufacaturer</h1>
            <p class="mb-5">
              World Best Menufacturing Shop.all You need Everything is here.We Provide World Class Quality.
            </p>
            <button class="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>

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
<h1 className="text-2xl">{reviews.length}</h1>
      <div className=" container mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 mt-14 gap-y-10">
        {reviews.map(review =><Riview
        key={review._id}
        review={review}
        ></Riview>)}
      </div>
{/* ----------------------- section-2----------------- */}

          <Section2></Section2>

      {/* ----------------- section-3 ------------ */}

      <Section></Section>
    </div>
  );
};

export default Home;
