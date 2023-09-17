import React from 'react'
import VideoCard from './VideoCard'
import { useEffect ,useState } from 'react'
import ShimmerCard from './ShimmerUI/ShimmerCard';

function VideoContainer() {

  const [videos,setVideos]=useState([])


  useEffect(()=>{

   async function fetchVideos()
   {
    const response=await fetch('https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=AIzaSyCXc7QcEcP7HsXXhFZ-pthvsISRkELcQYI')
    const data=await response.json();
    setVideos(data.items)
   
   }
   fetchVideos()


  },[])

  
    return videos?.length==0 ? <ShimmerCard></ShimmerCard> :(
    <div className=' text-black h-[100vh] w-[100%] p-4  flex-wrap gap-4
    grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
       {
        videos.map((video)=> <VideoCard info={video} key={video.id}></VideoCard>)
       }
      
    </div>)
 

}

export default VideoContainer
