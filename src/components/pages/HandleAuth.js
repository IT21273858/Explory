import { jwtDecode } from "jwt-decode";



const isTokenExpired = (token) => {
    if (!token) return true; // Token doesn't exist
    const decodedToken = jwtDecode(token);
    const currentTime = Date.now() / 1000; // Convert milliseconds to seconds
    return decodedToken.exp < currentTime; // Check if token has expired
  };
  
  // Function to remove token from localStorage
  const removeToken = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("uid");
    localStorage.removeItem("name");
    localStorage.removeItem("email");
  };

const HandleAuth = async () => {
    const token = localStorage.getItem("token");
  
    
    
    // Check if token is expired
    if (isTokenExpired(token)) {
      // Token is expired, remove it
      removeToken();
      
      // Optionally, prompt user to log in again or redirect to login page
      window.location.href = "/signup";
      
       // Stop further execution
    }
    
  };

  export default HandleAuth;