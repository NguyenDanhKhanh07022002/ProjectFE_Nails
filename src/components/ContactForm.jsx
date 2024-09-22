import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "./ContactForm.scss";
import Button from "./Button";
import MiniBanner from "./MiniBanner";
import axios from 'axios';

import promoImg1 from "../assets/promo/promo-01.jpg";
import promoImg2 from "../assets/promo/promo-02.jpg";
import promoImg3 from "../assets/promo/promo-03.jpg";
import promoImg4 from "../assets/promo/promo-04.jpg";
import { colors } from "@mui/material";

function ContactForm() {
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [yourMessage, setMessage] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      username,
      email,
      subject,
      yourMessage,
    };

    axios
      .post(`http://localhost:8082/api/message/create`, data)
      .then((response) => {
        setSuccess("Thank you. Your message has been successfully sent.");
        handleReset();
        toast.success("Your message has been sent!");
      })
      .catch((error) => {
        console.error(error);
        toast.error("There was an error sending your message.");
      });
  };

  const handleReset = () => {
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        closeOnClick
        draggable
      />
      <div id="widget-container">
        <div className="service-offer-title">
          <span className="service-offer-title-section">Máte dotaz?</span>
          <h2>Napište nám</h2>
        </div>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="contact-form-wrapper">
          <input
            className="contact-form--item__half"
            type="text"
            name="name"
            placeholder="Vaše jméno*"
            required
            value={username}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="contact-form--item__half"
            type="email"
            name="email"
            placeholder="Váš e-mail*"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="contact-form-wrapper">
          <input
            className="contact-form--item"
            type="text"
            name="subject"
            placeholder="Předmět"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>
        <div className="contact-form-wrapper">
          <textarea
            className="contact-form--item"
            name="description"
            rows="10"
            placeholder="Vaše zpráva"
            value={yourMessage}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <div style={{ display: "flex", flexDirection: "row-reverse" }}>
          <Button hoverColor="blue" title="BookingVisit" />
        </div>
        {success && <div style={{ color: 'green' }}>{success}</div>}
      </form>
      <div className="contact-promo">
        <MiniBanner
          image={promoImg1}
          title="Nabízíme"
          linkTitle="Služby"
          linkTo="/service"
        />
        <MiniBanner
          image={promoImg2}
          title="Kolik vše stojí"
          linkTitle="Ceník"
          linkTo="/price"
        />
        <MiniBanner
          image={promoImg3}
          title="Více o Nails HT 86"
          linkTitle="O nás"
          linkTo="/about"
        />
        <MiniBanner
          image={promoImg4}
          title="Objednejte se"
          linkTitle="Rezervace"
          linkTo="/reserve"
        />
      </div>
    </>
  );
}

export default ContactForm;
