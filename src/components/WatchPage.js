import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { YOUTUBE_VIDEO_BYID, COMMENTS, API_KEY } from "../utils/constants";
import { getViewCount } from "../utils/viewCount";
import VideoDescription from "./Video/VideoDescription";
import CommentsContainer from "./Comments/CommentsContainer";
import { useDispatch, useSelector } from "react-redux";
import { chatActions } from "../store/chatSlice";
import ChatContainer from "./Chat/ChatContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

function WatchPage() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("v");
  const [videoDetail, setVideoDetail] = useState({});
  const [userChat, setChat] = useState("");

  const { snippet = {}, statistics = {} } = videoDetail;
  const { title, channelTitle, thumbnails, description } = snippet;
  const { viewCount } = statistics;

  const dispatch = useDispatch();
 

  async function fetchVideoDetails() {
    const res = await fetch(YOUTUBE_VIDEO_BYID + id);
    const data = await res.json();
    setVideoDetail(data.items[0]);
  }


  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    fetchVideoDetails();
  }, []);

  return (
    <div className="p-6 flex flex-row gap-4 mx-[2%]">
      <div className=" lg:w-[70%] ">
        <div className=" h-[30vh]  xsm:h-[70vh]  ">
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${id}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="font-lato flex flex-col gap-2   ">
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

      <div className="hidden lg:flex flex-col h-[80vh] w-[30%]">
        <ChatContainer></ChatContainer>
        <form className="p-2 border border-t-0 rounded-bl-lg rounded-br-lg" onSubmit={(e)=>{
          e.preventDefault();
          setChat("")
          dispatch(chatActions.addChats({name:'Balan Thevar',message:userChat}))

        }}>
          <input
            type="text"
            className="border border-x-0 border-t-0
           p-2 w-[100%] focus:outline-none"
            onChange={(e)=>setChat(e.target.value)}
            placeholder="Chat..."
            value={userChat}
          ></input>
          <div className="flex justify-end mt-2">
            <p className="cursor-pointer" onClick={()=>{
              
              dispatch(chatActions.addChats({name:'Balan Thevar',message:userChat}))
              setChat("")
            }}>
            <FontAwesomeIcon icon={faPaperPlane} className="h-6 cursor-pointer" />
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default WatchPage;
