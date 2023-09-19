import React from "react";
import { useSearchParams } from "react-router-dom";

function WatchPage() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("v");
  return (
    <div className="p-6">
     <div className=" h-[40vh]  sm:h-[70vh]  md:w-[70%] ">

     <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${id}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>

     </div>
    </div>
  );
}

export default WatchPage;
