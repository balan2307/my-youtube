import React from "react";
import { getViewCount } from "../utils/viewCount";

function WideVideoCard({ info }) {
  const { snippet, statistics } = info;
  const { title, channelTitle, thumbnails, description } = snippet;
  const type = info.id.kind.includes("channel") ? "channel" : "video";
  console.log("Card ", info, description);
  //   const {viewCount}=statistics;

  // let minTitle = title.slice(0, 65);
  // if (title.length > 65) minTitle += ".....";
  return (
    <div
      className={` h-fit w-[100%] md:min-w-[80%]  flex ${
        type == "video" ? "flex-col" : ""
      } md:flex-row md:gap-6 `}
    >
      {type == "video" ? (
        <img
          src={
            thumbnails.maxres ? thumbnails.maxres.url : thumbnails.medium.url
          }
          alt="thumbnail"
          className="h-52 rounded-xl w-[100%] md:min-w-[35%] border  "
        ></img>
      ) : (
        <img
          src={
            thumbnails.maxres ? thumbnails.maxres.url : thumbnails.medium.url
          }
          alt="thumbnail"
          className=" rounded-full w-[150px] h-[150px] border  "
        ></img>
      )}
      <div className="flex flex-col w-[100%] md:min-w-[65%] ">
        <p className="font-semibold">{title}</p>
        <p className="text-gray-500 font-semibold">{channelTitle}</p>
        {type == "video" && <p className="text-gray-500">{description}</p>}
      </div>
      {/* <p className='text-gray-500'>{getViewCount(viewCount)} views</p> */}
    </div>
  );
}

export default WideVideoCard;
