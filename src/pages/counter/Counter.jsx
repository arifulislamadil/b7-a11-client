import React, { useState } from "react";
import "./Counter.css";
import AOS from "aos";
const Counter = () => {
    const [totalCustomers, setTotalCustomers] = useState(6000);
  const [happyCustomers, setHappyCustomers] = useState(220);
  const [websiteVisitors, setWebsiteVisitors] = useState(340);

  // Rest of the component code...

  AOS.init();
  return (
    <div data-aos="fade-up" data-aos-delay="500" data-aos-duration="10000" data-aos-easing="ease-in-out" className="container mb-20">
      <img
        src="https://c0.wallpaperflare.com/preview/265/849/245/toys.jpg"
        alt="My Image"
        className="image w-full h-96 rounded-lg"
      />
      <div className="text-overlay grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-20">
        <div className="bg-gray-100 text-orange-600 font-bold px-5 py-5 rounded-lg">
          <h2 className="text-xl md:text-6xl">{totalCustomers}</h2>
          <h2 className="text-xl">Total Clients</h2>
        </div>
        <div className="bg-gray-100 text-orange-600 font-bold px-5 py-5 rounded-lg">
          <h2 className="text-xl md:text-6xl">{happyCustomers}</h2>
          <h2 className="text-xl">Happy Clients</h2>
        </div>
        <div className="bg-gray-100 text-orange-600 font-bold px-5 py-5 rounded-lg">
          <h2 className="text-xl md:text-6xl">{websiteVisitors}</h2>
          <h2 className="text-xl">Visitor</h2>
        </div>
        
      </div>
    </div>
  );
};

export default Counter;
