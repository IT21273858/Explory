import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import MobileStepper from "@material-ui/core/MobileStepper";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { useTheme } from "@material-ui/core/styles";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";

const Mar = ({ img }) => {
    const CollectionSize = img.length;
    const theme = useTheme();
    const [activeStep, setActiveStep] = useState(0);

    // Function to go to the next picture
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    // Function to go to the previous picture
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
        <div className=" mt-2 h-20 rounded-2xl ">
            <div style={{ maxWidth: "full", flexGrow: 1, }}>
                {CollectionSize > 0 ? (
                    <>
                        <Paper
                            square
                            elevation={0}
                            style={{
                                height: 30,
                                display: "flex",
                                paddingLeft: theme.spacing(4),
                                backgroundColor: theme.palette.background.default,
                                alignItems: "center",
                            }}
                        >
                            <Typography className=" text-center">{img[activeStep].camera.full_name}</Typography>
                        </Paper>
                        <img
                            src={img[activeStep].img_src}
                            style={{
                                height: 400,
                                width: "100%",
                                maxWidth: "100%",
                                display: "block",
                                overflow: "hidden",
                            }}
                            className="rounded-2xl "
                            alt={img[activeStep].earth_date}
                        />
                        <MobileStepper
                            variant="text"
                            steps={CollectionSize}
                            position="static"
                            activeStep={activeStep}
                            style={{height:30}}
                            className=" bg-slate-500 rounded-t-full  "
                            nextButton={
                                <Button
                                    size="small"
                                    onClick={handleNext}
                                    disabled={activeStep === CollectionSize - 1}
                                >
                                    Next
                                    {theme.direction !== "rtl" ? (
                                        <KeyboardArrowRight />
                                    ) : (
                                        <KeyboardArrowLeft />
                                    )}
                                </Button>
                            }
                            backButton={
                                <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                                    {theme.direction !== "rtl" ? (
                                        <KeyboardArrowLeft />
                                    ) : (
                                        <KeyboardArrowRight />
                                    )}
                                    Back
                                </Button>
                            }
                        />
                    </>
                ) : (
                    <h1 className="text-light">
                        Sorry No Images Available Now
                    </h1>
                )}
            </div>
            <div className=" bg-orange-300 rounded-b-3xl">
                {CollectionSize > 0 ? (
                    <>
                        <Typography>Rover Name:-{img[activeStep].rover.name}</Typography>
                        <h2> Launched Date: {img[activeStep].rover.launch_date} </h2>
                        <h2> Landing Date: {img[activeStep].rover.landing_date} </h2>
                        <h2> Current Status: {img[activeStep].rover.status} </h2>
                    </>
                ) : ""}
            </div>
        </div>
    );
};

export default Mar;
