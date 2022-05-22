import React from "react";
import img from "../../Image/5bb47bb19cc3d3c790f42291212f7f0a.gif";
import CardSection from "../CardSection/CardSection";
import useProduct from '../../Hook/useProduct'
import PertsDetails from "../PertsDetails/PertsDetails";

const Home = () => {
  const [products]=useProduct()
 
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{ background: `url(${img})`, backgroundSize: "cover" }}
      >
        <div>
          <div class="hero-overlay bg-opacity-60"></div>
         
        </div>
      </div>
      <CardSection></CardSection>

      <div class="bg-white">
        <div class="container px-6 py-8 mx-auto">
          <h1 class="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">
            Pricing Plan
          </h1>

          <p class="max-w-2xl mx-auto mt-4 text-center text-gray-500 xl:mt-6 dark:text-gray-300">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias quas
            magni libero consequuntur voluptatum velit amet id repudiandae ea,
            deleniti laborum in neque eveniet.
          </p>
        </div>
      </div>

    <div className=' container mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 mt-14 gap-y-10'>
      {
        products.map(product=><PertsDetails
        key = {product._id}
        product = {product}
        ></PertsDetails>)
      }
    </div>
    </div>
  );
};

export default Home;
