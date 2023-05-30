import React, { useContext, useEffect, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../authProvider/AuthProvider";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../firebase/Firebase.config";

const auth = getAuth(app);
const  provider = new GoogleAuthProvider();



const Login = () => {
  const { signIn, user, handleGoogleLogin } = useContext(AuthContext);
  const navigator = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [getAuthToken, setAuthToken] = useState();
  const location = useLocation();
  useEffect(() => {
    setAuthToken(location?.state?.from?.pathname || "/");
  }, []);

  const handleLogin = (event) => {
    event.preventDefault();
    if ((email, password)) {
      signIn(email, password)
        .then((result) => {
          const user = result.user;
          console.log(user);
          if (getAuthToken) {
            navigator(`${getAuthToken}`);
          } else {
            navigator("/");
          }
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  };


   // google login
  
  const handleGoogle = (event) => {
    event.preventDefault();
    signInWithPopup(auth,provider)
    .then((result) => {
      const user = result.user;
      console.log(user);
      if (getAuthToken) {
        navigator(`${getAuthToken}`);
      } else {
        navigator("/");
      }
    })
    .catch((error) => {
      console.log(error.message);
    });
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
              <h3 className="text-center text-4xl font-bold">Please Login</h3>
              <form onSubmit={handleLogin}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="email"
                    onChange={(e) => setEmail(e.target.value)}
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
                    required
                    onChange={(e) => setPassword(e.target.value)}
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control mt-6">
                  <input
                    type="submit"
                    value="Login"
                    className="btn bg-orange-600"
                  />
                </div>
              </form>
              <div className="flex justify-center mt-2 pb-3 ">
                <h3 className="text-2xl mr-5">
                  <button className=" text-orange-600" onClick={handleGoogle}>
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
