import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../authProvider/AuthProvider";


const Register = () => {
  const { user, createUser ,profileUpdate} = useContext(AuthContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [photo, setPhoto] = useState("");
  const [error, setError] = useState("");

  const navigator = useNavigate();

  const handleRegistration = (event) => {
    event.preventDefault();

    // password verification
    if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)) {
      return setError(
        "Minimum eight characters, at least one letter and one number"
      );
    } else {
      setError(null);
    }

    if ((name, email, password, photo)) {
      createUser(email, password)
        .then((result) => {
          const createdUser = result.user;
          console.log(createdUser);

          // update profile
          profileUpdate(name,photo)
          if (result.user) {
            navigator("/");
          }
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  };

  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex flex-col md:flex-row">
          <div className="text-center lg:text-left w-3/5 md:w-1/2">
            <img
              src="https://pathwayport.com/saasland/images/login@4x.png"
              alt=""
            />
          </div>
          <div className="card flex-shrink-0 max-w-lg shadow-2xl w-full md:w-1/2">
            <div className="card-body">
              <h3 className="text-center text-4xl font-bold">
                Please Register
              </h3>
              <form onSubmit={handleRegistration}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Name"
                    onChange={(e) => setName(e.target.value)}
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="email"
                    onChange={(e) => setEmail(e.target.value)}
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Image</span>
                  </label>
                  <input
                    type="text"
                    required
                    onChange={(e) => setPhoto(e.target.value)}
                    className="file-input file-input-bordered file-input-warning w-full"
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="text"
                    placeholder="password"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                    className="input input-bordered"
                  />
                  <span>{error}</span>
                </div>
                <div className="form-control mt-6">
                  <input
                    type="submit"
                    value="Register"
                    className="btn bg-orange-600"
                  />
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
