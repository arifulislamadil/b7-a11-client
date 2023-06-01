import React from "react";
import Banner from "../banner/Banner";
import GalleryProducts from "../gallery/GalleryProducts";
import About from "../about/About";
import Category from "../../category/Category";
import Counter from "../../counter/Counter";


const Home = ({title}) => {
  return (
    <div>
      <Banner />
      <About />
      <GalleryProducts />
      <Category />
      <Counter/>
    </div>
  );
};

export default Home;
