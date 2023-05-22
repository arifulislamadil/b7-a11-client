import React, { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../authProvider/AuthProvider";


const Login = () => {

    const {signIn}= useContext(AuthContext);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
    .then(result=>{
        const user = result.user;
        console.log(user);
    })
    .catch(error=>{
        console.log(error.message);
    })
    
  };
  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content">
          <div className="text-center lg:text-left w-1/2">
            <img
              src="https://pathwayport.com/saasland/images/login@4x.png"
              alt=""
            />
          </div>
          <div className="card flex-shrink-0 max-w-lg shadow-2xl w-1/2">
            <div className="card-body">
              <form onSubmit={handleLogin}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    placeholder="email"
                    name="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="text"
                    placeholder="password"
                    name="password"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control mt-6">
                  <input type="submit" value="Login" className="btn btn-primary"/>
                </div>
              </form>
              <div className="flex justify-center mt-2 pb-3 ">
                <h3 className="text-2xl mr-5">
                  <button>
                    <FaGoogle />
                  </button>
                </h3>
              </div>
              <div className="text-center">
                <span>Don't have account then </span>
                <Link className="" to="/register">
                  <button className="text-red-600">Register</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
