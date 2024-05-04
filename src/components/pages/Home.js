import React from "react";
import Cards from "../layouts/Cards";
import HandleAuth from "./HandleAuth";

const Home = () => {
  // Function to check if token is expired
  HandleAuth();

  return (
    <div className="mb-3">
      <div className="my-3" align="center">
        <h1 className="text-light ">Explory Welcomes You ! ✌️</h1>
      </div>
      <Cards />
    </div>
   
  );
};

export default Home;
