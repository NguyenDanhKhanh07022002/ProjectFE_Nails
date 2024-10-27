import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";
import config from "../../config";

import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./MessageManagement.scss";

const MessageManagement = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const navigate = useNavigate();

  const getAll = () => {
    const token = localStorage.token;
    if (token == null) {
      navigate("/admin/login");
    }
    axios
      .get(`${config.apiUrl}/api/message/getAll`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    getAll();
  }, []);

  const onDelete = (id) => {
    Swal.fire({
      title: "Do you want to delete this message?",
      showCancelButton: true,
      confirmButtonText: "OK",
    }).then((result) => {
      if (result.isConfirmed) {
        const token = localStorage.token;
        axios
          .delete(`${config.apiUrl}/api/message/delete/${id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((response) => {
            console.log("Response:", response);
            if (response.status === 204) {
              Swal.fire("Deleted!", "", "success");
              getAll();
            }
          })
          .catch((error) => {
            console.error("Error deleting message:", error);
            Swal.fire("Error", "Could not delete message.", "error");
          });
      }
    });
  };

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <>
      <div className="m-lg-2">
        <h4>Message comment</h4>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>SUBJECT</th>
              <th>MESSAGE</th>
              <th className="text-center">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.length > 0 ? (
              currentItems.map((item, index) => (
                <tr key={index}>
                  <td>{item.username}</td>
                  <td>{item.email}</td>
                  <td className="text-center">{item.subject}</td>
                  <td className="text-center">{item.yourMessage}</td>
                  <td className="text-center">
                    <button
                      className="btn btn-danger"
                      onClick={() => onDelete(item.id)}
                    >
                      <i className="bi bi-trash"></i>
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center">
                  No data available
                </td>
              </tr>
            )}
          </tbody>
        </table>

        <Stack
          spacing={2}
          sx={{ mt: 2, mb: 2, justifyContent: "center", alignItems: "center" }}
        >
          <Pagination
            count={Math.ceil(data.length / itemsPerPage)}
            page={currentPage}
            onChange={handlePageChange}
            color="primary"
          />
        </Stack>
      </div>
    </>
  );
};

export default MessageManagement;
