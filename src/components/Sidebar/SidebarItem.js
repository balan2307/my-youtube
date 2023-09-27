import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";

function SidebarItem({ icon, name, type }) {

  const darkMode=useSelector((state)=>state.app.darkMode)

  return (
    !type ? (
      <li className={`cursor-pointer flex ${darkMode ? 'hover:bg-[#383934]' : 'hover:bg-[#eaebe6]'} p-2 rounded-md`}>
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
        <div className={`cursor-pointer flex  p-2 rounded-md`}>
        <div className={`flex flex-col  gap-2 ${darkMode ? 'hover:bg-[#383934] rounded-lg' : 'hover:bg-[#eaebe6] rounded-lg'} w-[100%] p-1`}>
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
