import AOS from "aos";
import React from "react";

const Banner = () => {
  AOS.init();
  return (
    <div data-aos="fade-left" data-aos-delay="500" data-aos-duration="10000" data-aos-easing="ease-in-out">
      <div className="carousel w-full h-[600px]">
        <div id="slide1" className="carousel-item relative w-full ">
          <div className="absolute rounded-xl flex flex-col md:flex-row justify-between h-full bottom-0 pl-10">
            <div className="w-full md:w-1/2 mt-10 md:mt-0 flex items-center">
              <div className="space-y-7">
                <h2 className="text-4xl md:text-6xl font-bold">
                Unlock your child's potential with our educational toy selection
                </h2>
                <p className="mt-3 text-lg">
                Spark your child's imagination and fuel their thirst for knowledge with our captivating and educational toy collection. Unlock endless possibilities!
                </p>
                <button className="btn bg-orange-600 mt-3">Shop Now</button>
                
              </div>
            </div>
            <div className="flex items-center">
              <div>
                <img
                  src="https://m.media-amazon.com/images/I/71Ph0Wb2QBL._AC_SY450_.jpg"
                  className="w-full rounded-xl"
                />
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 md:bottom-0 sm:bottom-[-200px] bottom-[-150px]">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
        <div className="absolute rounded-xl flex flex-col md:flex-row justify-between h-full bottom-0 pl-10">
            <div className="w-full md:w-1/2 mt-10 md:mt-0 flex items-center">
              <div className="space-y-7">
                <h2 className="text-4xl md:text-6xl font-bold">
                Unlock your child's potential with our educational toy selection
                </h2>
                <p className="mt-3">
                Spark your child's imagination and fuel their thirst for knowledge with our captivating and educational toy collection. Unlock endless possibilities!
                </p>
                <button className="btn bg-orange-600 mt-3">Shop Now</button>
                
              </div>
            </div>
            <div className="flex items-center">
              <div>
                <img
                  src="https://m.media-amazon.com/images/I/71WliN7VJOL._AC_SX450_.jpg"
                  className="w-full rounded-xl"
                />
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 md:bottom-0 sm:bottom-[-200px] bottom-[-150px]">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
        <div className="absolute rounded-xl flex flex-col md:flex-row justify-between h-full bottom-0 pl-10">
            <div className="w-full md:w-1/2 mt-10 md:mt-0 flex items-center">
              <div className="space-y-7">
                <h2 className="text-4xl md:text-6xl font-bold">
                Unlock your child's potential with our educational toy selection
                </h2>
                <p className="mt-3">
                Spark your child's imagination and fuel their thirst for knowledge with our captivating and educational toy collection. Unlock endless possibilities!
                </p>
                <button className="btn bg-orange-600 mt-3">Shop Now</button>
                
              </div>
            </div>
            <div className="flex items-center">
              <div>
                <img
                  src="https://m.media-amazon.com/images/I/61rsKhQLI3L._AC_SX466_.jpg"
                  className="w-full rounded-xl"
                />
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 md:bottom-0 sm:bottom-[-200px] bottom-[-150px]">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
        <div className="absolute rounded-xl flex flex-col md:flex-row justify-between h-full bottom-0 pl-10">
            <div className="w-full md:w-1/2 mt-10 md:mt-0 flex items-center">
              <div className="space-y-7">
                <h2 className="text-4xl md:text-6xl font-bold">
                Unlock your child's potential with our educational toy selection
                </h2>
                <p className="mt-3">
                Spark your child's imagination and fuel their thirst for knowledge with our captivating and educational toy collection. Unlock endless possibilities!
                </p>
                <button className="btn bg-orange-600 mt-3">Shop Now</button>
                
              </div>
            </div>
            <div className="flex items-center">
              <div>
                <img
                  src="https://m.media-amazon.com/images/I/61BjhPDv8eL._AC_SX450_.jpg"
                  className="w-full rounded-xl"
                />
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 md:bottom-0 sm:bottom-[-200px] bottom-[-150px]">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
