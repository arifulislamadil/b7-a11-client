import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import router from "./routes/ToysRoute.jsx";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./authProvider/AuthProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="px-10 md:px-20 mx-auto">
    <React.StrictMode>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </React.StrictMode>
  </div>
);
