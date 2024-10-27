import React, { useEffect, useRef, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./Admin.scss";
import logoImg from "../assets/ht86-yellow.png";
import video from "../assets/video-admin/2.mp4";
import { AiFillAppstore, AiFillMessage } from "react-icons/ai";
import Swal from "sweetalert2";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import config from "../../config";

import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import { FaClock } from 'react-icons/fa';
import "bootstrap-icons/font/bootstrap-icons.css";

const Admin = () => {
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState([
    {
      message:
        "asdasdd a asd asd adgvdfvdfv ae srg dfb dfbs as sdfbseg AWF ASDV ",
    },
    {
      message:
        "asdasdd a asd asd adgvdfvdfv ae srg dfb dfbs as sdfbseg AWF ASDV ",
    },
  ]);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const dropdownRef = useRef(null);

  const toggleNotifications = (event) => {
    event.stopPropagation();
    setShowNotifications((prev) => !prev);
    setShowAccountMenu(false);
  };

  const toggleAccountDropdown = (event) => {
    event.stopPropagation();
    setShowAccountMenu((prev) => !prev);
    setShowNotifications(false);
  };

  const handleLogout = async () => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "Do you want to log out?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, log out",
      cancelButtonText: "No, cancel",
    });

    if (result.isConfirmed) {
      axios
        .post(`${config.apiUrl}/api/auth/logout`)
        .then(() => {
          localStorage.removeItem("token");
          navigate("/admin/login");
        })
        .catch((error) => {
          console.error("Error during logout", error);
        });
    }
  };
  const handleClickOutside = (event) => {
    event.preventDefault();
    setShowNotifications(false);
    setShowAccountMenu(false);
  };
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    if (videoElement) {
      const hideControls = () => {
        videoElement.controls = false;
      };

      const showControls = () => {
        videoElement.controls = true;
      };

      videoElement.addEventListener("mousemove", showControls);
      videoElement.addEventListener("mouseleave", hideControls);

      hideControls();

      return () => {
        videoElement.removeEventListener("mousemove", showControls);
        videoElement.removeEventListener("mouseleave", hideControls);
      };
    }
  }, []);
  useEffect(() => {
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="admin-page" ref={dropdownRef}>
      <header className="admin-header">
        <div className="admin-logo">
          <img src={logoImg} alt="logo" />
        </div>
        <div className="videoContainer">
          <video ref={videoRef} controls loop autoPlay muted>
            <source src={video} />
          </video>
        </div>
        <div className="user-notification">
          {/* <div className="user-notification--item">
            <Badge color="warning" badgeContent={notifications.length} showZero>
              <NotificationsIcon
                className="icon notif-icon"
                onClick={toggleNotifications}
              />
            </Badge>
            {showNotifications && (
              <div className="notification-dropdown">
                <div className="notification-dropdown--title">
                  <b>Notification</b>
                </div>
                <ul>
                  {notifications.length > 0 ? (
                    notifications.map((notification, index) => (
                      <li key={index}>*{notification.message}</li>
                    ))
                  ) : (
                    <li>No notifications</li>
                  )}
                </ul>
              </div>
            )}
          </div> */}
          <div className="user-notification--item">
            <AccountCircleIcon
              className="icon user"
              onClick={toggleAccountDropdown}
            />
            {showAccountMenu && (
              <div className="account-dropdown">
                <ul>
                  <li onClick={handleLogout}>
                    Logout
                    <LogoutIcon />
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </header>
      <nav className="admin-body">
        <div className="admin-body--navbar">
          <div>
            <NavLink to="/admin/booking" activeclassname="active">
              <AiFillAppstore />
              booking
            </NavLink>
            <NavLink to="/admin/message" activeclassname="active">
              <AiFillMessage />
              message
            </NavLink>
            <NavLink to="/admin/close-time" activeclassname="active">
              <FaClock />
              close Time
            </NavLink>
          </div>
        </div>
        <div className="admin-body--content">
          <Outlet />
        </div>
      </nav>
    </div>
  );
};
export default Admin;
