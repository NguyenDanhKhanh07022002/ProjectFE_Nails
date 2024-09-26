import * as React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import PhoneInput from "react-phone-input-2";

import "./Reserve.scss";

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
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const [bookingService, setBookingService] = React.useState(0);
  const [bookingDate, setBookingDate] = React.useState(new Date());
  const [bookingTime, setBookingTime] = React.useState("");
  const [bookingName, setBookingName] = React.useState("");
  const [bookingPhone, setBookingPhone] = React.useState("");
  const [bookingMail, setBookingMail] = React.useState("");
  const [bookingDescription, setBookingDescription] = React.useState("");
  const bookingTimeOptions = [
    "08:00",
    "08:30",
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30",
    "18:00",
    "18:30",
    "19:00",
    "19:30",
    "20:00",
  ];
  const [errors, setErrors] = React.useState({});
  const renderServiceOption = (option) => {
    switch (option) {
      case "1":
        return "Manicure";
      case "2":
        return "Pedicure";
      case "3":
        return "Manicure + Pedicure";
      case "4":
        return "Cosmetics";
      default:
        return "Select Service";
    }
  };
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
      if (activeStep === steps.length - 1) {
        handleSubmit();
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
    setBookingService(0);
    setBookingDate(new Date());
    setBookingTime("");
    setBookingName("");
    setBookingPhone("");
    setBookingMail("");
    setBookingDescription("");
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
      <div id="reserve-container">
        <Box
          sx={{
            width: { xs: "90%", sm: "70%", md: "60%" }, // Responsive width
            margin: "auto",
            padding: "16px",
            borderRadius: "8px",
            backgroundColor: "#fff",
          }}
        >
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
              {/* <Typography sx={{ mt: 2, mb: 1 }}>
                Step {activeStep + 1}
              </Typography> */}
              {activeStep === 0 && (
                <>
                  <div className="reserve-wrapper">
                    <div className="reserve-item">
                      <p className="reserve-item-header">
                        Select service and date of reservation:
                      </p>
                      <b className="reserve-item-title">Service</b>
                      <select
                        style={{ width: "90%", boxSizing: "border-box" }}
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
                    <div className="reserve-item">
                      <b className="reserve-item-title">Date</b>
                      <DatePicker
                        selected={bookingDate}
                        onChange={(date) => setBookingDate(date)}
                        minDate={new Date()}
                      />
                      {errors.bookingDate && (
                        <Typography color="error">
                          {errors.bookingDate}
                        </Typography>
                      )}
                    </div>
                  </div>
                </>
              )}
              {activeStep === 1 && (
                <>
                  <div className="reserve-wrapper reserve-time-step">
                    <div className="reserve-item">
                      <b className="reserve-item-title">Date</b>
                      <DatePicker
                        selected={bookingDate}
                        onChange={(date) => setBookingDate(date)}
                        minDate={new Date()}
                      />
                      {errors.bookingDate && (
                        <Typography color="error">
                          {errors.bookingDate}
                        </Typography>
                      )}
                    </div>
                    <div className="reserve-item">
                      <FormControl>
                        <FormLabel id="demo-controlled-radio-buttons-group">
                          <b className="reserve-item-title">Time</b>
                        </FormLabel>
                        <RadioGroup
                          className="reserve-time-option"
                          aria-labelledby="demo-controlled-radio-buttons-group"
                          name="controlled-radio-buttons-group"
                          value={bookingTime}
                          onChange={(option) =>
                            setBookingTime(option.target.value)
                          }
                        >
                          {bookingTimeOptions.map((e, i) => (
                            <FormControlLabel
                              value={e}
                              control={<Radio />}
                              label={e}
                              key={i}
                            />
                          ))}
                        </RadioGroup>
                      </FormControl>
                      {errors.bookingTime && (
                        <Typography color="error">
                          {errors.bookingTime}
                        </Typography>
                      )}
                    </div>
                  </div>
                </>
              )}
              {activeStep === 2 && (
                <>
                  <div className="reserve-wrapper">
                    <div>
                      <p>
                        <b className="reserve-item-title">
                          Service: {renderServiceOption(bookingService)}
                        </b>
                      </p>
                      <p>
                        <b className="reserve-item-title">
                          Date: {bookingDate.toISOString().split("T")[0]}
                        </b>
                      </p>
                      <p>
                        <b className="reserve-item-title">
                          Time: {bookingTime}
                        </b>
                      </p>
                    </div>
                    <p className="reserve-item-warning">
                      *To complete the reservation, all that remains is to enter
                      your contact details, which will not be processed further
                      without your consent, according to the rules of the new
                      European Union regulation on the protection of personal
                      data.
                    </p>
                    <p className="reserve-item-warning">Your detail:</p>
                    <div>
                      <div className="reserve-item-form">
                        <div className="reserve-item-form--item">
                          <label htmlFor="fullName">Name:</label>
                          <input
                            type="text"
                            id="fullName"
                            value={bookingName}
                            onChange={(e) => setBookingName(e.target.value)}
                          />
                          {errors.bookingName && (
                            <Typography color="error">
                              {errors.bookingName}
                            </Typography>
                          )}
                        </div>

                        <div className="reserve-item-form--item">
                          <label htmlFor="phoneNumber">Phone:</label>
                          <PhoneInput
                            inputProps={{
                              required: true,
                              id: "phoneNumber",
                              className: "phone-input",
                            }}
                            country={"us"}
                            value={bookingPhone}
                            onChange={(phone) => setBookingPhone(phone)}
                          />
                          {errors.bookingPhone && (
                            <Typography color="error">
                              {errors.bookingPhone}
                            </Typography>
                          )}
                        </div>

                        <div className="reserve-item-form--item">
                          <label htmlFor="email">Email:</label>
                          <input
                            type="email"
                            id="email"
                            value={bookingMail}
                            onChange={(e) => setBookingMail(e.target.value)}
                          />
                          {errors.bookingMail && (
                            <Typography color="error">
                              {errors.bookingMail}
                            </Typography>
                          )}
                        </div>
                      </div>

                      <div className="reserve-item-textarea">
                        <label htmlFor="description">
                          Please enter your additional requirements here:
                        </label>
                        <textarea
                          rows="10"
                          id="description"
                          value={bookingDescription}
                          onChange={(e) =>
                            setBookingDescription(e.target.value)
                          }
                        />
                      </div>
                      <br />
                    </div>
                  </div>
                </>
              )}
              {activeStep === 3 && (
                <>
                  <div className="reserve-wrapper">
                    <p>
                      <b className="reserve-item-title">
                        Service: {renderServiceOption(bookingService)}
                      </b>
                    </p>
                    <p>
                      <b className="reserve-item-title">
                        Date: {bookingDate.toISOString().split("T")[0]}
                      </b>
                    </p>
                    <p>
                      <b className="reserve-item-title">Time: {bookingTime}</b>
                    </p>
                    <p>
                      <b className="reserve-item-title">Name : {bookingName}</b>
                    </p>
                    <p>
                      <b className="reserve-item-title">
                        Phone: {bookingPhone}
                      </b>
                    </p>
                    <p>
                      <b className="reserve-item-title">Mail : {bookingMail}</b>
                    </p>
                    <p>
                      <b className="reserve-item-title">
                        Description: {bookingDescription}
                      </b>
                    </p>
                  </div>
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
                <Button onClick={handleNext}>
                  {activeStep === steps.length - 1 ? "Submit" : "Next"}
                </Button>
              </Box>
            </React.Fragment>
          )}
        </Box>
      </div>
    </>
  );
}

export default Reserve;
