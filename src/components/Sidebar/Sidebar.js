import React from "react";
import {
  faHouse,
  faPlay,
  faClapperboard,
  faClockRotateLeft,
  faThumbsUp
} from "@fortawesome/free-solid-svg-icons";

import YoutubeIcon from "../UI/YoutubeIcon";
import SidebarItem from "./SidebarItem";

import { useSelector } from "react-redux";

function SideBar() {
  const showSidebar = useSelector((store) => store.app.status);



  return (
    <>
      <div
        className={`hidden sm:flex font-lato p-[1rem] m-0 flex-col gap-[0rem]
         bg-white text-black h-[100vh] w-[45%] sm:w-[30%] lg:w-[20%]  z-50 
         left-0 top-0

         absolute ease-in-out duration-300 ${
           showSidebar ? "translate-x-0 " : "-translate-x-[40rem]"
         }   `}
      >
  
        <YoutubeIcon className="p-2" ></YoutubeIcon>
        <SidebarItem icon={faHouse} name="Home"></SidebarItem>
        <SidebarItem icon={faPlay} name="Shorts"></SidebarItem>
        <SidebarItem icon={faClapperboard} name="Subscription"></SidebarItem>

        <hr className="mb-2 mt-2"></hr>

        <SidebarItem icon={faClockRotateLeft} name="History"></SidebarItem>
        <SidebarItem icon={faThumbsUp} name="Liked videos"></SidebarItem>
      </div>
    </>
  );
}

export default SideBar;
