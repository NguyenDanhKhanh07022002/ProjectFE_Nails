import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-datepicker/dist/react-datepicker.css";
import "./CloseTimeManagement.scss";

const CloseTimeManagement = () => {
    const [bookingDate, setBookingDate] = useState(new Date());
    const [selectedTimes, setSelectedTimes] = useState([]);

    const handleCheckboxChange = (event) => {
        const { value } = event.target;
        console.log("Before change:", selectedTimes);
        setSelectedTimes((prevSelectedTimes) => {
            const updatedTimes = prevSelectedTimes.includes(value)
                ? prevSelectedTimes.filter((time) => time !== value)
                : [...prevSelectedTimes, value];

            console.log("After change:", updatedTimes);
            return updatedTimes;
        });
    };
    return (
        <div className="close-time-management m-lg-2">
            <h4 className="close-time-title">Close Time</h4>
            <div className="date-picker-wrapper">
                <DatePicker
                    selected={bookingDate}
                    onChange={(date) => setBookingDate(date)}
                    minDate={new Date()}
                    dateFormat="dd.MM.yyyy"
                    className="custom-date-picker"
                />
            </div>
            <div className="time-selection-wrapper">
                {[
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
                ].map((time) => (
                    <div className="radio-group" key={time}>
                        <input
                            type="checkbox"
                            name="time"
                            value={time}
                            id={`time-${time.replace(":", "-")}`}
                            className="custom-radio"
                            onChange={handleCheckboxChange}
                            checked={selectedTimes.includes(time)}
                        />
                        <label
                            htmlFor={`time-${time.replace(":", "-")}`}
                            className="custom-radio-label"
                        >
                            {time}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CloseTimeManagement;