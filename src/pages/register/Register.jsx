import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../authProvider/AuthProvider";

const Register = () => {

    const {createUser}=useContext(AuthContext);
    
    const handleRegistration = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo= form.img.value;
    const password = form.password.value;
    
    createUser(email,password)
    .then(result=>{
        const createdUser = result.user;
        console.log(createdUser)
    
    })
    .catch(error=>{
        console.log(error.message)
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
              <form onSubmit={handleRegistration}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="input input-bordered"
                  />
                </div>
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
                    <span className="label-text">Image</span>
                  </label>
                  <input type="text" name="img" className="file-input file-input-bordered file-input-warning w-full" />
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
                <input type="submit" value="Register" className="btn btn-primary"/>
                </div>
              </form>
              
              <div className="text-center">
                <span>Have account then </span>
                <Link className="" to="/login">
                  <button className="text-red-600">Login</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
