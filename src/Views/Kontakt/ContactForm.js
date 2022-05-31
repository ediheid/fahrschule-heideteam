import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";

import styles from "./contact-form.module.scss";

import { init } from "emailjs-com";
init("userId");

// import "dotenv/config";
// require("dotenv").config();

let SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
let TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
let USER_ID = process.env.REACT_APP_USER_ID;

const ContactForm = () => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  let [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();

    // Set email to lowercase
    email = email.toLowerCase();

    if (
      name.length >= 1 &&
      lastname.length >= 1 &&
      message.length >= 4 &&
      subject.length >= 2 &&
      /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
    ) {
      let serviceId = SERVICE_ID;
      let templateId = TEMPLATE_ID;
      let userId = USER_ID;
      const templateParams = {
        name,
        lastname,
        email,
        subject,
        message,
      };

      emailjs
        .send(serviceId, templateId, templateParams, userId)
        .then((response) => console.log(response))
        .then((error) => console.log(error));
      setName("");
      setLastname("");
      setEmail("");
      setSubject("");
      setMessage("");
      // Clears form after successful submit
      setEmailSent(true);
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <section className={styles["contact-form-section"]}>
      <div className={styles["contact-form-container"]} id="contact-form">
        <h3 className={styles["form-heading"]}>
          Schreib <b>uns</b>
        </h3>

        <div className={styles["heading-underline"]}></div>

        <form className={styles["contact-form"]}>
          <label className={styles["contact-form-label"]} htmlFor="fistname">
            Vorname
          </label>
          <input
            className={styles["contact-form-input"]}
            type="text"
            placeholder="Vorname"
            value={name}
            name="fistname"
            maxLength="50"
            onChange={(e) => setName(e.target.value)}
          />

          <label className={styles["contact-form-label"]} htmlFor="lastname">
            Nachname
          </label>
          <input
            className={styles["contact-form-input"]}
            type="text"
            placeholder="Nachname"
            value={lastname}
            name="lastname"
            maxLength="50"
            onChange={(e) => setLastname(e.target.value)}
          />

          <label className={styles["contact-form-label"]} htmlFor="email">
            Email
          </label>
          <input
            className={styles["contact-form-input"]}
            type="email"
            placeholder="Email"
            value={email}
            name="email"
            maxLength="50"
            onChange={(e) => setEmail(e.target.value)}
          />

          <label className={styles["contact-form-label"]} htmlFor="subject">
            Subject
          </label>
          <input
            className={styles["contact-form-input"]}
            type="text"
            placeholder="Thema"
            value={subject}
            name="subject"
            maxLength="50"
            onChange={(e) => setSubject(e.target.value)}
          />

          <label className={styles["contact-form-label"]} htmlFor="message">
            Nachricht
          </label>
          <textarea
            className={`${styles["contact-form-input"]} ${styles["text-container"]}`}
            type="text"
            placeholder="Schreiben Sie ihre Nachricht hier"
            value={message}
            name="message"
            maxLength="800"
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button type="submit" onClick={submit}>
            Nachricht senden
          </button>
          {/* <span className={emailSent ? "visible" : null}>
        Thank you for your message, we will be in touch in no time!
      </span> */}
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
