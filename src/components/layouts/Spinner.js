import moon from "./moon.gif"
import earth from "./earth.gif"
import venus from "./venus.gif"
import mars from "./mars.gif"
const Spinner = () => {
  
  const spinner=localStorage.getItem("spinner");
  console.log("Spinner",spinner);
  var img_src=moon;
  // const [img_src,setImgSrc]=useState();

  if(spinner==="moon"){
    img_src = moon
  }else if(spinner==="earth"){
    img_src = earth
  }
  else if(spinner==="venus"){
    img_src = venus
  }
  else if(spinner==="mars"){
    img_src = mars
  }

  return (
    <>
      <img
        src={img_src}
        style={{
          width: "100px",
          margin: "auto",
          marginTop: "50px",
          display: "block",
        }}
        alt="Loading..."
      />
    </>
  );
};

export default Spinner;
