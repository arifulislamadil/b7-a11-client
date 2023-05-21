import {
  createBrowserRouter
} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/home/Home";
import About from "../pages/about/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children:[
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/about",
        element: <About/>
      }
    ]
  },
]);

export default router;