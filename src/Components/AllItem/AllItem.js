import React from "react";
import useProduct from "../../Hook/useProduct";
import PertsDetails from "../PertsDetails/PertsDetails";

const AllItem = () => {
  const [products] = useProduct();
  return (
    <div>
      <div className=" container mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 mt-14 gap-y-10">
        {products.map((product) => (
          <PertsDetails
            key={product._id}
            product={product}
          ></PertsDetails>
        ))}
      </div>
    </div>
  );
};

export default AllItem;
