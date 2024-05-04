import React from "react";
import { Link } from "react-router-dom";

const Card = ({ title, body, buttonText, linkTo }) => {
  return (
    <>
      <div className="col-md-6 col-sm-12 mt-3 text-light">
        <div
          className="card mx-auto"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            height: "100%",
            width: "100%",
          }}
        >
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{body}</p>
          </div>
          <div className="card-footer">
            <Link to={linkTo} className="btn btn-outline-warning ">
              {buttonText}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
