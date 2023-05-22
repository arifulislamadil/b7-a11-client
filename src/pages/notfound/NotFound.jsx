import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <div className="mx-auto w-1/2 mt-10">
        <div className="text-center">
          <img src="https://static.vecteezy.com/system/resources/previews/007/162/540/non_2x/error-404-page-not-found-concept-illustration-web-page-error-creative-design-modern-graphic-element-for-landing-page-infographic-icon-free-vector.jpg" />

          <div className="not-found-container">
            <h1>404</h1>
            <h2>Page Not Found</h2>
            <p>Oops! The page you are looking for does not exist.</p>
          </div>

          <button className="btn-back-home">
            <Link className="text-decoration-none text-light" to="/">
              <span className="btn btn-primary mt-5">Back Home</span>{" "}
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
