import React from 'react'
import { getViewCount } from '../../utils/viewCount';
import { useSelector } from 'react-redux';

function VideoCard({info}) {
    

  const darkMode=useSelector((state)=>state.app.darkMode)
  
  
  const {snippet,statistics}=info;
  const {title, channelTitle, thumbnails}=snippet;
  const {viewCount}=statistics;




  
  let minTitle=title.slice(0,65) 
  if(title.length>65) minTitle+="....."
  return (
    <div className={`${darkMode? 'dark' : '' } h-fit flex flex-col  `}>
        <img src={thumbnails.maxres ? thumbnails.maxres.url : thumbnails.medium.url} alt='thumbnail' className='h-52 rounded-md w-[100%] '></img>
        <p className='font-semibold'>{minTitle}</p>
        <p className={`${darkMode ? 'dark' : 'text-gray-500' } `}>{channelTitle}</p>
        <p className={`${darkMode ? 'dark' : 'text-gray-500'  }`}>{getViewCount(viewCount)} views</p>
      
    </div>
  )
}

export default VideoCard
