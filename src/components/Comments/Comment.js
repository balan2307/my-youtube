import React from "react";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Comment({author,comment,authorProfileUrl}) {
  return (
    <div className="flex gap-4">
      <div className="">
       <img src={authorProfileUrl} className="rounded-full h-10"></img>
      </div>
      <div className="flex flex-col w-[95%]">
        <p className="text-sm font-semibold">{author}</p>
        <p className="text-[1rem]">{comment}</p>
      </div>
    </div>
  );
}

export default Comment;