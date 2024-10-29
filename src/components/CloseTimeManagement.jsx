import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import axios from "axios";

import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-datepicker/dist/react-datepicker.css";
import "./CloseTimeManagement.scss";

const CloseTimeManagement = () => {
    const [bookingDate, setBookingDate] = useState(new Date());
    const [selectedTimes, setSelectedTimes] = useState(() => {
        const savedTimes = localStorage.getItem("selectedTimes");
        return savedTimes ? JSON.parse(savedTimes) : {};
    });

    useEffect(() => {
        localStorage.setItem("selectedTimes", JSON.stringify(selectedTimes));
    }, [selectedTimes]);

    const handleDateChange = (date) => {
        setBookingDate(date);
        const formattedDate = date.toLocaleDateString("en-GB").replace(/\//g, "-");
        if (!selectedTimes[formattedDate]) {
            setSelectedTimes((prev) => ({ ...prev, [formattedDate]: [] }));
        }
    };

    const handleCheckboxChange = (event) => {
        event.stopPropagation();
        const { value } = event.target;
        const formattedDate = bookingDate.toLocaleDateString("en-GB").replace(/\//g, "-");

        setSelectedTimes((prevSelectedTimes) => {
            const currentSelectedTimes = prevSelectedTimes[formattedDate] || [];
            const updatedTimes = currentSelectedTimes.includes(value)
                ? currentSelectedTimes.filter((time) => time !== value)
                : [...currentSelectedTimes, value];

            return { ...prevSelectedTimes, [formattedDate]: updatedTimes };
        });
    };

    const handleSubmit = () => {
        const formattedDate = bookingDate.toLocaleDateString("en-GB").replace(/\//g, "-");
        const closeTimes = {
            date: formattedDate,
            time: selectedTimes[formattedDate] || [], // Sử dụng giờ đã chọn cho ngày hiện tại
        };

        const token = localStorage.getItem("token");

        axios.post("http://localhost:8082/api/close-times/create", closeTimes, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then((response) => {
                console.log("Close times created:", response.data);
            })
            .catch((error) => {
                console.error("Error creating close times", error);
            });
    };

    const formattedCurrentDate = bookingDate.toLocaleDateString("en-GB").replace(/\//g, "-");

    return (
        <div className="close-time-management m-lg-2">
            <h4 className="close-time-title">Close Time</h4>
            <div className="date-picker-wrapper">
                <DatePicker
                    selected={bookingDate}
                    onChange={handleDateChange}
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
                            checked={selectedTimes[formattedCurrentDate]?.includes(time) || false} // Kiểm tra an toàn
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
            <button className="btn btn-primary" onClick={handleSubmit}>
                Confirm Close Times
            </button>
        </div>
    );
};

export default CloseTimeManagement;
