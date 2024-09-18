import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "./ContactForm.scss";
import Button from "./Button";
import MiniBanner from "./MiniBanner";

import promoImg1 from "../assets/promo/promo-01.jpg";
import promoImg2 from "../assets/promo/promo-02.jpg";
import promoImg3 from "../assets/promo/promo-03.jpg";
import promoImg4 from "../assets/promo/promo-04.jpg";
function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    let data = {
      name: name,
      email: email,
      subject: subject,
      message: message,
    };
    console.log(data);
    toast("Success");
  };
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        newestOnTop={false}
        closeOnClick
        draggable
      />
      <ToastContainer />
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
            required={true}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="contact-form--item__half"
            type="email"
            name="email"
            placeholder="Váš e-mail*"
            required={true}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="contact-form-wrapper">
          <input
            className="contact-form--item"
            type="text"
            name="subject"
            placeholder="Předmět"
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>
        <div className="contact-form-wrapper">
          <textarea
            className="contact-form--item"
            name="desciption"
            rows="10"
            placeholder="Vaše zpráva"
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <div style={{ display: "flex", flexDirection: "row-reverse" }}>
          <Button hoverColor="blue" title="BookingVisit" />
        </div>
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
