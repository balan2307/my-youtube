import React from "react";
import { NavLink } from "react-router-dom";
import { faBars, faHouse, faPlay ,faClapperboard ,faClockRotateLeft ,faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import SidebarItem from "./SidebarItem";

import { useDispatch ,useSelector } from "react-redux";

function SideBar() {

  const showSidebar=useSelector((state)=> state.app.status)


 return (
    <>
      <ul
        className={`hidden sm:flex font-lato p-[1rem] m-0 top-[60px] flex-col gap-[0rem]
         bg-white text-black h-[100vh] w-[45%] sm:w-[30%] lg:w-[20%] fixed z-10 m
        ease-in-out duration-700 ${
          showSidebar ? "translate-x-0 " : "-translate-x-[50rem]"
        }   `}
      >
   

        <SidebarItem icon={faHouse} name="Home"></SidebarItem>
        <SidebarItem icon={faPlay} name="Shorts"></SidebarItem>
        <SidebarItem icon={faClapperboard} name="Subscription"></SidebarItem>

        <hr className="mb-2 mt-2"></hr>

        <SidebarItem icon={faClockRotateLeft} name="History"></SidebarItem>
        <SidebarItem icon={faThumbsUp} name="Liked videos"></SidebarItem>

        
        <li className="cursor-pointer"></li>
      </ul>
    </>
  );
}

export default SideBar;
