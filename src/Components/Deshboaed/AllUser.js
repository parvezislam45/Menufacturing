import React from 'react';
import { useQuery } from 'react-query';
import Loadding from "../Loadding/Loadding";
import UserRow from './UserRow';

const AllUser = () => {
  const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://obscure-gorge-73986.herokuapp.com/user', {
    method: 'GET',
    headers:{
        authorization: `Bearer ${localStorage.getItem('accessToken')}`
    }
}).then(res => res.json()));
    if (isLoading) {
        return <Loadding></Loadding>
    }
    return (
        <div>
           <h1 className='text-2xl'>All User: {users?.length}</h1> 

           <div class="overflow-x-auto w-full">
        <table class="table w-full">
          <thead>
            <tr>
              <th>
               
              </th>
              <th>Name</th>
              <th>Admin</th>
              <th>User</th>
            </tr>
          </thead>
          <tbody>
              {
                users?.map(user =><UserRow
                key = {user._id}
                user={user}
                refetch={refetch}
                ></UserRow>)
              }
          </tbody>
        </table>
      </div>
        </div>
    );
};

export default AllUser;