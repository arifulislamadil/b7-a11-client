import React from "react";
import MenuBar from "../pages/shared/menubar/MenuBar";
import Footer from "../pages/shared/footer/Footer";
import { Outlet } from "react-router-dom";
import DynamicHeader from "../routes/DynamicHeader";
import { Helmet } from "react-helmet";

const Main = ({ title }) => {
  return (
    <div>
      <Helmet>
        <title>{`Funedutoys | ${title}`}</title>
      </Helmet>
      <MenuBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
