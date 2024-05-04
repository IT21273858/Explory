import React, { useState } from 'react';
import locofy from "../../logo1.png"
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
function Navbar() {
  const uid = localStorage.getItem("uid");
  const [isOpen, setIsOpen] = useState(false);

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
  const handleLogout = () => {
    Toast.fire({
      icon: "warning",
      title: "Logout successfully"
    });
    
    localStorage.removeItem("token");
    localStorage.removeItem("uid");
    localStorage.removeItem("name");
    localStorage.removeItem("email");
  };
  return (
    <nav className="flex items-center justify-between flex-wrap px-2">
      <div className="flex items-center flex-shrink-0 text-white mr-6 lg:mr-72">
        <img src={locofy} className="w-30 h-28 mr-2" alt="Logo" />
      </div>
      <div className="block lg:hidden bg-gray-500 rounded-full ">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
        >
          <svg
            className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
          <svg
            className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
          </svg>
        </button>
      </div>
      <div
        className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"}`}
      >
        <div className="text-sm lg:flex-grow">
          <a href="/" className="block mt-4 lg:inline-block lg:mt-0  text-white  mr-4">
            Home
          </a>
          <a href="/apod" className="block mt-4 lg:inline-block lg:mt-0 text-white mr-4">
            Apod
          </a>
          {
            uid ?
              <a href="/neos" className="block mt-4 lg:inline-block lg:mt-0 text-white mr-4">
                Neos
              </a> : ""
          }
          <a href="/about" className="block mt-4 lg:inline-block lg:mt-0 text-white mr-4">
            About
          </a>
          {
            uid ?
              <a href="/mars" className="block mt-4 lg:inline-block lg:mt-0 text-white mr-4">
                Mars
              </a> : ""
          }
           <a href="/spinner" className="block mt-4 lg:inline-block lg:mt-0 text-white mr-4">
            Spinner
          </a>
        </div>
        {
          uid ? <div>
            <button onClick={handleLogout} className="inline-flex items-center bg-amber-500 border-0 py-2 px-4 text-white rounded-lg">
              Logout
            </button>
          </div> : <div>
            <Link to="/signup" className="inline-flex items-center bg-amber-500 border-0 py-2 px-4 text-white rounded-lg">
              SignUp
            </Link>
          </div>
        }

      </div>
    </nav>
  );
}
export default Navbar;