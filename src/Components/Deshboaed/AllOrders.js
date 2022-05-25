import React, { useEffect, useState } from 'react';

const AllOrders = () => {
    const [orders,setOrders]=useState([])
    useEffect(() => {
        fetch(`http://localhost:7000/orders`)
          .then((res) => res.json())
          .then((data) => setOrders(data));
      }, []);
    return (
        <div>
            <h1>all orders {orders.length}</h1>
        </div>
    );
};

export default AllOrders;