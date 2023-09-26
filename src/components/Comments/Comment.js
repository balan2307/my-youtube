import React from "react";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Comment({author,comment,authorProfileUrl}) {
  return (
    <div className="flex gap-4">
      <div className="">
       <img src={authorProfileUrl} className="rounded-full h-8 sm:h-10"
       alt="profile"></img>
      </div>
      <div className="flex flex-col w-[95%]">
        <p className="text-sm font-semibold">{author}</p>
        <p className="text-[1rem] break-all">{comment}</p>
      </div>
    </div>
  );
}

export default Comment;
