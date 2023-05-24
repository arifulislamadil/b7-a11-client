import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/home/Home";
import NotFound from "../pages/notfound/NotFound";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import ProductDetails from "../pages/home/gallery/prodetails/ProductDetails";
import PrivateRoute from "./PrivateRoute";
import AddToys from "../pages/addToy/AddToy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
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
        element: <AddToys/>,
      },
    ],
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
