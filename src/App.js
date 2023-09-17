import "./App.css";

import Head from "./components/Head";
import MainContainer from "./components/MainContainer";
import Backdrop from "./components/UI/Backdrop";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function App() {

  const showBackrop=useSelector((store)=>store.app.backdrop)

  useEffect(()=>{
    document.body.style.overflow = showBackrop ? 'hidden' : 'visible';

  },[showBackrop])
  


  
  return (
    <>
  
      <Head></Head>
      <MainContainer></MainContainer>
      {showBackrop && <Backdrop></Backdrop>}
    
    </>
  );
}

export default App;
