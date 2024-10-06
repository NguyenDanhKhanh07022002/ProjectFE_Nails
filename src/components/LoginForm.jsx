import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./LoginForm.scss";

const LoginForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    submit: "",
    username: "",
    password: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    let formErrors = { ...errors };

    if (value.trim() === "") {
      formErrors[name] = `${
        name.charAt(0).toUpperCase() + name.slice(1)
      } is required`;
    }

    setErrors(formErrors);
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formData.username) {
      formErrors.username = "Username is required";
    } else if (formData.username.length < 3) {
      formErrors.username = "Username must be at least 3 characters";
    }

    if (!formData.password) {
      formErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      formErrors.password = "Password must be at least 6 characters";
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);

    if (!validateForm()) {
      setSubmitting(false);
      return;
    }

    handleLogin(formData, { setErrors, setSubmitting });
  };

  const handleLogin = (values, { setErrors, setSubmitting }) => {
    axios
      .post("http://localhost:8082/api/auth/signin", {
        username: values.username,
        password: values.password,
      })
      .then((response) => {
        console.log("Login successful:", response.data);
        localStorage.setItem("token", response.data.accessToken);
        localStorage.setItem("userId", response.data.id);
        navigate("/admin/booking");
      })
      .catch((error) => {
        console.error(
          "Login error:",
          error.response ? error.response.data : error.message
        );
        setErrors({
          submit:
            error.response?.data?.message || "Invalid username or password",
        });
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Nails CZ</h2>
        {errors.submit && <div className="error-message">{errors.submit}</div>}
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            onBlur={handleBlur}
            required
          />
          {errors.username && (
            <div className="error-message">{errors.username}</div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            onBlur={handleBlur}
            required
          />
          {errors.password && (
            <div className="error-message">{errors.password}</div>
          )}
        </div>
        <button type="submit" className="login-btn" disabled={submitting}>
          {submitting ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
