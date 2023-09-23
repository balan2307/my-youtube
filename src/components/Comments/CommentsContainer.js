import React from "react";
import { useState, useEffect } from "react";
import { YOUTUBE_VIDEO_BYID, COMMENTS, API_KEY } from "../../utils/constants";
import Comment from "./Comment";
import CommentList from "./CommentList";

function CommentsContainer({ id }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchComments();
  }, []);

  async function fetchComments() {
    const res = await fetch(`${COMMENTS}videoId=${id}&key=${API_KEY}`);
    const data = await res.json();
    setComments(data.items);
    console.log("commnets ", data.items);
    // setVideoDetail(data.items[0]);
  }

  return (
    <div>
      {comments.length > 0 && <CommentList comments={comments}></CommentList>}
    </div>
  );
}

export default CommentsContainer;
