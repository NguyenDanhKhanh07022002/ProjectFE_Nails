import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Pagination from "@mui/material/Pagination";
import "bootstrap-icons/font/bootstrap-icons.css";
const itemsPerPage = 10;

const getBookingServiceText = (bookingService) => {
  switch (bookingService) {
    case "1":
      return "Manicure";
    case "2":
      return "Pedicure";
    case "3":
      return "Manicure + Pedicure";
    case "4":
      return "Prodluzování Ras";
    case "5":
      return "Massage";
    default:
      return "Unknown Service";
  }
};

const isFutureDate = (date) => {
  const today = new Date();
  return new Date(date) > today;
};

const isPastDate = (date) => {
  const today = new Date();
  return new Date(date) < today;
};

const BookingManagement = () => {
  const [bookingData, setBookingData] = useState([]);
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const dropdownRef = useRef(null);

  const [serviceTotals, setServiceTotals] = useState({
    total: 0,
    manicure: 0,
    pedicure: 0,
    manicurePedicure: 0,
    prodluzovaniRas: 0,
    massage: 0,
  });

  const getAll = () => {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:8082/api/bookings/getAll", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const data = response.data;
        const transformedRows = data
          .map((item) => ({
            id: item.id,
            date: item.date,
            time: item.time,
            fullName: item.fullName,
            phoneNumber: item.phoneNumber,
            service: item.bookingService,
            email: item.email,
            bookingService: getBookingServiceText(item.bookingService),
            description: item.description,
          }))
          .sort((a, b) => new Date(b.date) - new Date(a.date));

        setBookingData(transformedRows);
        setCurrentPage(1);
        setPageCount(Math.ceil(transformedRows.length / itemsPerPage));
        setCurrentItems(transformedRows.slice(0, itemsPerPage));
        calculateServiceTotals(transformedRows);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError("Error fetching booking data");
      });
  };
  const calculateServiceTotals = (data) => {
    const totals = {
      total: data.length,
      manicure: data.filter((item) => item.bookingService === "Manicure")
        .length,
      pedicure: data.filter((item) => item.bookingService === "Pedicure")
        .length,
      manicurePedicure: data.filter(
        (item) => item.bookingService === "Manicure + Pedicure"
      ).length,
      prodluzovaniRas: data.filter(
        (item) => item.bookingService === "Prodluzování Ras"
      ).length,
      massage: data.filter((item) => item.bookingService === "Massage").length,
    };
    setServiceTotals(totals);
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

  useEffect(() => {
    getAll();
  }, []);

  const onDelete = (id) => {
    Swal.fire({
      title: "Do you want to delete this booking?",
      showCancelButton: true,
      confirmButtonText: "OK",
    }).then((result) => {
      if (result.isConfirmed) {
        const token = localStorage.token;
        axios
          .delete(`http://localhost:8082/api/bookings/delete/${id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((response) => {
            console.log("Response:", response);
            if (response.status === 204) {
              Swal.fire("Deleted!", "", "success");
              getAll();
            } else {
              Swal.fire("Error", "Could not delete booking.", "error");
            }
          })
          .catch((error) => {
            console.error("Error deleting booking:", error);
            Swal.fire("Error", "Could not delete booking.", "error");
          });
      }
    });
  };

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
    const newOffset = (value - 1) * itemsPerPage;
    setCurrentItems(bookingData.slice(newOffset, newOffset + itemsPerPage));
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    if (!searchTerm.trim()) {
      getAll();
      return;
    }
    if (searchTerm.trim() === "") {
      setCurrentItems(bookingData.slice(0, itemsPerPage));
      setPageCount(Math.ceil(bookingData.length / itemsPerPage));
      setCurrentPage(1);
      return;
    }

    axios
      .get("http://localhost:8082/api/bookings/getPhoneNumberOrEmail", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          phoneNumber: searchTerm,
          email: searchTerm,
        },
      })
      .then((response) => {
        const data = response.data;
        const transformedRows = data
          .map((item) => ({
            id: item.id,
            date: item.date,
            time: item.time,
            fullName: item.fullName,
            phoneNumber: item.phoneNumber,
            service: item.bookingService,
            email: item.email,
            bookingService: getBookingServiceText(item.bookingService),
            description: item.description,
          }))
          .sort((a, b) => new Date(b.date) - new Date(a.date));

        setBookingData(transformedRows);
        setCurrentPage(1);
        setCurrentItems(transformedRows.slice(0, itemsPerPage));
        setPageCount(Math.ceil(transformedRows.length / itemsPerPage));
        calculateServiceTotals(transformedRows);
      })
      .catch((error) => {
        console.error("Error searching bookings:", error);
        setError("Error searching bookings");
      });
  };

  return (
    <div className="admin-page" ref={dropdownRef}>
      <main className="admin-content">
        <h4>Booking management</h4>
        <div className="cards-container">
          <div className="card">
            <h4>Total Booking Service</h4>
            <p>{serviceTotals.total}</p>
          </div>
          <div className="card">
            <h4>Total Manicure</h4>
            <p>{serviceTotals.manicure}</p>
          </div>
          <div className="card">
            <h4>Total Pedicure</h4>
            <p>{serviceTotals.pedicure}</p>
          </div>
          <div className="card">
            <h4>Total Manicure + Pedicure</h4>
            <p>{serviceTotals.manicurePedicure}</p>
          </div>
          <div className="card">
            <h4>Prodluzování Ras</h4>
            <p>{serviceTotals.prodluzovaniRas}</p>
          </div>
          <div className="card">
            <h4>Massage</h4>
            <p>{serviceTotals.massage}</p>
          </div>
        </div>
        {error && <div className="error-message">{error}</div>}
        <div className="custom-search-container">
          <div className="custom-search-container--form">
            <input
              type="text"
              placeholder="Search by Phone or Email..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="custom-search-input"
            />
            <button onClick={handleSearch} className="custom-search-btn">
              Search
            </button>
          </div>
        </div>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>ORDINAL NUMBER</th>
                <th>DATE</th>
                <th>TIME</th>
                <th>FULL NAME</th>
                <th>PHONE NUMBER</th>
                <th>EMAIL</th>
                <th>BOOKING SERVICE</th>
                <th>DESCRIPTION</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((item, index) => {
                const isFuture = isFutureDate(item.date);
                const isPast = isPastDate(item.date);
                const isToday =
                  new Date(item.date).toDateString() ===
                  new Date().toDateString();

                return (
                  <tr
                    key={item.id}
                    style={{
                      backgroundColor: isToday
                        ? "inherit"
                        : isPast
                          ? "#ffcccc"
                          : isFuture
                            ? "#ccffcc"
                            : "inherit",
                      transition: "background-color 0.3s",
                      "&:hover": {
                        backgroundColor: isPast
                          ? "#ffb3b3"
                          : isFuture
                            ? "#b3ffb3"
                            : "inherit",
                      },
                    }}
                  >
                    <td>{(currentPage - 1) * itemsPerPage + index + 1}</td>
                    <td>{item.date}</td>
                    <td>{item.time}</td>
                    <td>{item.fullName}</td>
                    <td>{item.phoneNumber}</td>
                    <td>{item.email}</td>
                    <td>{item.bookingService}</td>
                    <td>{item.description}</td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => onDelete(item.id)}
                      >
                        <i className="bi bi-trash"></i>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <Pagination
            count={Math.ceil(bookingData.length / itemsPerPage)}
            page={currentPage}
            onChange={handlePageChange}
            color="primary"
            style={{ marginTop: "20px" }}
          />
        </div>
      </main>
    </div>
  );
};

export default BookingManagement;
