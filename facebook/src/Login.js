import React from "react";
import "./Login.css";
import fblogo from "./fblogo.svg";
import { Button } from "@material-ui/core";
import { auth } from "./firebase";

function Login() {
  const login = () => {};
  return (
    <div className="login">
      <div className="login__logo">
        <img src={fblogo} alt="" />
      </div>
      <Button onClick={login} type="submit">
        Sing In
      </Button>
    </div>
  );
}

export default Login;
