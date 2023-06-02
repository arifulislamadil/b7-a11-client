import React, { useState } from "react";
import ScrollToTopButton from "../../shared/ScrollToTopButton/ScrollToTopButton";
import AOS from "aos";

const Banner = () => {
  const [activeSlide, setActiveSlide] = useState(0);


  AOS.init();
  const slides = [
    {
      title: "Unlock your child's potential with our educational toy selection",
      description: "Spark your child's imagination and fuel their thirst for knowledge with our captivating and educational toy collection. Unlock endless possibilities!",
      imageSrc: "https://m.media-amazon.com/images/I/71Ph0Wb2QBL._AC_SY450_.jpg",
    },
    {
      title: "Unlock your child's potential with our educational toy selection",
      description: "Spark your child's imagination and fuel their thirst for knowledge with our captivating and educational toy collection. Unlock endless possibilities!",
      imageSrc: "https://m.media-amazon.com/images/I/71WliN7VJOL._AC_SX450_.jpg",
    },
    {
      title: "Unlock your child's potential with our educational toy selection",
      description: "Spark your child's imagination and fuel their thirst for knowledge with our captivating and educational toy collection. Unlock endless possibilities!",
      imageSrc: "https://m.media-amazon.com/images/I/61rsKhQLI3L._AC_SX466_.jpg",
    },
    {
      title: "Unlock your child's potential with our educational toy selection",
      description: "Spark your child's imagination and fuel their thirst for knowledge with our captivating and educational toy collection. Unlock endless possibilities!",
      imageSrc: "https://m.media-amazon.com/images/I/61BjhPDv8eL._AC_SX450_.jpg",
    },
  ];

  const handlePrevSlide = () => {
    setActiveSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  const handleNextSlide = () => {
    setActiveSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  return (
    <div className="flex justify-end items-center" data-aos="fade-down" data-aos-delay="500" data-aos-duration="10000" data-aos-easing="ease-in-out" data-aos-mirror="true">
      <div className="flex flex-col-reverse md:flex-row justify-center items-center my-10">
      <div className="w-full md:w-1/2 px-10 md:px-20">
        <h2 className="text-xl md:text-4xl font-bold mb-4 mt-4">{slides[activeSlide].title}</h2>
        <p className="mb-4 text-md md:text-xl">{slides[activeSlide].description}</p>
        <button className="btn bg-orange-500 text-white">Shop Now</button>
      </div>
      <div className="absolute bottom-[200px] md:bottom-5 right-5 space-x-2">
          <button
            onClick={handlePrevSlide}
            className="btn btn-sm bg-orange-600"
          >
            ❮
          </button>
          <button
            onClick={handleNextSlide}
            className="btn btn-sm bg-orange-600"
          >
            ❯
          </button>
        </div>
      <div className=" relative">
        <img 
          src={slides[activeSlide].imageSrc}
          alt={slides[activeSlide].title}
          className="w-full h-[300px] md:h-[600px] px-0 md:px-20"
        />
        
      </div>
      
    </div>

    <div className="fixed mt-[850px] md:mt-[500px] mr-[-10px] md:mr-[-40px] text-6xl text-orange-600 z-50"><ScrollToTopButton></ScrollToTopButton></div>
    </div>
  );
};

export default Banner;

