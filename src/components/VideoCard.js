import React from 'react'
import { getViewCount } from '../utils/viewCount';


function VideoCard({info}) {
    
  console.log("data ",info)
  const {snippet,statistics}=info;
  const {title, channelTitle, thumbnails}=snippet;
  const {viewCount}=statistics;


  
  let minTitle=title.slice(0,65) 
  if(title.length>65) minTitle+="....."
  return (
    <div className=' h-fit  '>
        <img src={thumbnails.medium.url} alt='thumbnail' className='h-52 rounded-md w-[100%] '></img>
        <p className='font-semibold'>{minTitle}</p>
        <p className='text-gray-500'>{channelTitle}</p>
        <p className='text-gray-500'>{getViewCount(viewCount)} views</p>
      
    </div>
  )
}

export default VideoCard
