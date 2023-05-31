import React from "react";
import MenuBar from "../pages/shared/menubar/MenuBar";
import Footer from "../pages/shared/footer/Footer";
import { Outlet } from "react-router-dom";
import DynamicHeader from "../routes/DynamicHeader";



const Main = () => {
  return (
    <div>
        <div>
            <DynamicHeader title="home"></DynamicHeader>
        </div>
      <MenuBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
