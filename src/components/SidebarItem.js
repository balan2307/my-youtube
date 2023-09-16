import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SidebarItem({icon,name}) {

    console.log("item")
  return (
    <li className="cursor-pointer flex hover:bg-[#eaebe6] p-2 , rounded-md">
    <div className="flex">
      <div className="h-8 w-8  flex items-center">
        <FontAwesomeIcon
          icon={icon}
          style={{ height: "18px" }}
          className="mb-2"
        />
      </div>
      <p className=" sm:ml-4  text-md font-medium text-center ">{name}</p>
    </div>
  </li>
  )
}

export default SidebarItem
