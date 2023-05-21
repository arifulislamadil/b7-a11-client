import React from "react";
import Logo from "../../../assets/logo/logo.png"
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer py-10 bg-base-200 text-base-content">
      <div>
       <div className="text-center">
       <Link to="/">
        <img style={{width:"50px",display:"inline"}} src={Logo} alt="" />
          <h3 className="text-2xl font-bold font-serif menubar-logo">
            <span className="text-green-600">Fun</span>
            <span className="text-orange-600">edu</span>
            <span className="text-green-600">toys</span>
          </h3>
        </Link>
       </div>
        <p>
          ACME Industries Ltd.
          <br />
          Providing reliable tech since 1992
        </p>
      </div>
      <div>
        <span className="footer-title">Services</span>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </div>
    </footer>
  );
};

export default Footer;
