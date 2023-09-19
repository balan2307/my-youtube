import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SidebarItem({ icon, name, type }) {

  
  return (
    !type ? (
      <li className="cursor-pointer flex hover:bg-[#eaebe6] p-2 rounded-md">
        <div className="flex">
          <div className="h-8 w-8 flex items-center">
            <FontAwesomeIcon
              icon={icon}
              style={{ height: "18px" }}
              className="mb-2"
            />
          </div>
          <p className="sm:ml-4 text-md font-medium text-center">{name}</p>
        </div>
      </li>
    ) : (
        <div className="cursor-pointer flex w-[100%]  hover:bg-[#eaebe6] rounded-md">
        <div className="flex flex-col gap-2 w-[100%] p-1">
          <div className=" flex  justify-center m-0 w-[100%]">
            <FontAwesomeIcon
              icon={icon}
              style={{ height: "18px" }}
              className=""
            />
          </div>
          <p className=" text-[0.8rem] font-medium text-center">{name}</p>
        </div>
      </div>
    )
  );
}

export default SidebarItem;
