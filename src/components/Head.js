import React from "react";
import search from "../assets/search.svg";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SearchForm from "../components/Form/SearchForm";
import { useSelector ,useDispatch } from "react-redux";
import { Appactions } from "../store/AppSlice";

import {
  faBell,
  faVideo,
  faCircleUser,
  faArrowLeft,
  faSun,
  faMoon,faMagnifyingGlass
} from "@fortawesome/free-solid-svg-icons";

import YoutubeIcon from "./UI/YoutubeIcon";

function Head() {
  const [toggle, setToggle] = useState(false);
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const [serchedTerm, setSearchedTerm] = useState("");
  const dispatch=useDispatch()

  const darkMode = useSelector((state) => state.app.darkMode);

  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }

  function debounce(fn, delay) {
    let timerId;
    return function (...args) {
      if (timerId) {
        clearTimeout(timerId);
      }
      timerId = setTimeout(() => {
        fn(...args);
      }, delay);
    };
  }

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    const debouncedResize = debounce(handleWindowResize, 200);

    window.addEventListener("resize", debouncedResize);

    return () => {
      window.removeEventListener("resize", debouncedResize);
    };
  }, []);

  useEffect(() => {
    if (windowSize.innerWidth >= 768) {
      setToggle(false);
    }
  }, [windowSize.innerWidth]);

  function toggleSearch(setTo) {
    setToggle((status) => {
      return !status;
    });
  }

  function toggleMode()
  {
    console.log("toggle")
    dispatch(Appactions.toggledarkMode())
  }

  return (
    <>
      {!toggle && (
        <div
          className={`py-3 mx-[1rem] md:mx-[2rem]   grid  grid-flow-col auto-cols-[minmax(0,1fr)] md:grid-cols-[1fr,2fr,1fr]`}
        >
          <YoutubeIcon type="nav" clas></YoutubeIcon>

          <div className="md:hidden flex justify-center h-8">
      
            <FontAwesomeIcon  onClick={toggleSearch} icon={faMagnifyingGlass} className="h-[1.4rem] mt-1"/>
          </div>

          <SearchForm
            style="hidden md:flex   items-center  "
            type="lg"
          ></SearchForm>

          <div className="flex  justify-end mt-[3px]">
            <div className="flex gap-4 md:gap-4 ">
              {darkMode && (
                <FontAwesomeIcon
                  icon={faSun}
                  style={{ height: "25px", color: "white" }}
                  onClick={toggleMode}
                />
              )}
              {!darkMode && (
                <FontAwesomeIcon icon={faMoon} style={{ height: "25px" }} onClick={toggleMode} />
              )}
              <FontAwesomeIcon icon={faVideo} style={{ height: "25px" }} />
              <FontAwesomeIcon icon={faBell} style={{ height: "25px" }} />
              <FontAwesomeIcon icon={faCircleUser} style={{ height: "25px" }} />
            </div>
          </div>
        </div>
      )}

      {toggle && (
        <div className="py-3 mx-4   grid  grid-flow-col auto-cols-[minmax(0,1fr)] grid-cols-[1fr,6fr]">
          <div className=" flex justify-center h-8">
            <FontAwesomeIcon
              icon={faArrowLeft}
              style={{ height: "25px" }}
              onClick={toggleSearch}
            />
          </div>

          <SearchForm style="flex items-center "></SearchForm>
        </div>
      )}
    </>
  );
}

export default Head;
