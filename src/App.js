import "./App.css";
import MainContainer from "./components/MainContainer";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Body from "./components/Body";
import Head from "./components/Head";
import WatchPage from "./components/WatchPage";
import SearchResultContainer from "./components/SearchResultContainer";


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


  return (
    <>
      
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
