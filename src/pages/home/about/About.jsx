import React from "react";
import "./about.css";
import DynamicHeader from "../../../routes/DynamicHeader";
import AOS from "aos";

const About = () => {
  AOS.init();
  return (
   
    <div data-aos="fade-right" data-aos-delay="500" data-aos-duration="10000" data-aos-easing="ease-in-out" className="my-20"> 
  <DynamicHeader title="About"></DynamicHeader>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2">
          <img
            className="image-shape"
            src="https://wdtninos.wpengine.com/wp-content/uploads/2022/09/baby_play.jpg"
            alt=""
          />
        </div>
        <div className="w-full md:w-1/3 space-y-3">
          <h3 className="text-orange-500 text-2xl font-bold">About Us</h3>
          <h5 className="text-4xl">We Educate Knowledge & Essential Skills!</h5>
          <p className="text-lg">
            Welcome to Educational Fun Toys's website, your go-to destination
            for enriching and entertaining educational resources.Discover a
            world of fun and learning through our diverse collection of
            educational toys, games, books, and interactive activities.We
            believe that learning should be enjoyable, and our mission is to
            make education engaging and exciting for children of all ages.
          </p>
          <button className="btn bg-orange-600 mt-3">Read More</button>
        </div>
      </div>
    </div>
  
  );
};

export default About;
