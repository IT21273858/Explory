
import React, { useEffect, useState } from "react";
import axios from "axios";
import Mar from './Mar';
import Spinner from "../layouts/Spinner";
// import Icon from '../pages/info.png';
import HandleAuth from "../pages/HandleAuth";
const Mars = () => {
  HandleAuth();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Mars api", process.env.REACT_APP_MARS_KEY + "&api_key=" + process.env.REACT_APP_API_KEY);
        const api = process.env.REACT_APP_MARS_KEY + "&api_key=" + process.env.REACT_APP_API_KEY;
        // const api ="";

        setLoading(true);
        const tempData = await axios.get(api);
        console.log("Data", tempData.data.photos);
        setData(tempData.data.photos);
        setLoading(false);
        //
      } catch (error) {
        setLoading(false);
        console.error(error);
      }
    };

    fetchData();

    return () => {
      setData(null);
    };
  }, []);

  return (
    <>
      {loading === true ? (
        <Spinner />
      ) : (
        <div className=" rounded-2xl" style={{ backgroundColor: "rgb(0,0,0,0.7)" }}>
          <h1 className="text-light items-center justify-center text-center">
            MARS - Weather Updates, Rovar Images
          </h1>
          {/* <div align="center" className="my-4">
            <img src={Icon} alt="Icon" height="100px" width="100px" />
          </div> */}

          <div>
            <Mar img={data} />
          </div>
        </div>
      )}
    </>
  );
};

export default Mars;
