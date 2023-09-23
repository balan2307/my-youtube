import React from 'react'
import VideoCard from './VideoCard'
import { useEffect ,useState } from 'react'
import ShimmerCard from '../ShimmerUI/ShimmerCard';
import { Link } from 'react-router-dom';
import { YOUTUBE_API } from '../../utils/constants';

function VideoContainer() {

  const [videos,setVideos]=useState([])


  useEffect(()=>{

   async function fetchVideos()
   {
    const response=await fetch(YOUTUBE_API)
    const data=await response.json();
    // console.log("data check ",data)
    setVideos(data.items)
   
   }
   fetchVideos()


  },[])

  
    return videos?.length==0 ? <ShimmerCard></ShimmerCard> :(
    <div className=' text-black h-[100vh] w-[100%] p-4  flex-wrap gap-4
    grid grid-cols-1 xsm:grid-cols-2 lg:grid-cols-3'>
       {
        videos.map((video)=> <Link to={`/watch?v=${video.id}`} key={video.id}><VideoCard info={video} ></VideoCard></Link>)
       }
      
    </div>)
 

}

export default VideoContainer
