import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Riview = ({ review }) => {
  const { name, description, ratting } = review;

  return (
<div class="flex items-center w-full justify-center">

<div class="max-w-xs">
    <div class="bg-white shadow-xl rounded-lg py-3">
        <div class="photo-wrapper p-2">
            <img class="w-32 h-32 rounded-full mx-auto" src="https://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp" alt="John Doe"/>
        </div>
        <div class="p-2">
            <h3 class="text-center text-xl text-gray-900 font-medium leading-8">{name}</h3>
            <div class="text-center text-gray-400 text-xs font-semibold">
                <p>{description}</p>
                <h1>{ratting}</h1>
            </div>


        </div>
    </div>
</div>

</div>
  );
};

export default Riview;
