import React, { useState } from 'react'
import ShimmerCard from './ShimmerCard';

const ShimmerUI = () => {
  

    return (
    <div className="flex flex-wrap ">
    {[...Array(8)]?.map((_, index) => {
      return (
        <div key={index} className="w-full sm:w-6/12 md:w-4/12 lg:w-3/12 flex justify-center p-[2rem] mt-[1rem]">
          <ShimmerCard />
        </div>
      );
    })}
  </div>
  )
}

export default ShimmerUI