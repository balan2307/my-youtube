import React from "react";
import { useState ,useEffect } from "react";
import  {Link} from 'react-router-dom'


function VideoDescription({description}) {
  const [toggleDescp, setDescpToggle] = useState(false);
  const [paraBreak, setParaBreak] = useState(0);


  useEffect(()=>{

    if(toggleDescp) return
     window.scrollTo({ top: 100, left: 0, behavior: "smooth" });

  },[toggleDescp])

  useEffect(() => {
    if (!description) return;
    let index1 = description?.indexOf("--");
    let index2 = description.indexOf("\n");

    if (index1== -1 || index2==-1)
      setParaBreak(
        Math.max(description?.indexOf("--"), description?.indexOf("\n"))
      );
    else  setParaBreak(
      Math.min(description?.indexOf("--"), description?.indexOf("\n"))
    );

    console.log(
      "index ",
      description?.indexOf("--"),
      description?.indexOf("\n"),
      description.length
    );
  }, [description]);

  return (
    <div>
      <span className="whitespace-pre-line">
        {description?.slice(0, paraBreak - 1)}
      </span>
      {!toggleDescp && (
        <span
          className="font-semibold cursor-pointer"
          onClick={() => setDescpToggle(true)}
        >
          ...Show more
        </span>
      )}
      {toggleDescp && description?.length > paraBreak ? (
        <div className="inline">
          <span className="whitespace-pre-line inline break-all">
            {description?.slice(paraBreak, description?.length)}
          </span>
          {toggleDescp && (
            <span
              className="font-semibold cursor-pointer break-all"
              onClick={() => {
                setDescpToggle(false)
              }}
            >
              ...Show less
            </span>
          )}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default VideoDescription;
