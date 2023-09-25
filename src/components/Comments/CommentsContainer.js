import React, { useState, useEffect } from "react";
import { YOUTUBE_VIDEO_BYID, COMMENTS, API_KEY } from "../../utils/constants";
import CommentList from "./CommentList";
import ShimmerComment from "../ShimmerUI/ShimmerComment";

function CommentsContainer({ id }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchComments();
  }, []);

  async function fetchComments() {
    const res = await fetch(`${COMMENTS}videoId=${id}&key=${API_KEY}`);
    const data = await res.json();
    // console.log("comments ", data.items);
    setComments(data.items);
    // setVideoDetail(data.items[0]);
  }

  return (
    <div className="md:w-[70%]">
      {comments ? (
        <>
          {comments.length === 0 && <ShimmerComment />}
          {comments.length > 0 && <CommentList comments={comments} />}
        </>
      ) : <p className="mt-2">Comments are turned off</p>}
    </div>
  );
}

export default CommentsContainer;
