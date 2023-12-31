import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { YOUTUBE_VIDEO_BYID, COMMENTS, API_KEY } from "../utils/constants";

import VideoDescription from "./Video/VideoDescription";
import CommentsContainer from "./Comments/CommentsContainer";
import { useDispatch, useSelector } from "react-redux";
import { chatActions } from "../store/chatSlice";
import ChatContainer from "./Chat/ChatContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import ShimmerDescription from "./ShimmerUI/ShimmerDescription";

function WatchPage() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("v");
  const [videoDetail, setVideoDetail] = useState({});
  const [userChat, setChat] = useState("");
  const darkMode=useSelector((state)=>state.app.darkMode)

  const { snippet = {}, statistics = {} } = videoDetail;
  const { title, channelTitle, thumbnails, description } = snippet;
  const { viewCount } = statistics;

  const dispatch = useDispatch();

  const isVideoDetailEmpty = Object.keys(videoDetail).length === 0;

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
      <div className="w-[100%] lg:w-[70%] ">
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

        {/* <ShimmerDescription></ShimmerDescription> */}
        {isVideoDetailEmpty ? (
          <ShimmerDescription></ShimmerDescription>
        ) : (

              <VideoDescription description={description}
              title={title} channelTitle={channelTitle} viewCount={viewCount}
              ></VideoDescription>
            
        )}
        <CommentsContainer id={id}></CommentsContainer>
      </div>

      <div className="hidden lg:flex flex-col h-[80vh] w-[30%]">
        <ChatContainer></ChatContainer>
        <form
          className="p-2 border border-t-0 rounded-bl-lg rounded-br-lg"
          onSubmit={(e) => {
            e.preventDefault();
            setChat("");
            dispatch(
              chatActions.addChats({ name: "Balan Thevar", message: userChat })
            );
          }}
        >
          <input
            type="text"
            className={`${darkMode ? 'dark' : ''} border border-x-0 border-t-0
           p-2 w-[100%] focus:outline-none `}
            onChange={(e) => setChat(e.target.value)}
            placeholder="Chat..."
            value={userChat}
          ></input>
          <div className="flex justify-end mt-2">
            <p
              className="cursor-pointer"
              onClick={() => {
                dispatch(
                  chatActions.addChats({
                    name: "Balan Thevar",
                    message: userChat,
                  })
                );
                setChat("");
              }}
            >
              <FontAwesomeIcon
                icon={faPaperPlane}
                className="h-6 cursor-pointer"
              />
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default WatchPage;
