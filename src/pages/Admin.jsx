import React from "react";
import { useState } from "react";
import "./Admin.scss";
import logoImg from "../assets/ht86-yellow.png";

import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ReactPaginate from "react-paginate";
const itemsPerPage = 8;
const Admin = () => {
  const bookingData = [
    {
      name: "John Doe",
      dob: "1990-01-15",
      bookingDate: "2024-09-29",
      time: "04:20",
      service: "Spa",
    },
    {
      name: "Jane Smith",
      dob: "1985-06-30",
      bookingDate: "2024-09-28",
      time: "04:20",
      service: "Massage",
    },
    {
      name: "Mary Johnson",
      dob: "1975-11-12",
      bookingDate: "2024-09-27",
      time: "04:20",
      service: "Facial",
    },
    {
      name: "Robert Brown",
      dob: "1995-03-22",
      bookingDate: "2024-09-26",
      time: "04:20",
      service: "Haircut",
    },
    {
      name: "John Doe",
      dob: "1990-01-15",
      bookingDate: "2024-09-29",
      time: "04:20",
      service: "Spa",
    },
    {
      name: "Jane Smith",
      dob: "1985-06-30",
      bookingDate: "2024-09-28",
      time: "04:20",
      service: "Massage",
    },
    {
      name: "Mary Johnson",
      dob: "1975-11-12",
      bookingDate: "2024-09-27",
      time: "04:20",
      service: "Facial",
    },
    {
      name: "Robert Brown",
      dob: "1995-03-22",
      bookingDate: "2024-09-26",
      time: "04:20",
      service: "Haircut",
    },
    {
      name: "John Doe",
      dob: "1990-01-15",
      bookingDate: "2024-09-29",
      time: "04:20",
      service: "Spa",
    },
    {
      name: "Jane Smith",
      dob: "1985-06-30",
      bookingDate: "2024-09-28",
      time: "04:20",
      service: "Massage",
    },
    {
      name: "Mary Johnson",
      dob: "1975-11-12",
      bookingDate: "2024-09-27",
      time: "04:20",
      service: "Facial",
    },
    {
      name: "Robert Brown",
      dob: "1995-03-22",
      bookingDate: "2024-09-26",
      time: "04:20",
      service: "Haircut",
    },
  ];
  const [currentItems, setCurrentItems] = useState(
    bookingData.slice(0, itemsPerPage)
  );
  const [pageCount, setPageCount] = useState(
    Math.ceil(bookingData.length / itemsPerPage)
  );

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % bookingData.length;
    const newItems = bookingData.slice(newOffset, newOffset + itemsPerPage);
    setCurrentItems(newItems);
  };
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchTerm);
    // Add your search logic here
  };
  return (
    <div className="admin-page">
      <header className="admin-header">
        <div className="admin-logo">
          <img src={logoImg} alt="logo" />
        </div>
        <div className="user-notification">
          <Badge color="warning" badgeContent={0} showZero>
            <NotificationsIcon className="icon" />
          </Badge>
          <AccountCircleIcon className="icon" />
        </div>
      </header>

      <main className="admin-content">
        <h1>Admin Dashboard</h1>
        <div className="custom-search-container">
          <form onSubmit={handleSearchSubmit}>
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="custom-search-input"
            />
            <button type="submit" className="custom-search-btn">
              Search
            </button>
          </form>
        </div>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Date of Birth</th>
                <th>Booking Date</th>
                <th>Booking Time</th>
                <th>Booking Service</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.dob}</td>
                  <td>{item.bookingDate}</td>
                  <td>{item.time}</td>
                  <td>{item.service}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <ReactPaginate
          previousLabel={"← Previous"}
          nextLabel={"Next →"}
          breakLabel={"..."}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          activeClassName={"active"}
        />
      </main>
    </div>
  );
};

export default Admin;
