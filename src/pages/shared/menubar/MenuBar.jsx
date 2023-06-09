import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./menubar.css";
import { AuthContext } from "../../../authProvider/AuthProvider";



const MenuBar = () => {
 
  const { user, logOut } = useContext(AuthContext);


  const handleLogOut = () => {
    logOut()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const menuItems = (
    <>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/allToys">All toys</Link>
      {user && <Link to="/myToys">My toys</Link>}
      {user && <Link to="/addToy">Add toy</Link>}
      <Link to="/blog">Blogs</Link>
      <Link to="/contact">Contact</Link>
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
        {/* show login and logout buttons */}
        {user?.email ? (
          <>
            <Link className="mr-0 md:mr-3 hidden md:block" to="/">
              <div
                className="tooltip tooltip-bottom"
                data-tip={`${user?.displayName                }`}
              >
                <div className="avatar ">
                  <div className="w-12 rounded-full">
                    <img src={user.photoURL? user.photoURL:"no img"} />
                  </div>
                </div>
              </div>
            </Link>
            <button onClick={handleLogOut} className="btn bg-orange-600 mr-3 hidden md:block">
              Log Out
            </button>
          </>
        ) : (
          <Link to="/login">
            <button className="btn  bg-orange-600 hidden md:block">Login</button>
          </Link>
        )}
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
          className="menu menu-compact dropdown-content mt-3 px-4 shadow bg-base-100 rounded-box   ml-[-80px]"
        >
          
          <li>
          {user?.email ? (
          <>
            <Link className="mr-0 md:mr-3 block md:hidden" to="/">
              <div
                className="tooltip tooltip-bottom"
                data-tip={`${user?.displayName                }`}
              >
                <div className="avatar ">
                  <div className="w-12 rounded-full">
                    <img src={user.photoURL? user.photoURL:"no img"} />
                  </div>
                </div>
              </div>
            </Link>
            <button onClick={handleLogOut} className="btn bg-orange-600 mr-3 block md:hidden">
              Log Out
            </button>
          </>
        ) : (
          <Link to="/login">
            <button className="btn  bg-orange-600 ">Login</button>
          </Link>
        )}
          </li>
          <li>{menuItems}</li>
        </ul>
      </div>
    </div>
  );
};

export default MenuBar;
