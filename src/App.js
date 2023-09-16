import "./App.css";

import Head from "./components/Head";
import SideBar from "./components/Sidebar";
import { useDispatch ,useSelector } from "react-redux";

function App() {
  
  const showSidebar=useSelector((state)=>state.app.status)
  
  return (
    <>
      <SideBar></SideBar>
      <Head></Head>
    </>
  );
}

export default App;
