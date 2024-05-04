import React, { useEffect, useState } from "react";
import axios from "axios";

import ApodComp from "./ApodComp";
import Spinner from "../layouts/Spinner";

const Apod = () => {
  const [apodData, setApodData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        let res = await axios.get(process.env.REACT_APP_API);
        console.log("Apod",res.data);
        setApodData(res.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setApodData(null);
        <div align="center">
          <div className="alert alert-danger col-lg-8 col-md-10 col-sm-12">
            SERVER ERROR!
          </div>
        </div>;
      }
    };

    fetchData();
    return () => {
      setApodData(null);
    };
  }, []);

  return (
    <>
      <div align="center" className="text-light my-2">
        <h2>Astronomy Picture Of the Day</h2>
        <h5>By: NASA</h5>
        <h5>
          For the day of: {apodData && new Date(apodData.date).toDateString()}
        </h5>
      </div>

      <div className="text-light">
        {loading === true ? (
          <Spinner />
        ) : apodData === null ? (
          <div align="center">
            <div className="alert alert-danger col-lg-8 col-md-10 col-sm-12">
              NO IMAGE AVAILABLE BY NASA RIGHT NOW!
            </div>
          </div>
        ) : (
          <ApodComp {...apodData} />
        )}
      </div>
    </>
  );
};

export default Apod;
