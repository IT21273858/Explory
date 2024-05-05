import axios from "axios";
import React from "react";
import Swal from 'sweetalert2'

function SignIn() {
  const [state, setState] = React.useState({
    email: "",
    password: ""
  });
  const handleChange = evt => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
  };

  const handleOnSubmit = evt => {
    evt.preventDefault();
    const { email, password } = state;
    const data={
      email: email,
      password:password
    };
    console.log("Login Credentials:",data);
    if(data!=null){
      handleLogin(data);
    }

    for (const key in state) {
      setState({
        ...state,
        [key]: ""
      });
    }
  };
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
  });

  const handleLogin = async (datas) => {
  
    try {
      const {data}= await axios.get("https://explory-back-v2.onrender.com/admin/login",datas);
      console.log("Response",data.user);
      const token = data.token;
      console.log("Token",data);

      if(data.status === true ){
        localStorage.setItem("token",token);
        localStorage.setItem("uid",data.user._id);
        localStorage.setItem("name",data.user.name);
        localStorage.setItem("email",data.user.email);
        Toast.fire({
          icon: "success",
          title: "Signed in successfully"
        });
        window.location.href = "/";
      }
      else{
        alert("Login Unsucessful");
      }
    } catch (error) {
      console.log("Error during login",error);
    }

  }

  return (
    <div className="form-container sign-in-container">
      <form onSubmit={handleOnSubmit}>
        <h1>Sign in</h1>
        <div className="social-container">
          <a href="/signup" className="social">
            <i className="fab fa-facebook-f" />
          </a>
          <a href="/signup" className="social">
            <i className="fab fa-google-plus-g" />
          </a>
          <a href="/signup" className="social">
            <i className="fab fa-linkedin-in" />
          </a>
        </div>
        <span>or use your account</span>
        <input
          className=" rounded-3xl"
          type="email"
          placeholder="Email"
          name="email"
          value={state.email}
          onChange={handleChange}
        />
        <input
          className="rounded-3xl "
          type="password"
          name="password"
          placeholder="Password"
          value={state.password}
          onChange={handleChange}
        />
        <a href="/signup">Forgot your password?</a>
        <button>Sign In</button>
      </form>
    </div>
  );
}

export default SignIn;
