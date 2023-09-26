import { useState } from "react";
import Comment from "./Comment";
import ShimmerComment from "../ShimmerUI/ShimmerComment";

const CommentList = ({ comments }) => {
  const [showReplies, setShowReplies] = useState(
    new Array(comments.length).fill(false)
  );

  const toggleReply = (index) => {
    const newShowReplies = [...showReplies];
    newShowReplies[index] = !newShowReplies[index];
    setShowReplies(newShowReplies);
  };

  return (
    <div className="flex flex-col gap-6 mt-4">
      {comments?.map((comment, index) => (
        <div key={comment.id}>

          <Comment
            author={
              comment?.snippet?.topLevelComment
                ? comment?.snippet?.topLevelComment?.snippet?.authorDisplayName
                : comment?.snippet?.authorDisplayName
            }
            comment={
              comment?.snippet?.topLevelComment
                ? comment?.snippet?.topLevelComment?.snippet?.textOriginal
                : comment?.snippet?.textOriginal
            }
            authorProfileUrl={
              comment?.snippet?.topLevelComment
                ? (comment?.snippet?.topLevelComment?.snippet
                    ?.authorProfileImageUrl)
                : (comment?.snippet?.authorProfileImageUrl)
            }
          />
          {comment?.replies && (
                <div className="ml-14">
                <p
                 className=""
                  onClick={() => toggleReply(index)}
                  style={{ cursor: "pointer" }}
                >
                  {showReplies[index] ? "Hide Replies" : "Show Replies"}
                </p>
                {showReplies[index] && comment?.replies && (
                  <div className="">
                    <CommentList comments={comment?.replies?.comments} />
                  </div>
                )}
              </div>)
          }
        </div>
      ))}
    </div>
  );
};

export default CommentList;
