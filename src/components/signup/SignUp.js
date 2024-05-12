import React, { useState } from "react";
import "./styles.css";
import SignIn from "./SignIn";
import Signups from "./Signups";

export default function SignUp() {
  const [type, setType] = useState("signIn");
  const handleOnClick = text => {
    if (text !== type) {
      setType(text);
      return;
    }
  };
  const containerClass =
    " containers" + (type === "signUp" ? "right-panel-active" : "");
  return (
    <div className="SignUp">
      <h2>Sign in/up Form</h2>
      <div className={containerClass} id="container">
        <Signups />
        <SignIn />
        <div className="overlay-container">
          <div className="overlays">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button
                className="ghost"
                id="signIn"
                onClick={() => handleOnClick("signIn")}
              >
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button
                className="ghost "
                id="signUp"
                onClick={() => handleOnClick("signUp")}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}