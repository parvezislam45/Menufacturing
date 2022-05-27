import React from "react";
import img from "../../Image/css.jpg";
import img2 from "../../Image/react.jpg";
import img3 from "../../Image/node.png";
import img4 from "../../Image/mongo.jpg";
import img5 from "../../Image/firebase.jpg";
import img6 from "../../Image/java.jpg";
import img7 from "../../Image/es6.jpg";
import img8 from "../../Image/unnamed.png";
import cover from "../../Image/david.JPG";

const Protfolio = () => {
  return (
    <div>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 w-full">
      <div class="flex flex-col xl:flex-row w-full bg-white rounded-lg overflow-hidden cursor-pointer">
        <div class="relative p-32">
            <h3 class="text-base md:text-6xl font-medium text-gray-800">
              Parvez Islam
            </h3>
            <h3 class="text-base md:text-3xl font-medium text-gray-800">
              Full Steck Web Developer
            </h3>
          </div>
        </div>

        <div class="flex flex-col xl:flex-row shadow hover:shadow-md w-full bg-white rounded-lg overflow-hidden cursor-pointer">
          <img
            class="object-cover w-full"
            src={cover}
            alt="Flower and sky"
          />
        </div>
      </div>
      <div className="mt-5">
      <div className=" container mx-auto grid grid-cols-3 md:grid-cols-8 gap-2 mt-14 gap-y-10">
        <div class="card w-32 h-48">
          <figure class="px-10 pt-10">
            <img src={img2} alt="Shoes" class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">React Js</h2>
          </div>
        </div>
        <div class="card w-32 h-48 bg-base-100">
          <figure class="px-10 pt-10">
            <img src={img3} alt="Shoes" class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">Node Js</h2>
          </div>
        </div>
        <div class="card w-32 h-48 bg-base-100 ">
          <figure class="px-10 pt-10">
            <img src={img4} alt="Shoes" class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">Mongo-Db</h2>
          </div>
        </div>
        <div class="card w-32 h-48 bg-base-100">
          <figure class="px-10 pt-10">
            <img src={img5} alt="Shoes" class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">Firebase</h2>
          </div>
        </div>
        <div class="card w-32 h-48 bg-base-100">
          <figure class="px-10 pt-10">
            <img src={img6} alt="Shoes" class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">Java Script</h2>
          </div>
        </div>
        <div class="card w-32 h-48 bg-base-100">
          <figure class="px-10 pt-10">
            <img src={img7} alt="Shoes" class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">ES-6</h2>
          </div>
        </div>
        <div class="card w-32 h-48 bg-base-100">
          <figure class="px-10 pt-10">
            <img src={img} alt="Shoes" class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">CSS</h2>
          </div>
        </div>
        <div class="card w-32 h-48 bg-base-100">
          <figure class="px-10 pt-10">
            <img src={img8} alt="Shoes" class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">HTML</h2>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Protfolio;
