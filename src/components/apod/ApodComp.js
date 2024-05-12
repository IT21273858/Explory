import React from "react";

const ApodComp = (apodData) => {
  return (
    <div
      className="row mt-3 justify-content-center"
      style={{ display: "flex" }}
    >
      <div className="col-lg-6 col-sm-12">
        <img
          src={apodData.hdurl}
          alt={apodData.title}
          style={{ maxHeight: "100%", maxWidth: "100%", borderRadius:30 }}
        />
      </div>
      <div className="col-lg-6 col-sm-12 table-responsive rounded-2xl">
        <table
        style={{ backgroundColor: "rgb(0,0,0,0.7)" }}
        className="table table-dark rounded-2xl bg-stone-800 ">
          <tbody>
            <tr>
              <td className="font-serif text-lg">Title:</td>
              <td className="font-serif text-lg">{apodData.title}</td>
            </tr>
            <tr>
              <td className="font-serif text-lg">Copyright:</td>
              <td className="font-serif text-lg">{apodData.copyright}</td>
            </tr>
            <tr>
              <td className="font-serif text-lg">Date:</td>
              <td className="font-serif text-lg">{apodData.date}</td>
            </tr>
            <tr>
              <td className="font-serif text-lg">Explanation:</td>
              <td className=" font-sans text-lg ">{apodData.explanation}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApodComp;
