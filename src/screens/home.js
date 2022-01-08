//import fire from "../fire";
import { useEffect, useState } from "react";

import Coinbase from "./coinbase";

import Register from "./register";

function Home() {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHassAccount] = useState(true);

  // console.log("usereeee");

  const register = async () => {};
  useEffect(() => {
    //authListener();
  }, []);

  return (
    <div className="app">
      <Register />
    </div>
  );
}

export default Home;
