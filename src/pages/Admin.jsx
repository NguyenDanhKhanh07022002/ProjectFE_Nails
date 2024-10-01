import React, { useEffect, useRef, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./Admin.scss";
import logoImg from "../assets/ht86-yellow.png";

import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import "bootstrap-icons/font/bootstrap-icons.css";
const Admin = () => {
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

  const handleLogout = () => {
    console.log("Logged out");
  };
  const handleClickOutside = (event) => {
    event.preventDefault();
    setShowNotifications(false);
    setShowAccountMenu(false);
  };

  useEffect(() => {
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="admin-page" ref={dropdownRef}>
      {/* <Nav defaultActiveKey="/home" className="flex-column sidebar">
        <Nav.Link href="/home">Active</Nav.Link>
        <Nav.Link eventKey="link-1">Link</Nav.Link>
        <Nav.Link eventKey="link-2">Link</Nav.Link>
        <Nav.Link eventKey="disabled" disabled>Disabled</Nav.Link>
      </Nav> */}
      <header className="admin-header">
        <div className="admin-logo">
          <img src={logoImg} alt="logo" />
        </div>
        <div className="user-notification">
          <div className="user-notification--item">
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
          </div>
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
          <NavLink to="/admin/booking" activeclassname="active">
            booking
          </NavLink>
          <NavLink to="/admin/message" activeclassname="active">
            message
          </NavLink>
        </div>
        <div className="admin-body--content">
          <Outlet />
        </div>
      </nav>
    </div>
  );
};

export default Admin;
