import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Riview = ({review}) => {
    const {name,description,rating}= review;
   
    return (
        <div>
            <h1 className='text-2xl'>Review {review.length}</h1>
            
                    <div class="card w-60 shadow-xl">
                    <div class="w-24 mask mask-squircle">
                      <img src="https://api.lorem.space/image/face?hash=47449" />
                    </div>
                    <div class="card-body">
                      <h2 class="card-title">Name : {name}</h2>
                      <p>Reviews : {description}</p>
                    </div>
                       </div>
            }
           
        </div>
    );
};

export default Riview;