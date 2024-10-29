import * as React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import PhoneInput from "react-phone-input-2";
import moment from "moment";
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
import { ToastContainer, toast } from "react-toastify";
import config from "../../config";

import PageHeroBanner from "../components/PageHeroBanner";

const steps = ["Service", "Time", "Your data", "Done"];

function Reserve() {
  const { t } = useTranslation();
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const [isSendingReserve, setIsSendingReserve] = React.useState(false);

  const [bookingService, setBookingService] = React.useState(0);
  const [bookingDate, setBookingDate] = React.useState(new Date());
  const [bookingTime, setBookingTime] = React.useState("");
  const [bookingName, setBookingName] = React.useState("");
  const [bookingPhone, setBookingPhone] = React.useState("");
  const [bookingMail, setBookingMail] = React.useState("");
  const [bookingDescription, setBookingDescription] = React.useState("");
  const [closedTimes, setClosedTimes] = useState([]);
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
        return t("service.Manicure");
      case "2":
        return t("service.Pedicure");
      case "3":
        return t("priceMenu.title_3");
      case "4":
        return t("priceMenu.title_4");
      case "5":
        return t("priceMenu.title_5");
      case "6":
        return t("priceMenu.title_6");
      case "7":
        return t("priceMenu.title_7");
      case "8":
        return t("priceMenu.title_8");
      case "9":
        return t("priceMenu.title_9");
      default:
        return t("reservePage.defaultService");
    }
  };
  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const validateStep = () => {
    const newErrors = {};

    if (activeStep === 0) {
      if (!bookingService) {
        newErrors.bookingService = "Please select a service";
      }
      if (!bookingDate) {
        newErrors.bookingDate = "Please select a date";
      }
    } else if (activeStep === 1) {
      if (!bookingTime) {
        newErrors.bookingTime = "Please select a time";
      }
    } else if (activeStep === 2) {
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
    var date = moment(bookingDate.toISOString()).format("DD-MM-YYYY");
    if (validateStep()) {
      let newSkipped = skipped;
      if (isStepSkipped(activeStep)) {
        newSkipped = new Set(newSkipped.values());
        newSkipped.delete(activeStep);
      }
      if (activeStep === steps.length - 1) {
        setIsSendingReserve(true);
        handleSubmit();
      } else {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        if (activeStep === 0) {
          fetchClosedTimes(date);
        }
      }
      setSkipped(newSkipped);
    }
  };

  const fetchClosedTimes = async (date) => {
    try {
      const response = await fetch(`${config.apiUrl}api/close-times/${date}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Closed times:", data);
      setClosedTimes(data);
    } catch (error) {
      console.error("Error fetching closed times", error);
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
      date: moment(bookingDate.toISOString()).format("DD-MM-YYYY"),
      time: bookingTime,
      fullName: bookingName,
      phoneNumber: bookingPhone,
      email: bookingMail,
      description: bookingDescription,
    };

    axios
      .post(`${config.apiUrl}/api/bookings/create`, data)
      .then(function (response) {
        console.log(response);
        handleReset();
        toast.success("Your booking has been sent!");
        setIsSendingReserve(false);
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const isTimeDisabled = (time) => {
    const [hours, minutes] = time.split(":").map(Number);
    const optionTime = new Date(bookingDate);
    optionTime.setHours(hours, minutes, 0, 0);
    const currentTime = new Date();
    return optionTime < currentTime && bookingDate.toDateString() === currentTime.toDateString();
  };

  const handleDateChange = async (date) => {
    setBookingDate(date);
    const formattedDate = moment(date).format("DD-MM-YYYY");
    await fetchClosedTimes(formattedDate);
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        closeOnClick
        draggable
      />
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
                  <StepLabel {...labelProps}>{t(label)}</StepLabel>
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
                        {t("reservePage.Select-service")}
                      </p>
                      <b className="reserve-item-title">{t("Service")}</b>
                      <select
                        style={{ width: "90%", boxSizing: "border-box" }}
                        value={bookingService}
                        onChange={(option) =>
                          setBookingService(option.target.value)
                        }
                      >
                        <option value="0">
                          {t("reservePage.defaultService")}
                        </option>
                        <option value="1">{t("service.Manicure")}</option>
                        <option value="2">{t("service.Pedicure")}</option>
                        <option value="3">{t("priceMenu.title_3")}</option>
                        <option value="4">{t("priceMenu.title_4")}</option>
                        <option value="5">{t("priceMenu.title_5")}</option>
                        <option value="6">{t("priceMenu.title_6")}</option>
                        <option value="7">{t("priceMenu.title_7")}</option>
                        <option value="8">{t("priceMenu.title_8")}</option>
                        <option value="9">{t("priceMenu.title_9")}</option>
                      </select>
                      {errors.bookingService && (
                        <Typography color="error">
                          {errors.bookingService}
                        </Typography>
                      )}
                    </div>
                    <div className="reserve-item">
                      <b className="reserve-item-title">
                        {t("reservePage.Date")}
                      </b>
                      <DatePicker
                        selected={bookingDate}
                        onChange={(date) => setBookingDate(date)}
                        minDate={new Date()}
                        dateFormat="dd.MM.yyyy"
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
                      <b className="reserve-item-title">
                        {t("reservePage.Date")}
                      </b>
                      <DatePicker
                        selected={bookingDate}
                        onChange={handleDateChange}
                        minDate={new Date()}
                        dateFormat="dd.MM.yyyy"
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
                          <b className="reserve-item-title">{t("Time")}</b>
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
                              control={<Radio disabled={closedTimes.includes(e) || isTimeDisabled(e)} />}
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
                          {t("Service")}: {renderServiceOption(bookingService)}
                        </b>
                      </p>
                      <p>
                        <b className="reserve-item-title">
                          {t("reservePage.Date")}:{" "}
                          {moment(bookingDate.toISOString()).format(
                            "DD.MM.yyyy"
                          )}
                        </b>
                      </p>
                      <p>
                        <b className="reserve-item-title">
                          Time: {bookingTime}
                        </b>
                      </p>
                    </div>
                    <p className="reserve-item-warning">
                      *{t("reservePage.Warning")}
                    </p>
                    <p className="reserve-item-warning">{t("Your data")}:</p>
                    <div>
                      <div className="reserve-item-form">
                        <div className="reserve-item-form--item">
                          <label htmlFor="fullName">
                            {t("reservePage.name")}:
                          </label>
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
                          <label htmlFor="phoneNumber">
                            {t("reservePage.phone")}:
                          </label>
                          <PhoneInput
                            inputProps={{
                              required: true,
                              id: "phoneNumber",
                              className: "phone-input",
                            }}
                            country={"cz"}
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
                          <label htmlFor="email">
                            {t("reservePage.email")}:
                          </label>
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
                          {t("reservePage.enterInfor")}:
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
                        {t("Service")}: {renderServiceOption(bookingService)}
                      </b>
                    </p>
                    <p>
                      <b className="reserve-item-title">
                        {t("reservePage.Date")}:{" "}
                        {moment(bookingDate.toISOString()).format("DD.MM.yyyy")}
                      </b>
                    </p>
                    <p>
                      <b className="reserve-item-title">
                        {t("Time")}: {bookingTime}
                      </b>
                    </p>
                    <p>
                      <b className="reserve-item-title">
                        {t("reservePage.name")} : {bookingName}
                      </b>
                    </p>
                    <p>
                      <b className="reserve-item-title">
                        {t("reservePage.phone")}: {bookingPhone}
                      </b>
                    </p>
                    <p>
                      <b className="reserve-item-title">
                        Email : {bookingMail}
                      </b>
                    </p>
                    <p>
                      <b className="reserve-item-title">
                        {t("reservePage.Description")}: {bookingDescription}
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
                  {t("reservePage.Back")}
                </Button>
                <Box sx={{ flex: "1 1 auto" }} />
                <Button onClick={handleNext}>
                  {activeStep === steps.length - 1
                    ? !isSendingReserve
                      ? t("reservePage.Submit")
                      : t("reservePage.Sending")
                    : t("reservePage.Next")}
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
