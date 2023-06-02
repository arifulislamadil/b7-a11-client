import React, { useState } from "react";
import "./Counter.css";
import AOS from "aos";
const Counter = () => {


  // Rest of the component code...

  AOS.init();
  return (
    <div
      data-aos="fade-up"
      data-aos-delay="500"
      data-aos-duration="10000"
      data-aos-easing="ease-in-out"
      className="container mb-20 w-full"
    >
      
      <div className="">
        <img
          src="https://c0.wallpaperflare.com/preview/265/849/245/toys.jpg"
          alt="My Image"
          className="image w-full h-96 rounded-lg"
          style={{height:"500px"}}
        />
      </div>
      <div className="header-overlay">
        <h3 className="header-text text-6xl font-bold text-green-600 hidden md:block">Shop by Age</h3>
      </div>
      <div className="text-overlay text-center grid grid-cols-1 md:grid-cols-2 w-full lg:grid-cols-5 p-30 md:p-30 gap-2 md:gap-0">
      
        <div className=" text-orange-600 image-div  font-bold rounded-lg">
          <img
          
            src="https://www.learningresources.com/media/wysiwyg/home_lr/18mos.jpg"
            alt=""
          />
        </div>
        <div className=" text-orange-600 font-bold image-div  rounded-lg">
          <img
          
            src="https://www.learningresources.com/media/wysiwyg/home_lr/2years-v2_1.jpg"
            alt=""
          />
        </div>
        <div className=" text-orange-600 font-bold  image-div rounded-lg">
          <img
          
            src="https://www.learningresources.com/media/wysiwyg/home_lr/3-4years.jpg"
            alt=""
          />
        </div>
        <div className=" text-orange-600 font-bold image-div rounded-lg">
          <img
          
            src="https://www.learningresources.com/media/wysiwyg/home_lr/5-7years.jpg"
            alt=""
          />
        </div>
        <div className=" text-orange-600 font-bold image-div rounded-lg">
          <img
          
            src="https://www.learningresources.com/media/wysiwyg/home_lr/8up.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Counter;
