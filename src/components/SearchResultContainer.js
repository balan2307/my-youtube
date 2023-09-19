import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import MiniSidebar from "./Sidebar/MiniSidebar";
import WideVideoCard from "./WideVideoCard";
import { Link } from "react-router-dom";
import { SEARCH_API, API_KEY } from "../utils/constants";
import ShimmerResultCard from "./ShimmerUI/ShimmerResultCard";

function SearchResultContainer() {

  const [videos,setVideos]=useState([])

  const [searchParams] = useSearchParams();
  const [query,setQuery]=useState("")



  useEffect(() => {
    console.log("search req")
    if(searchParams.get('search_query')==query) return;
    setQuery(query)
    console.log("re render",searchParams.get('search_query'),query)
    getSearchResults(searchParams.get("search_query"));

  }, [searchParams.get("search_query")]);

  const getSearchResults = async (q) => {
    console.log("search")
    const res = await fetch(`${SEARCH_API}q=${q}&key=${API_KEY}&safeSearch=moderate`);
    const data = await res.json();
    setVideos(data.items)
    console.log("data fetched", data);
  };
  return ( videos?.length==0 ? <ShimmerResultCard></ShimmerResultCard> : (<div className="flex">

      <MiniSidebar></MiniSidebar>
    
      <div className="p-4 mx-auto flex flex-col gap-6 justify-center  md:w-[80%] ">
      
         { videos.map((video,i)=>{
          return video.id.kind.includes("video") ?  <Link to={`/watch?v=${video.id.videoId}`} key={i}><WideVideoCard info={video} ></WideVideoCard></Link> :
          (<WideVideoCard info={video}  key={i} ></WideVideoCard>)
         })}
      </div>
    </div>)
  );
}

export default SearchResultContainer;
