import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import OrderDetails from "./OrderDetails";

const MyOrders = () => {
  const [user] = useAuthState(auth);
  const [products, setProducts] = useState([]);
  console.log(products)
 
  useEffect(() => {
      fetch(`https://obscure-gorge-73986.herokuapp.com/orders/user/${user.email}`)
          .then(res => res.json())
          .then(data => setProducts(data));
  }, [user.email])
  console.log(user.email)
  const email = user.email;
  const rest = products.filter(product => product.email === email)
  const handleDelate = id =>{
      const proceed = window.confirm('Are You Sure Delate This ???')
      if(proceed){
          const url = `https://obscure-gorge-73986.herokuapp.com/product//${id}`
          fetch(url, {
              method:'DELETE'
          })
          .then(res => res.json())
          .then(data => {
              console.log(data);
              const remaining = products.filter(product => product._id !== id);
              setProducts(remaining);
  
          })
      }
  }
  return (
    <div>
      <h1>My Orders {rest.length}</h1>

      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Product name
                            </th>
                            
                            
                            <th scope="col" class="px-6 py-3">
                                email
                            </th>
                            <th scope="col" class="px-6 py-3">
                                price
                            </th>
                            <th scope="col" class="px-6 py-3">
                                quantity
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Pay Now
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Cancel Order
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                                    products.map(order =><OrderDetails
                                      key={order._id}
                                      order={order}
                                      handleDelate={handleDelate}
                                    ></OrderDetails>)
                                }

                        



                    </tbody>
                </table>
            </div>
     
    </div>
  );
};

export default MyOrders;
