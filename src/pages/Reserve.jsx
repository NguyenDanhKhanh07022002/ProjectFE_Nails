import * as React from "react";
import axios from "axios";

import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import DatePicker from "react-datepicker";
//radio
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const steps = ["Service", "Time", "Your data", "Done"];
function Reserve() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const [bookingService, setBookingService] = React.useState(0);
  const [bookingDate, setBookingDate] = React.useState(new Date());
  const [bookingTime, setBookingTime] = React.useState("");
  const [bookingName, setBookingName] = React.useState("");
  const [bookingPhone, setBookingPhone] = React.useState("");
  const [bookingMail, setBookingMail] = React.useState("");
  const [bookingDescription, setBookingDescription] = React.useState("");

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  const handleSubmit = () => {
    let data = {
      service: bookingService,
      date: bookingDate.toISOString().split("T")[0],
      time: bookingTime,
      fullName: bookingName,
      phoneNumber: bookingPhone,
      email: bookingMail,
      description: bookingDescription,
    };
    console.log(data);
    axios
      .post(`http://localhost:8082/api/bookings/create`, data)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
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
          {activeStep === 0 ? (
            <>
              <div>
                <h5>Service</h5>
                <select
                  name=""
                  id=""
                  value={bookingService}
                  onChange={(option) => setBookingService(option.target.value)}
                >
                  <option value="0">Select a service</option>
                  <option value="1">Manicure</option>
                  <option value="2">Pedicure</option>
                  <option value="3">Manicure + Pedicure</option>
                  <option value="4">Cosmestics</option>
                </select>
              </div>
              <div>
                <h5>Date</h5>
                <DatePicker
                  selected={bookingDate}
                  onChange={(date) => setBookingDate(date)}
                />
              </div>
            </>
          ) : (
            ""
          )}
          {activeStep === 1 ? (
            <>
              <div>
                <h5>Date</h5>
                <DatePicker
                  selected={bookingDate}
                  onChange={(date) => setBookingDate(date)}
                />
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
              </div>
            </>
          ) : (
            ""
          )}
          {activeStep === 2 ? (
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
                <label for="fullName">Name:</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={bookingName}
                  onChange={(e) => setBookingName(e.target.value)}
                />
                <br />
                <label for="phoneNumber">Phone:</label>
                <input
                  type="text"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={bookingPhone}
                  onChange={(e) => setBookingPhone(e.target.value)}
                />
                <br />
                <label for="email">Email:</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={bookingMail}
                  onChange={(e) => setBookingMail(e.target.value)}
                />
                <br />
                <label for="description">
                  Please enter your additional requirements here::
                </label>
                <textarea
                  rows="4"
                  cols="50"
                  id="description"
                  name="description"
                  value={bookingDescription}
                  onChange={(e) => setBookingDescription(e.target.value)}
                />
                <br />
              </div>
            </>
          ) : (
            ""
          )}
          {activeStep === 3 ? (
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
            </>
          ) : (
            ""
          )}
          <hr />
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />
            {activeStep === steps.length - 1 ? (
              <Button onClick={handleSubmit}>FINISH</Button>
            ) : (
              <Button onClick={handleNext}>NEXT</Button>
            )}
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}

export default Reserve;
