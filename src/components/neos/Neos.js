import React, { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import DatePicker from "react-datepicker";
import Datetime from "../Datetime";
import Neo from "./Neo";
import Spinner from "../layouts/Spinner";
import HandleAuth from "../pages/HandleAuth";


const Neos = () => {
  HandleAuth();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [date,setDate] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Neo api",process.env.REACT_APP_NEOS_API);
        
        let startfullDate = Datetime(startDate)   
        let endfullDate = Datetime(endDate)
        setDate(startfullDate)
        const api =
          process.env.REACT_APP_NEOS_API +
          "start_date=" +
          startfullDate +
          "&end_date=" +
          endfullDate +
          "&api_key=" +
          process.env.REACT_APP_API_KEY;
          console.log("NEOS",api);
          // console.log("Start and end",formattedStartDate ,"-",formattedEndDate);
        setLoading(true);
        const tempData = await axios.get(api);
        setData(tempData.data);
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
  }, [startDate, endDate]);

  return (
    <>
      {loading === true ? (
        <Spinner />
      ) : (
        <div className="container-sm text-light">
          <h1 align="center" className="my-3">
            NEOs - Near Earth Objects
          </h1>


          <div className="d-flex justify-content-center">
            <div className="m-2">
              <label htmlFor="start-date">Start Date:</label>
              <DatePicker
                className=" bg-slate-500 h-10 rounded-full"
                id="start-date"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                dateFormat="yyyy-MM-dd"
              />
            </div>
            <div className="m-2">
              <label htmlFor="end-date">End Date:</label>
              <DatePicker
                id="end-date"
                className=" bg-slate-500 h-10 rounded-full"
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                minDate={startDate.getTime() - 7 * 24 * 60 * 60 * 1000}
                maxDate={startDate.getTime() + 7 * 24 * 60 * 60 * 1000}
                dateFormat="yyyy-MM-dd"
              />
            </div>
          </div>



          <span align="center">
            <h5>Recorded on: {date}</h5>
            <h5>By: NASA</h5>
          </span>

          {/* FOR Medium / Large Screens ONLY */}
          <p align="right" className="d-none d-md-block">
            Total Number of Objects : {data && data.element_count}
          </p>
          {/* FOR Small Screens ONLY */}
          <p align="center" className="d-sm-block d-md-none">
            Total Number of Objects : {data && data.element_count}
          </p>
          {
           
            data&&
            <Neo stateData={data} date={date} />
           
          }
        </div>
      )}
    </>
  );
};

export default Neos;
