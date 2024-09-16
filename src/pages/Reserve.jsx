import * as React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

import reserveHeroBanner from "../assets/reserveHero.jpg";

import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useLocation } from "react-router-dom";
import DatePicker from "react-datepicker";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import PageHeroBanner from "../components/PageHeroBanner";

const steps = ["Service", "Time", "Your data", "Done"];

function Reserve() {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const [bookingService, setBookingService] = React.useState(0);
  const [bookingDate, setBookingDate] = React.useState(new Date());
  const [bookingTime, setBookingTime] = React.useState("");
  const [bookingName, setBookingName] = React.useState("");
  const [bookingPhone, setBookingPhone] = React.useState("");
  const [bookingMail, setBookingMail] = React.useState("");
  const [bookingDescription, setBookingDescription] = React.useState("");

  const [errors, setErrors] = React.useState({});

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const validateStep = () => {
    const newErrors = {};

    if (activeStep === 0) {
      // Step 0: Service and Date
      if (!bookingService) {
        newErrors.bookingService = "Please select a service";
      }
      if (!bookingDate) {
        newErrors.bookingDate = "Please select a date";
      }
    } else if (activeStep === 1) {
      // Step 1: Date and Time
      if (!bookingTime) {
        newErrors.bookingTime = "Please select a time";
      }
    } else if (activeStep === 2) {
      // Step 2: Personal Information
      if (!bookingName) {
        newErrors.bookingName = "Please enter your name";
      }
      if (!bookingPhone) {
        newErrors.bookingPhone = "Please enter your phone number";
      }
      if (!bookingMail) {
        newErrors.bookingMail = "Please enter your email";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) {
      let newSkipped = skipped;
      if (isStepSkipped(activeStep)) {
        newSkipped = new Set(newSkipped.values());
        newSkipped.delete(activeStep);
      }

      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setSkipped(newSkipped);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
    setErrors({});
  };

  const handleSubmit = () => {
    const data = {
      bookingService,
      date: bookingDate.toISOString().split("T")[0],
      time: bookingTime,
      fullName: bookingName,
      phoneNumber: bookingPhone,
      email: bookingMail,
      description: bookingDescription,
    };

    axios
      .post(`http://localhost:8082/api/bookings/create`, data)
      .then(function (response) {
        console.log(response);
        handleReset();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <PageHeroBanner image={reserveHeroBanner} title={t("Reservation")} />
      <Box sx={{ width: "60%", margin: "auto" }}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};

            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
            {activeStep === 0 && (
              <>
                <div>
                  <h5>Service</h5>
                  <select
                    value={bookingService}
                    onChange={(option) =>
                      setBookingService(option.target.value)
                    }
                  >
                    <option value="0">Select a service</option>
                    <option value="1">Manicure</option>
                    <option value="2">Pedicure</option>
                    <option value="3">Manicure + Pedicure</option>
                    <option value="4">Cosmetics</option>
                  </select>
                  {errors.bookingService && (
                    <Typography color="error">
                      {errors.bookingService}
                    </Typography>
                  )}
                </div>
                <div>
                  <h5>Date</h5>
                  <DatePicker
                    selected={bookingDate}
                    onChange={(date) => setBookingDate(date)}
                  />
                  {errors.bookingDate && (
                    <Typography color="error">{errors.bookingDate}</Typography>
                  )}
                </div>
              </>
            )}
            {activeStep === 1 && (
              <>
                <div>
                  <h5>Date</h5>
                  <DatePicker
                    selected={bookingDate}
                    onChange={(date) => setBookingDate(date)}
                  />
                  {errors.bookingDate && (
                    <Typography color="error">{errors.bookingDate}</Typography>
                  )}
                </div>
                <div>
                  <FormControl>
                    <FormLabel id="demo-controlled-radio-buttons-group">
                      Time
                    </FormLabel>
                    <RadioGroup
                      aria-labelledby="demo-controlled-radio-buttons-group"
                      name="controlled-radio-buttons-group"
                      value={bookingTime}
                      onChange={(option) => setBookingTime(option.target.value)}
                    >
                      <FormControlLabel
                        value="00:10"
                        control={<Radio />}
                        label="00:10"
                      />
                      <FormControlLabel
                        value="00:30"
                        control={<Radio />}
                        label="00:30"
                      />
                      <FormControlLabel
                        value="00:40"
                        control={<Radio />}
                        label="00:40"
                      />
                      <FormControlLabel
                        value="04:30"
                        control={<Radio />}
                        label="04:30"
                      />
                    </RadioGroup>
                  </FormControl>
                  {errors.bookingTime && (
                    <Typography color="error">{errors.bookingTime}</Typography>
                  )}
                </div>
              </>
            )}
            {activeStep === 2 && (
              <>
                <div>
                  <p>
                    <b>Service</b>: {bookingService}
                  </p>
                  <p>
                    <b>Date</b>: {bookingDate.toISOString().split("T")[0]}
                  </p>
                  <p>
                    <b>Time</b>: {bookingTime}
                  </p>
                </div>
                <div>
                  <label htmlFor="fullName">Name:</label>
                  <input
                    type="text"
                    id="fullName"
                    value={bookingName}
                    onChange={(e) => setBookingName(e.target.value)}
                  />
                  {errors.bookingName && (
                    <Typography color="error">{errors.bookingName}</Typography>
                  )}
                  <br />
                  <label htmlFor="phoneNumber">Phone:</label>
                  <input
                    type="text"
                    id="phoneNumber"
                    value={bookingPhone}
                    onChange={(e) => setBookingPhone(e.target.value)}
                  />
                  {errors.bookingPhone && (
                    <Typography color="error">{errors.bookingPhone}</Typography>
                  )}
                  <br />
                  <label htmlFor="email">Email:</label>
                  <input
                    type="text"
                    id="email"
                    value={bookingMail}
                    onChange={(e) => setBookingMail(e.target.value)}
                  />
                  {errors.bookingMail && (
                    <Typography color="error">{errors.bookingMail}</Typography>
                  )}
                  <br />
                  <label htmlFor="description">
                    Please enter your additional requirements here:
                  </label>
                  <textarea
                    rows="4"
                    cols="50"
                    id="description"
                    value={bookingDescription}
                    onChange={(e) => setBookingDescription(e.target.value)}
                  />
                  <br />
                </div>
              </>
            )}
            {activeStep === 3 && (
              <>
                <div>
                  <p>
                    <b>Service</b>: {bookingService}
                  </p>
                  <p>
                    <b>Date</b>: {bookingDate.toISOString().split("T")[0]}
                  </p>
                  <p>
                    <b>Time</b>: {bookingTime}
                  </p>
                  <p>
                    <b>Name</b>: {bookingName}
                  </p>
                  <p>
                    <b>Phone</b>: {bookingPhone}
                  </p>
                  <p>
                    <b>Mail</b>: {bookingMail}
                  </p>
                  <p>
                    <b>Description</b>: {bookingDescription}
                  </p>
                </div>
                <Button onClick={handleSubmit} variant="contained">
                  Submit
                </Button>
              </>
            )}
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Button
                color="inherit"
                onClick={handleBack}
                disabled={activeStep === 0}
              >
                Back
              </Button>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button
                onClick={handleNext}
                disabled={activeStep === steps.length - 1}
              >
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </Box>
          </React.Fragment>
        )}
      </Box>
    </>
  );
}

export default Reserve;
