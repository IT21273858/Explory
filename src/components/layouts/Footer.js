import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="fixed-bottom">
      <div
        className="text-white p-2"
        style={{ backgroundColor: "rgb(0,0,0,0.8)", fontSize: "14px" }}
      >
        <p className="text-center text-md-left m-0 p-0">
          <Link
            to="/about#aboutTheDeveloper"
            className="custom-link text-muted"
            title="About The Developer: Shangeeth"
          >
            Designed &amp; Developed by: <u>Shangeeth</u>
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
