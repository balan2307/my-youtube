import React from "react";

function ShimmerResultCard() {
  return (
    <div className="p-4 mx-auto flex flex-col gap-6 justify-center  md:w-[80%] ">
      {Array.from({ length: 20 }, (_, i) => (
        <div key={i} className="h-fit w-[100%] flex flex-col md:flex-row gap-2 ">
          <div className="h-52 rounded-md w-[100%] md:w-[30%] bg-gray-200 "></div>

          <div className="flex flex-col md:w-[70%] p-2 gap-2">
            <div className="h-2 md:w-[100%] bg-gray-200"></div>
            <div className="h-2 md:w-[100%] bg-gray-200"></div>
            <div className="h-2 md:w-[100%] bg-gray-200"></div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ShimmerResultCard;
