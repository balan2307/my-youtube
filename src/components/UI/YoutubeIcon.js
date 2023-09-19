import React from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { Appactions } from "../../store/appSlice";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

function YoutubeIcon({ type }) {
  const showSidebar = useSelector((store) => store.app.status);

  const dispatch = useDispatch();
  function handleToggle() {
    dispatch(Appactions.toggleSidebar());
    dispatch(Appactions.toggleBackdrop());
  }
  return (
    <div className={`flex ${!type ? "p-2" : ""}`}>
      <div className="hidden sm:flex w-8 h-8  items-center">
        <FontAwesomeIcon
          className="cursor-pointer"
          icon={faBars}
          style={{ height: "20px" }}
          onClick={() => handleToggle()}
        />
      </div>

      <div className="h-8 w-8 sm:ml-4 flex items-center">
       
          <Link to='/'>
          <FontAwesomeIcon
            icon={faYoutube}
            style={{ color: "#e60000", height: "25px" }}
          />
          </Link>
      
      </div>

      <span className=" ml-1 font-teko text-[1.6rem] ">Youtube</span>
    </div>
  );
}

export default YoutubeIcon;
