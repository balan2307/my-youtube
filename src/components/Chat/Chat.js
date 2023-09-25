import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
function Chat({ name, message }) {
  return (
  
      <div className="mt-2 flex gap-2">
        <FontAwesomeIcon icon={faCircleUser} className="h-6"></FontAwesomeIcon>

        <div className="flex gap-1 ">
          <p className="text-sm whitespace-nowrap font-semibold">{name}</p>
          <p className="text-sm break-words">
            {message}
          </p>
        </div>
      </div>
   
  );
}

export default Chat;
