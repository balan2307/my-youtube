import React from 'react';

function ShimmerComment() {
  const numItems = 8; // Number of items you want to repeat

  const shimmerItems = [];

  for (let i = 0; i < numItems; i++) {
    shimmerItems.push(
      <div className='flex gap-2' key={i}>
        <div className='bg-gray-200 h-10 w-10 rounded-full'></div>
        <div className='w-[100%] h-16 bg-gray-200'></div>
      </div>
    );
  }

  return (
    <div className='flex flex-col gap-4 mt-2'>
        {shimmerItems.map((item)=> item)}
    </div>
  );
}

export default ShimmerComment;
