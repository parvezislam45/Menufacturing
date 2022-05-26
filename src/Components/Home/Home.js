import React, { useEffect, useState } from "react";
import img from "../../Image/5bb47bb19cc3d3c790f42291212f7f0a.gif";
import CardSection from "../CardSection/CardSection";
import useProduct from "../../Hook/useProduct";
import PertsDetails from "../PertsDetails/PertsDetails";
import { useNavigate } from "react-router-dom";
import Section from "./Section";
import Section2 from "./Section2";
import Riview from "./Riview";


const Home = () => {
  const [products] = useProduct();
  const [reviews,setReviews]=useState([])
  useEffect(() => {
      fetch('http://localhost:7000/review')
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
      {
        reviews.map(review =>{
          <Riview
          key= {review._id}
          review={review}
          ></Riview>
        })
      }
      </div>
{/* ----------------------- section-2----------------- */}

          <Section2></Section2>

      {/* ----------------- section-3 ------------ */}

      <Section></Section>
    </div>
  );
};

export default Home;
