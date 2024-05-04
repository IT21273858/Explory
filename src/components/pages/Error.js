import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  const btnText = "<-- Go Back Home!";
  return (
    <div
      className="mx-auto my-auto text-light d-flex align-items-center justify-content-center"
      align="center"
      style={{ height: "90vh" }}
    >
      <div className="p-3" style={{ backgroundColor: "rgb(0,0,0,0.6)" }}>
        <p>
          <h1 className="text-danger">ERROR 404! Not Found!</h1>
        </p>
        <p>
          <h4 className="text-warning">Are you lost, baby Alien ?</h4>
          <h6>Because, the page you are looking for, does not exist!</h6>
          Please get back in your spaceship and go back home...
        </p>
        <p>
          <Link to="/" className="btn btn-outline-danger">
            {btnText} 🚀
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Error;
