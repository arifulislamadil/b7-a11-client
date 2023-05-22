import React from "react";
import { Link } from "react-router-dom";
import "./menubar.css";

const MenuBar = () => {
  const menuItems = (
    <>
      <Link to="/">Home</Link>
      <Link to="/">About</Link>

      <Link to="/">All toys</Link>

      <Link to="/">My toys</Link>

      <Link to="/">Add toys</Link>

      <Link to="/">Blogs</Link>
      <Link to="/">Contact</Link>

      {/* {user?.email ? (
            <>
              <li>
                <Link to="/bookings">My Bookings</Link>
              </li>
              <li>
                <button onClick={handleLogOut}>Log Out</button>
              </li>
            </>
          ) : (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )} */}
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="">
          <Link to="/">
            <h3 className="text-3xl font-bold font-serif menubar-logo">
              <span className="text-green-600">Fun</span>
              <span className="text-orange-600">edu</span>
              <span className="text-green-600">toys</span>
            </h3>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>{menuItems}</li>
          </ul>
        </div>
      </div>

      <div className="navbar-end">
        <Link to="/">
          <div className="avatar ">
            <div className="w-12 rounded-full">
              <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg" />
            </div>
          </div>
        </Link>
        
      </div>

      <div className="dropdown lg:hidden">
        <label tabIndex={0} className="btn btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
        <ul
          tabIndex={0}
          className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-30  ml-[-50px]"
        >
          <li>{menuItems}</li>
        </ul>
      </div>
    </div>
  );
};

export default MenuBar;
