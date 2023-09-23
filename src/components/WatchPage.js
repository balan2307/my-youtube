import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { YOUTUBE_VIDEO_BYID ,COMMENTS, API_KEY } from "../utils/constants";
import { getViewCount } from "../utils/viewCount";
import VideoDescription from "./Video/VideoDescription";
import CommentsContainer from "./Comments/CommentsContainer";


function WatchPage() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("v");
  const [videoDetail, setVideoDetail] = useState({});
  const [comments,setComments]=useState([])

  const { snippet = {}, statistics = {} } = videoDetail;
  const { title, channelTitle, thumbnails, description } = snippet;
  const { viewCount } = statistics;

  async function fetchVideoDetails() {
    const res = await fetch(YOUTUBE_VIDEO_BYID + id);
    const data = await res.json();
    setVideoDetail(data.items[0]);
  }


  useEffect(() => {
    fetchVideoDetails();

  }, []);

  return (
    <div className="p-6 flex flex-col gap-4 mx-[2%]">
      <div className=" h-[30vh]  xsm:h-[70vh]  md:w-[70%] ">
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${id}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <div className="font-lato flex flex-col gap-2   md:w-[70%] ">
        <div className="flex flex-col gap-2">
          <p className="font-bold text-lg">{title}</p>
          <p className="font-semibold text-md ">{channelTitle}</p>
        </div>
        <div className="w-[100%] bg-[#f2f2f2] p-2">
          <p>{getViewCount(viewCount)} views</p>
          <VideoDescription description={description}></VideoDescription>
        </div>
      </div>
      <CommentsContainer id={id}></CommentsContainer>

    </div>
  );
}

export default WatchPage;
