import React from 'react';
import Banner from '../banner/Banner';
import GalleryProducts from '../gallery/GalleryProducts';
import About from '../about/About';


const Home = () => {
    return (
        <div>
            <Banner/>
            <About/>
            <GalleryProducts/>
        </div>
    );
};

export default Home;