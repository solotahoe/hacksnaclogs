import React, { useState } from "react";
import {
  BrowserRouter,
  Route,
  Switch,
  Link,
  useNavigate,
} from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../fire";

export default function Details() {
  const [user, setUser] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHassAccount] = useState(true);

  const navigate = useNavigate();
  // console.log("usereeee");
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
  const register = async () => {
    console.log("weeeeeeeeerrw");
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      console.log(user);
      if (user) {
        navigate("/");
      }
    } catch (error) {
      console.log(error.message);
      setEmailError(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };
  return (
    <div>
      <div className="container-fluid app">
        <div className="row">
          <div className="divOne col-md-6">
            <img className="registerImg" src="/lights.jpeg" alt="darkoneIMG" />
          </div>

          <div className="divtwo col-md-6">
            <img className="logsImg" src="/logs.png" alt="logs pics" />
            <h2 className="join">Login to Hackersnacklogs</h2>
            <h3 className="fastEasy">Fast and Easy</h3>

            <div className="input-group input-group2">
              <div className="span-block">
                <img src="email.png" alt="user.png" />
              </div>
              <input
                type="email"
                className="text-field w-input"
                placeholder="Email Address"
                required
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>

            <div className="input-group input-group2">
              <div className="span-block">
                <img src="user.png" alt="user.png" />
              </div>
              <input
                type="password"
                className="text-field w-input"
                placeholder="Input your password here"
                required
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <p className="errorsg">{emailError}</p>
            </div>

            {/* <div className="input-group input-group2">
                <div className="span-block">
                  <img src="user.png" alt="user.png" />
                </div>
                <input
                  type="password"
                  className="text-field w-input"
                  placeholder="Confirm Password"
                  required
                />
              </div> */}

            <button className="loginButton register" onClick={register}>
              Register
            </button>
            <h6 className="passwordForgot">
              <h6>
                {" "}
                Already have an account? <Link to="/"> Login Now </Link>
              </h6>
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}
