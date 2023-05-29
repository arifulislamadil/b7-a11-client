import React from 'react';
import Banner from '../banner/Banner';
import GalleryProducts from '../gallery/GalleryProducts';
import About from '../about/About';
import Category from '../../category/Category';


const Home = () => {
    return (
        <div>
            <Banner/>
            <About/>
            <GalleryProducts/>
            <Category/>
        </div>
    );
};

export default Home;