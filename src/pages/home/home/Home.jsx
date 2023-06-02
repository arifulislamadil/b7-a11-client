import React from "react";
import Banner from "../banner/Banner";
import GalleryProducts from "../gallery/GalleryProducts";
import About from "../about/About";
import Category from "../../category/Category";
import Counter from "../../counter/Counter";
import ExploreFun from "../../exploreFun/ExploreFun";
import Brand from "../../brand/Brand";


const Home = ({title}) => {
  return (
    <div>
      <Banner />
      <About />
      <GalleryProducts />
      <Category />
      <Counter/>
      <ExploreFun/>
      <Brand/>
    </div>
  );
};

export default Home;
