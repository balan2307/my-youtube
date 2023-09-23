import React from "react";
import SidebarItem from "./SidebarItem";
import {
  faHouse,
  faPlay,
  faClapperboard
} from "@fortawesome/free-solid-svg-icons";

function MiniSidebar() {
 
  return (
    <div
      className={`hidden sm:flex font-lato p-4  m-0 flex-col gap-[0rem]
       bg-white text-black  w-[4.8rem]   items-center`}
    >
      <div className="flex flex-col gap-4 ">
        <SidebarItem icon={faHouse} name="Home" type="mini"></SidebarItem>
        <SidebarItem icon={faPlay} name="Shorts" type="mini"></SidebarItem>
        <SidebarItem
          icon={faClapperboard}
          name="Subscription"
          type="mini"
        ></SidebarItem>
      </div>
    </div>
  );
}

export default MiniSidebar;
