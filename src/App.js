import "./App.css";
import MainContainer from "./components/MainContainer";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Body from "./components/Body";
import Head from "./components/Head";
import WatchPage from "./components/WatchPage";
import SearchResultContainer from "./components/SearchResultContainer";
import { useEffect } from "react";
import { useSelector ,useDispatch } from 'react-redux';
import { Appactions } from "./store/AppSlice";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Body></Body>,
    children: [
      {
        path: "",
        element: <MainContainer></MainContainer>,
      },
      {
        path: "/watch",
        element: <WatchPage></WatchPage>,
      },
      {
        path:"/results",
        element:<SearchResultContainer></SearchResultContainer>
      }
    ],
  },
]);
function App() {

 
  const dispatch=useDispatch()



  useEffect(() => {


    const darkMode=JSON.parse(localStorage.getItem("darkMode"))

    

    if(darkMode==null && window.matchMedia('(prefers-color-scheme: dark)').matches){
      
     
      if(!darkMode) dispatch(Appactions.toggledarkMode())
    }
    // else {
  
    //   if(darkMode) dispatch(Appactions.toggledarkMode())
    // }
  }, [])






  return (
    <>

      
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
