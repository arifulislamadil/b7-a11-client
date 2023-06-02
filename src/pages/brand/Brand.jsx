import React from 'react';
import AOS from "aos";

const Brand = () => {
    AOS.init();
    return (
        <div className='mb-10' data-aos="fade-down" data-aos-delay="500" data-aos-duration="10000" data-aos-easing="ease-in-out" data-aos-mirror="true">
            <h3 className='text-center font-bold text-4xl'>Big brands</h3>
            <img src="https://i.ibb.co/9G9ZVwK/brand.png" alt="" />
        </div>
    );
};

export default Brand;