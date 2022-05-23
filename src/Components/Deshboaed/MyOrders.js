import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [user] = useAuthState(auth);
  console.log(user.photoURL)
  useEffect(() => {
    fetch(`http://localhost:7000/order/${user.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [user]);
  return (
    <div>
      <h1>My Orders {orders.length}</h1>
      <div class="overflow-x-auto w-full">
        <table class="table w-full">
          <thead>
            <tr>
              <th>
               
              </th>
              <th>Name</th>
              <th>Product-Name</th>
              <th>Quantity</th>
              <th>Pay</th>
              <th>Cancel</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
              {
                  orders.map((order,index) => <tr>
                    <th>
                      {index + 1}
                    </th>
                    <td>
                      <div class="flex items-center space-x-3">
                        <div class="avatar">
                          <div class="mask mask-squircle w-12 h-12">
                            <img
                              src={user.photoURL}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div class="font-bold">{user.displayName}</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      {order.name}
                    </td>
                    <td>{order.quantity}</td>
                    <th>
                      <button class="btn btn-xs">paid</button>
                    </th>
                  </tr>)
              }
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
