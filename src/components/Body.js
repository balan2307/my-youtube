import React from "react";

import Head from "../components/Head";
// import MainContainer from "./components/MainContainer";
import Backdrop from "../components/UI/Backdrop";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import MiniSidebar from "./Sidebar/MiniSidebar";
import SideBar from "./Sidebar/Sidebar";

function Body() {
  const showBackrop = useSelector((store) => store.app.backdrop);

  useEffect(() => {
    document.body.style.overflow = showBackrop ? "hidden" : "visible";
  }, [showBackrop]);
  return (
    <>
      <Head></Head>
      <SideBar></SideBar>
      <Outlet></Outlet>

      {showBackrop && <Backdrop></Backdrop>}
    </>
  );
}

export default Body;
