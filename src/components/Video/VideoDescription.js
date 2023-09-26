import React from "react";
import { useState ,useEffect } from "react";
import  {Link} from 'react-router-dom'
import { useSelector } from "react-redux";
import { getViewCount } from "../../utils/viewCount";
function VideoDescription({description,title,channelTitle,viewCount}) {
  const [toggleDescp, setDescpToggle] = useState(false);
  const [paraBreak, setParaBreak] = useState(0);
  const darkMode=useSelector((state)=>state.app.darkMode)


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

    // console.log(
    //   "index ",
    //   description?.indexOf("--"),
    //   description?.indexOf("\n"),
    //   description.length
    // );
  }, [description]);

  return (

    <div className="font-lato flex flex-col gap-2   ">
    <div className="flex flex-col gap-2">
      <p className="font-bold text-lg">{title}</p>
      <p className="font-semibold text-md ">{channelTitle}</p>
    </div>
    <div className={`w-[100%] ${darkMode ? 'bg-[#403939]' : 'bg-[#f2f2f2]'}  p-2`}>
      <p>{getViewCount(viewCount)} views</p>
      <div >
      <span className="whitespace-pre-line">
        {description?.slice(0, paraBreak - 1)}
      </span>
      {!toggleDescp && (
        <span
          className={`font-semibold cursor-pointer 
          ${darkMode ? 'text-white' : 'text-black]'}`}
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
              className={`font-semibold cursor-pointer break-all
               ${darkMode ? 'text-white' : 'text-black]'}`}
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
    </div>
  </div>

    
  );
}

export default VideoDescription;
