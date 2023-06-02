import React, { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import { BsArrowUpCircle } from "react-icons/bs";


const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      window.addEventListener("scroll", toggleVisibility);
      return () => {
        window.removeEventListener("scroll", toggleVisibility);
      };
    }, []);
  
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
  
    const scrollToTop = () => {
      scroll.scrollToTop();
    };
  
    return (
      <div className={`scroll-to-top ${isVisible ? "visible" : ""}`}>
        {
            isVisible  &&  <button  onClick={scrollToTop}><BsArrowUpCircle ></BsArrowUpCircle></button>
        }
      </div>
    );
  };
  
  export default ScrollToTopButton;
  