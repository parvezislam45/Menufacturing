import React from 'react';
import { Link } from 'react-router-dom';

const OrderDetails = ({ order, handleDelate }) => {
    const {_id, productName, email, price, quantity,paid } = order
    return (
        <tr class="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                    {productName}
                </th>
                <td class="px-6 py-4">
                    {email}
                </td>
                <td class="px-6 py-4">
                    {price}
                </td>
                <td class="px-6 py-4">
                    {quantity}
                </td>
                <td class="px-6 py-4">
                    {(price && !paid)&& <Link to={`payment`}><button></button>Pay</Link>}
                </td>
                <td class="px-6 py-4">
                    <button onClick={() => handleDelate(_id)}>Cancel</button>
                </td>

        </tr>
    );
};

export default OrderDetails;