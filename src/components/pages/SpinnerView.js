import React from "react";
// import HandleAuth from "./HandleAuth";
import Spinner from "../layouts/Spinner";
import Swal from 'sweetalert2'
const SpinnerView = () => {
    var ispresent = false;
    var spinnerName = localStorage.getItem("spinner");
    if (!localStorage.getItem("spinner")) {
        ispresent = true
    }
    const spinnerSelect = async () => {

        const { value: planet } = await Swal.fire({
            title: "Select a Loading Spinner",
            input: "select",
            inputOptions: {
                moon: "Moon",
                mars: "Mars",
                venus: "Venus",
                earth: "Earth"
            },
            inputPlaceholder: "Select a planet",
            showCancelButton: true,
            inputValidator: (value) => {
                return new Promise((resolve) => {
                    if (value === "moon" || value === "mars" || value === "venus" || value === "earth") {
                        localStorage.setItem("spinner", value);
                        resolve();

                    } else {
                        resolve("Please select any Planet :)");
                    }
                });
            }
        });
        if (planet) {
            Swal.fire(`You selected: ${planet}`);
            window.location.href = "/spinner";
        }
    }

    if (ispresent) {
        spinnerSelect();
    }


    return (
        <div className="mb-3">
            <div className="my-3" align="center">
                <hr style={{
                    color: '#000000',
                    backgroundColor: '#000000',
                    height: 2,
                    width:150,
                    marginBottom:5
                }} />
                <h1 className="text-secondary-yellow ">Page will load with spinner - {spinnerName}!</h1>
                <hr style={{
                    color: '#000000',
                    backgroundColor: '#000000',
                    height: 2,
                    width:300,
                    marginTop:5
                }} />
            </div>
            <div>
                <button onClick={spinnerSelect} className="inline-flex items-center bg-amber-500 border-0 py-2 px-4 text-white rounded-lg">Change Spinner</button>
            </div>
            <Spinner />
        </div>

    );
};

export default SpinnerView;
