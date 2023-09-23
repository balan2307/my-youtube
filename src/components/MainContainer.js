import React from 'react'
import SideBar from './Sidebar/Sidebar'
import VideoContainer from './Video/VideoContainer'
import MiniSidebar from './Sidebar/MiniSidebar';
// import ButtonList from './ButtonList';


function MainContainer() {

  return (
    <div className='flex mx-1 '>
         <MiniSidebar></MiniSidebar> 
         
        <VideoContainer></VideoContainer>
         
      
    </div>
  )
}

export default MainContainer
