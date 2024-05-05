import axios from "axios";
import React from "react";
import Swal from 'sweetalert2'
function Signups() {
  const [state, setState] = React.useState({
    name: "",
    email: "",
    password: "",
    number: ""
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
    const { name, email, password, number } = state;
    const data = {
      name: name,
      email: email,
      password: password,
      number: number
    }

    console.log("Data", data);
    // alert(
    //   `You are sign up with name: ${name} email: ${email} and password: ${password}`
    // );
    if (data) {
      handleSignup(data);
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

  const handleSignup = async (datas) => {

    try {
      const { data } = await axios.post("https://explory-back-v2.onrender.com/admin/create", datas);

      if (data.status === true) {
        Toast.fire({
          icon: "success",
          title: "SignUp successfull"
        });
        window.location.href = "/signup";
      }
      else {
        Toast.fire({
          icon: "error",
          title: "SignUp Unsuccessfull"
        });
      }
    } catch (error) {
      console.log("Error during signup", error);
      Toast.fire({
        icon: "error",
        title: `Error${error}`
      });
    }
  }

  return (
    <div className="form-container sign-up-container">
      <form onSubmit={handleOnSubmit}>
        <h1>Create Account</h1>
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
        <span>or use your email for registration</span>
        <input
          className=" rounded-3xl"
          type="text"
          name="name"
          value={state.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          className=" rounded-3xl"
          type="email"
          name="email"
          value={state.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          className=" rounded-3xl"
          type="password"
          name="password"
          value={state.password}
          onChange={handleChange}
          placeholder="Password"
        />
        <input
          className=" rounded-3xl"
          type="number"
          name="number"
          value={state.number}
          onChange={handleChange}
          placeholder="Number"
        />
        <button>Sign Up</button>
      </form>
    </div>
  );
}

export default Signups;
