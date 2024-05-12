
const Neo = (props) => {

  const { stateData, date } = props;

 
  
  const handleClick = (e, url) => {
    e.preventDefault();
    window.open(url, "_blank");
  };

  return (
    <>
      <div className="row justify-content-center mt-3">
        <table
        style={{ backgroundColor: "rgb(0,0,0,0.7)" }}
          align="center"
          className="table table-dark border-none table-responsive table-responsive-sm mx-auto rounded-2xl"
        >
          <thead align="center">
            <tr>
              <th scope="col">Object ID</th>
              <th scope="col">Name</th>
              <th scope="col">Is Potentially Hazardous?</th>
              <th scope="col">Distance from Earth (KM)</th>
              <th scope="col">Velocity (KM/Hr.)</th>
              <th scope="col">Estimated Diameters (KMs)</th>
              <th scope="col">More Details</th>
            </tr>
          </thead>
          <tbody align="center">
            
            {stateData && 
            <>
            {
              stateData.near_earth_objects[date].map((d, index) => {
                return (
                  <tr key={index}>
                    {
                      console.log("Valu",d)
                    }
                    <th scope="row">{d.id}</th>
                    <td>{d.name}</td>
                    <td>
                      {d.is_potentially_hazardous_asteroid ? "Yes" : "No"}
                    </td>
                    <td>{d.close_approach_data[0].miss_distance.kilometers}</td>
                    <td>{d.close_approach_data[0].miss_distance.kilometers}</td>
                    <td>
                      {
                        d.close_approach_data[0].relative_velocity
                          .kilometers_per_hour
                      }
                    </td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-outline-info"
                        onClick={(e) => {
                          handleClick(e, d.nasa_jpl_url);
                        }}
                      >
                        Check
                      </button>
                    </td>
                  </tr>
                );
              })
            }
            </>
}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Neo;
