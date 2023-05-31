import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/home/Home";
import NotFound from "../pages/notfound/NotFound";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import ProductDetails from "../pages/home/gallery/prodetails/ProductDetails";
import PrivateRoute from "./PrivateRoute";
import AddToys from "../pages/addToy/AddToy";
import MyToys from "../pages/mytoys/MyToys";
import AllToys from "../pages/allToys/AllToys";
import ToyDetails from "../pages/allToys/ToyDetails";
import UpdateToy from "../pages/updateToy/UpdateToy";
import ViewDetailCategory from "../pages/viewDetailCategory/viewDetailCategory";
import About from "../pages/home/about/About";
import Blog from "../pages/blog/Blog";
import Contact from "../pages/contact/Contact";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/product/:id",
        element: (
          <PrivateRoute>
            <ProductDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/product/${params.id}`),
      },
      {
        path: "/addToy",
        element: <AddToys />,
      },
      {
        path: "/about",
        
        element: <About/>,
      },
      {
        path: "/myToys",
        element: (
          <PrivateRoute>
            <MyToys />
          </PrivateRoute>
        ),
      },
      {
        path: "/allToys",
        element: <AllToys />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/toyDetails/:id",
        element: <PrivateRoute> <ToyDetails /></PrivateRoute>,
        loader:({params})=>fetch(`http://localhost:5000/toyDetails/${params.id}`),
      },
      {
        path: "/updateToy/:id",
        element: <UpdateToy />,
        loader:({params})=>fetch(`http://localhost:5000/toyDetails/${params.id}`),
      },
      {
        path: "/viewDetailCategory/:id",
        element:<PrivateRoute><ViewDetailCategory /></PrivateRoute> ,
        
        loader:({params})=>fetch(`http://localhost:5000/viewDetailCategory/${params.id}`),
      },
    ],
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
